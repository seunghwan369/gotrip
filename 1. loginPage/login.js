//네이버 로그인 api 
const naverLogin = new naver.LoginWithNaverId(
    {
        clientId: "GO9b6fso7t7MpAVvtPTJ",
        callbackUrl: "http://localhost:5500/5.%20mainPage/index.html",
        loginButton: {color: "green", type: 2, height: 40}
    }
);


naverLogin.init();
naverLogin.getLoginStatus(function (status) {
  if (status) {
      const name=naverLogin.user.getName();
      const email=naverLogin.user.getEmail();
      const nickname=naverLogin.user.getNickName();

      if(name===null||name===undefined || email===null||email===undefined || nickname===null||nickname===undefined){
        alert("정보제공을 동의해주세요.");
        naverLogin.reprompt();
        return ;  
     }else{
      setLoginStatus();
     }
}
});
console.log(naverLogin);

//카카오 로그인 api
function saveToDos(token) { //item을 localStorage에 저장합니다. 
    typeof(Storage) !== 'undefined' && sessionStorage.setItem('AccessKEY', JSON.stringify(token)); 
};

window.Kakao.init('ddc0f8a2bb8eebc1e437fe23d95da4bf');

function kakaoLogin() {
    window.Kakao.Auth.login({
        scope: 'profile_nickname, account_email', //동의항목 페이지에 있는 개인정보 보호 테이블의 활성화된 ID값을 넣습니다.
        success: function(response) {
            saveToDos(response.access_token)  // 로그인 성공하면 사용자 엑세스 토큰 sessionStorage에 저장
            window.Kakao.API.request({ // 사용자 정보 가져오기 
                url: '/v2/user/me',
                success: (res) => {
                    const kakao_account = res.kakao_account;
                    alert('로그인 성공');
                    window.location.href='http://localhost:5500/5.%20mainPage/index.html'
                }
            });
        },
        fail: function(error) {
            console.log(error);
        }
    });
};

const login = document.querySelector('#kakaoLogin');
login.addEventListener('click', kakaoLogin);

