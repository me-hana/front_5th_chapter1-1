(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const l of t)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function o(t){const l={};return t.integrity&&(l.integrity=t.integrity),t.referrerPolicy&&(l.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?l.credentials="include":t.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(t){if(t.ep)return;t.ep=!0;const l=o(t);fetch(t.href,l)}})();const b={getHtml:()=>`
      <div>
          <footer class="bg-gray-200 p-4 text-center">
            <p>&copy; 2024 항해플러스. All rights reserved.</p>
          </footer>
        </div>
    `},i="/front_5th_chapter1-1/",p=()=>{const e=location.hash,s=JSON.parse(localStorage.getItem("user")),o=t=>e===t?"text-blue-600 font-bold":"text-gray-600",a=s?`
              <li><a href="${i}#/profile" data-link class="${o("#/profile")}">프로필</a></li>
              <li><a href="#" id="logout" data-link class="text-gray-600">로그아웃</a></li>`:`<li><a href="${i}#/login" data-link class="text-gray-600">로그인</a></li>`;return`
<div>
          <header class="bg-blue-600 text-white p-4 sticky top-0">
            <h1 class="text-2xl font-bold">항해플러스</h1>
          </header>
          <nav class="bg-white shadow-md p-2 sticky top-14">
            <ul class="flex justify-around">
              <li><a href="${i}#/" data-link class="${o("#/")}">홈</a></li>
              ${a}
            </ul>
          </nav>
      </div>
    `},n=()=>`
  <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        ${p()}
  
        <main class="p-4">
          <div class="mb-4 bg-white rounded-lg shadow p-4">
            <textarea
              class="w-full p-2 border rounded"
              placeholder="무슨 생각을 하고 계신가요?"
            ></textarea>
            <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">
              게시
            </button>
          </div>
  
          <div class="space-y-4">
            <div class="bg-white rounded-lg shadow p-4">
              <div class="flex items-center mb-2">
                <img
                  src="https://placehold.co/40"
                  alt="프로필"
                  class="rounded-full mr-2"
                />
                <div>
                  <p class="font-bold">홍길동</p>
                  <p class="text-sm text-gray-500">5분 전</p>
                </div>
              </div>
              <p>오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!</p>
              <div class="mt-2 flex justify-between text-gray-500">
                <button>좋아요</button>
                <button>댓글</button>
                <button>공유</button>
              </div>
            </div>
  
            <div class="bg-white rounded-lg shadow p-4">
              <div class="flex items-center mb-2">
                <img
                  src="https://placehold.co/40"
                  alt="프로필"
                  class="rounded-full mr-2"
                />
                <div>
                  <p class="font-bold">김철수</p>
                  <p class="text-sm text-gray-500">15분 전</p>
                </div>
              </div>
              <p>새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!</p>
              <div class="mt-2 flex justify-between text-gray-500">
                <button>좋아요</button>
                <button>댓글</button>
                <button>공유</button>
              </div>
            </div>
  
            <div class="bg-white rounded-lg shadow p-4">
              <div class="flex items-center mb-2">
                <img
                  src="https://placehold.co/40"
                  alt="프로필"
                  class="rounded-full mr-2"
                />
                <div>
                  <p class="font-bold">이영희</p>
                  <p class="text-sm text-gray-500">30분 전</p>
                </div>
              </div>
              <p>오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?</p>
              <div class="mt-2 flex justify-between text-gray-500">
                <button>좋아요</button>
                <button>댓글</button>
                <button>공유</button>
              </div>
            </div>
  
            <div class="bg-white rounded-lg shadow p-4">
              <div class="flex items-center mb-2">
                <img
                  src="https://placehold.co/40"
                  alt="프로필"
                  class="rounded-full mr-2"
                />
                <div>
                  <p class="font-bold">박민수</p>
                  <p class="text-sm text-gray-500">1시간 전</p>
                </div>
              </div>
              <p>주말에 등산 가실 분 계신가요? 함께 가요!</p>
              <div class="mt-2 flex justify-between text-gray-500">
                <button>좋아요</button>
                <button>댓글</button>
                <button>공유</button>
              </div>
            </div>
  
            <div class="bg-white rounded-lg shadow p-4">
              <div class="flex items-center mb-2">
                <img
                  src="https://placehold.co/40"
                  alt="프로필"
                  class="rounded-full mr-2"
                />
                <div>
                  <p class="font-bold">정수연</p>
                  <p class="text-sm text-gray-500">2시간 전</p>
                </div>
              </div>
              <p>새로 나온 영화 재미있대요. 같이 보러 갈 사람?</p>
              <div class="mt-2 flex justify-between text-gray-500">
                <button>좋아요</button>
                <button>댓글</button>
                <button>공유</button>
              </div>
            </div>
          </div>
        </main>
  
        ${b.getHtml()}
      </div>
    </div>
`,f=()=>`
  <main class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full text-center" style="max-width: 480px">
      <h1 class="text-2xl font-bold text-blue-600 mb-4">항해플러스</h1>
      <p class="text-4xl font-bold text-gray-800 mb-4">404</p>
      <p class="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다</p>
      <p class="text-gray-600 mb-8">
        요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
      </p>
      <a href="/" class="bg-blue-600 text-white px-4 py-2 rounded font-bold">
        홈으로 돌아가기
      </a>
    </div>
  </main>
`,d=()=>{let e={username:"",password:""};return`
    <main class="bg-gray-100 flex items-center justify-center min-h-screen">
      <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">항해플러스</h1>
        <form id="login-form">
          <div class="mb-4">
            <input id="username" type="text" placeholder="사용자 이름" class="w-full p-2 border rounded" value="${e.username}">
          </div>
          <div class="mb-6">
            <input id="password" type="password" placeholder="비밀번호" class="w-full p-2 border rounded" value="${e.password}">
          </div>
          <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">로그인</button>
        </form>
        <div class="mt-4 text-center">
          <a href="#" class="text-blue-600 text-sm">비밀번호를 잊으셨나요?</a>
        </div>
        <hr class="my-6">
        <div class="text-center">
          <button class="bg-green-500 text-white px-4 py-2 rounded font-bold">새 계정 만들기</button>
        </div>
      </div>
    </main>
`},h=()=>{let e={username:"",email:"",bio:"",...JSON.parse(localStorage.getItem("user"))};return`
  <div id="root">
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        <header class="bg-blue-600 text-white p-4 sticky top-0">
          <h1 class="text-2xl font-bold">항해플러스</h1>
        </header>

        <nav class="bg-white shadow-md p-2 sticky top-14">
          <ul class="flex justify-around">
            <li><a href="/" class="text-gray-600">홈</a></li>
            <li><a href="/profile" class="text-blue-600">프로필</a></li>
            <li><a href="#" class="text-gray-600">로그아웃</a></li>
          </ul>
        </nav>

        <main class="p-4">
          <div class="bg-white p-8 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">
              내 프로필
            </h2>
            <form id="profile-form">
              <div class="mb-4">
                <label
                  for="username"
                  class="block text-gray-700 text-sm font-bold mb-2"
                  >사용자 이름</label
                >
                <input
                  type="text"
                  id="username"
                  name="username"
                  value="${e.username}"
                  class="w-full p-2 border rounded"
                />
              </div>
              <div class="mb-4">
                <label
                  for="email"
                  class="block text-gray-700 text-sm font-bold mb-2"
                  >이메일</label
                >
                <input
                  type="email"
                  id="email"
                  name="email"
                  value="${e.email}"
                  class="w-full p-2 border rounded"
                />
              </div>
              <div class="mb-6">
                <label
                  for="bio"
                  class="block text-gray-700 text-sm font-bold mb-2"
                  >자기소개</label
                >
                <textarea
                  id="bio"
                  name="bio"
                  rows="4"
                  class="w-full p-2 border rounded"
                >${e.bio}</textarea>
              </div>
              <button
                type="submit"
                class="w-full bg-blue-600 text-white p-2 rounded font-bold"
              >
                프로필 업데이트
              </button>
            </form>
          </div>
        </main>

        <footer class="bg-gray-200 p-4 text-center">
          <p>&copy; 2024 항해플러스. All rights reserved.</p>
        </footer>
      </div>
    </div>
  </div>
`},g={"#/":n,"#/login":d,"#/profile":h},c=()=>{if(!location.hash||location.hash==="#"){location.hash="#/";return}const e=location.hash||"#/",s=g[e],o=JSON.parse(localStorage.getItem("user"));if(s)if(location.hash==="#/login"&&o){document.querySelector("#root").innerHTML=n();return}else if(location.hash==="#/profile"&&!o){document.querySelector("#root").innerHTML=d();return}else{document.querySelector("#root").innerHTML=s();return}else{document.querySelector("#root").innerHTML=f();return}};window.addEventListener("hashchange",c);window.addEventListener("DOMContentLoaded",c);const v=e=>{e.target.id==="logout"&&(e.preventDefault(),localStorage.removeItem("userInfo"),location.hash="#/login")};document.addEventListener("click",e=>{const s=e.target.closest("a[data-link]");if(s){e.preventDefault();const a=s.getAttribute("href").split("#")[1];location.hash=a?`#${a}`:"#/"}});const x=e=>{var s,o,a,t;if(e.preventDefault(),e.target.id==="profile-form"){const l=((s=document.querySelector("#username"))==null?void 0:s.value.trim())||"",r=((o=document.querySelector("#email"))==null?void 0:o.value.trim())||"",u=((a=document.querySelector("#bio"))==null?void 0:a.value.trim())||"",m={username:l,email:r,bio:u};localStorage.setItem("user",JSON.stringify(m)),location.hash="#/"}else if(e.target.id==="login-form"){const r={username:((t=document.querySelector("#username"))==null?void 0:t.value.trim())||"",email:"",bio:""};localStorage.setItem("user",JSON.stringify(r)),location.hash="#/"}};document.addEventListener("click",v);document.addEventListener("submit",x);
