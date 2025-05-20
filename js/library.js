'use strict'

let getParameterByName = (name, url = window.location.href) => {
  name = name.replace(/[\[\]]/g, '\\$&');
  let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

let getChatChannelID = (channelID) => {
  return new Promise((resolve, reject) => {
    fetch(`https://api.chzzk.naver.com/polling/v2/channels/${channelID}/live-status`, {
      method: 'GET',
      headers: {
      }
    })
      .then(async (response) => {
        console.log(`response : ${JSON.stringify(response)}`);
        let res = await response.json();
        if (res.code !== 200) return resolve(null);
        return resolve(res.content.chatID);
      })
  });
}

export {
  getParameterByName,
  getChatChannelID,
}