import { setUser, isLoggedIn } from "../util/store";

export const LoginPage = {
  getHtml: async () => {
    if (isLoggedIn()) {
      // alert("이미 로그인된 사용자입니다.");
    }

    let userInfo = {
      email: "",
      pw: "",
    };

    return /*html*/ `
    <main class="bg-gray-100 flex items-center justify-center min-h-screen">
      <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">항해플러스</h1>
        <form id="login-form">
          <div class="mb-4">
            <input id="login-email" type="text" placeholder="이메일 또는 전화번호" class="w-full p-2 border rounded" value="${userInfo.email}">
          </div>
          <div class="mb-6">
            <input id="login-password" type="password" placeholder="비밀번호" class="w-full p-2 border rounded" value="${userInfo.pw}">
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
    `;
  },
  afterRender: () => {
    const form = document.querySelector("#login-form");

    form?.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = document.querySelector("#login-email")?.value.trim() || "";
      const pw = document.querySelector("#login-pw")?.value.trim() || "";

      const userInfo = {
        ...JSON.parse(localStorage.getItem("userInfo")),
        email,
        pw,
      };

      setUser(userInfo);

      alert("로그인 되었습니다.");
      history.replaceState(null, null, "/");
    });
  },
};
