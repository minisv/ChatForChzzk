'use strict'

import { addMessage } from "./forms.js";
import { getChatChannelID, getParameterByName } from "./library.js";

let socket;
let isManualClose = false;

let connectWebSocket = () => {
  const ssID = Math.floor(Math.random() * 10) + 1;
  const serverUrl = "wss://kr-ss"+ssID+".chat.naver.com/chat";
  
  socket  = new WebSocket(serverUrl);
  
  socket.addEventListener("open", async () => {
    addMessage("✅ 서버에 연결되었습니다.");
    
    let channelID = getParameterByName("chzzk");
    if (channelID === null || channelID === "") return;
    let chatChannelID = await getChatChannelID(channelID);
    if (chatChannelID === null || chatChannelID === "") return;
    let option =  { "ver": "2", "cmd": 100, "svcid": "game", "cid": `${chatChannelID}`, "bdy": { "devType":2001, "auth":"READ" }, "tid": 1 };
    socket.send(JSON.stringify(option));
  });
  
  socket.addEventListener("message", (event) => {
    let data = JSON.parse(event.data);
    //console.log(`event : ${JSON.stringify(data)}`);
    if (data.bdy?.[Symbol.iterator]) {
      for (let body of data.bdy) {
        //console.log(`body : ${JSON.stringify(body)}`);
        let profile = JSON.parse(body.profile);
        let extras = JSON.parse(body.extras);
        let timeZoneOption = {timeZone:'Asia/Seoul', year:'numeric', month:'2-digit', day:'2-digit', hour:'2-digit', minute:'2-digit', second:'2-digit', fractionalSecondDigits:3, hour12:false};
        addMessage(`📨${new Intl.DateTimeFormat('ko-KR', timeZoneOption).format(body.msgTime)} - [${profile.userRoleCode}] ${profile.nickname} : ${body.msg}`);
      }
    }
    if (data.cmd === 0) socket.send(JSON.stringify({"ver": "2", "cmd": 10000}));
    else if (data.cmd === 10100) socket.send(JSON.stringify({"ver": "2", "cmd": 0}));
  });
  
  socket.addEventListener("close", () => {
    addMessage("❌ 서버와 연결이 끊겼습니다. 자동으로 재 연결을 시도 합니다.");
    if (!isManualClose) connectWebSocket();
  });
  
  socket.addEventListener("error", (error) => {
    console.error("WebSocket 오류:", error);
    addMessage("⚠️ 오류 발생: 콘솔을 확인하세요.");
  });
  
}

window.addEventListener("beforeunload", () => {
  isManualClose = true;
  socket.close();
});

connectWebSocket();