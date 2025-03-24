import { Footer } from "../common/Footer";
import { Header } from "../common/Header";

export const ProfilePage = {
  getHtml: async () => {
    let userInfo = {
      name: "",
      email: "",
      bio: "",
      ...JSON.parse(localStorage.getItem("userInfo") || "{}"),
    };

    return /*html*/ `
  <div id="root">
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
      ${Header()}
        <main class="p-4">
          <div class="bg-white p-8 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">
              내 프로필
            </h2>
            <form>
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
                  value="${userInfo.name}"
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
                  value="${userInfo.email}"
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
                >${userInfo.bio}</textarea>
              </div>
              <button
                id="update-profile"
                type="submit"
                class="w-full bg-blue-600 text-white p-2 rounded font-bold"
              >
                프로필 업데이트
              </button>
            </form>
          </div>
        </main>

        ${Footer()}
      </div>
    </div>
  </div>
`;
  },

  afterRender: () => {
    const btnUpdate = document.querySelector("#update-profile");
    btnUpdate.addEventListener("click", function () {
      console.log("버튼이 클릭되었습니다!");
    });
  },
};
