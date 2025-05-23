# ChatForChzzk
Chat for Chzzk

### 테스트 버전
- 테스트 버전 입니다.
- 테스트가 종료 되면 이 문구가 삭제 됩니다.

### 개발 목적
- 이 프로그램은 치지직 방송 하시는 분들을 위해 공개한 오픈 프로젝트 입니다.

### 기능 설명
- 치지직 채팅을 읽고 해당 채팅을 표시해 줍니다.

### 라이선스
- 이 프로젝트는 소스를 공개한 오픈 소스 프로젝트(Open Source Project) 입니다.
- 이 프로젝트는 [CC BY-NC 한글](https://creativecommons.org/licenses/by-nc/4.0/deed.ko), [CC BY-NC English](https://creativecommons.org/licenses/by-nc/4.0/) 를 따릅니다. 누구나 무료로 이용할 수 있지만, 상업적으로 사용해선 안됩니다.

### 사용 방법
- https://minisv.github.io/ChatForChzzk/?chzzk=
- 위의 주소 chzzk= 뒤 부분에 여러분의 방송 chatChannelID 를 입력 합니다.

### chatChannelID 알아오는 방법
- 예를 들어, https://chzzk.naver.com/769788af1e0d5fc7caeeb025504e62d8 채널주소가 이와 같다면? 76으로 시작하는 긴 값이 여러분의 채널 아이디 값이 됩니다.
- https://api.chzzk.naver.com/polling/v2/channels/(여러분의채널아이디값)/live-status 로 접속하면 chatChannelID 뒤의 값이 나옵니다. 여러분의 채널 아이디 값을 대입하여 확인해 주세요.
- 해당 값을 사용 방법에서 안내한 주소 처럼 ?chzzk=chatChannelID 로 셋팅 하면 됩니다.

### OBS 연동 방법
- OBS 소스 목록에서 아래 + 버튼을 누르고 "브라우저" 를 눌러서 추가해주세요.
- 적당히 이름을 지어주고, URL 에 위의 chatChannelID 알아오는 방법을 통해 얻은 값을 https://minisv.github.io/ChatForChzzk/?chzzk= 뒤에 공백없이 붙여넣어주세요.
- 적당히 너비와 높이를 주고 잘 나오는지 확인 하시면 됩니다.

### 주의 사항
- 19금 방송이 체크된 경우 데이터를 확인 할 수 없습니다. (19금 방송의 경우 채팅 채널 연결에 인증이 필수 입니다.)
- 와우봇 처럼 계정 인증을 통하여 채팅 채널에 로그인 한 것이 아니므로 채팅에 쓰기를 할 수 없습니다.
- 더욱 확장된 기능을 사용하고 싶으시다면 계정 인증을 통한 프로그램을 사용해주세요.

### 와우봇 소개
- 이 프로젝트는 와우봇 개발중 일부 프로그램을 공개형으로 전환한 것 입니다.
- 와우봇은 방송을 좀 더 재밌고 쉽게 할 수 있도록 도와주는 프로그램 입니다.

### 궁금한점은?
- 디스코드 minirune 으로 친구요청 하시고 문의 하여 주시기 바랍니다.
- 친구요청 하실때엔 치지직 방송채널 링크도 함께 보내주시면 더 좋겠습니다.

### 마무리 글
- 아직 테스트 버전 이에용!