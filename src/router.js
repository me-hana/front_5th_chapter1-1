import { MainPage } from "./view/MainPage";
import { LoginPage } from "./view/LoginPage";
import { ProfilePage } from "./view/ProfilePage";
import { ErrorPage } from "./view/ErrorPage";

function navigateTo(url) {
  history.pushState(null, null, url);
  router();
}

export const routes = {
  "/": MainPage,
  "/login": LoginPage,
  "/profile": ProfilePage,
};

// router: URL에 맞는 View로 변경
export const router = async () => {
  const path = location.pathname;
  const PageComponent = routes[path] || ErrorPage;
  const pageHtml = await PageComponent();
  document.querySelector("#root").innerHTML = pageHtml;
};

// setupRouter: 이벤트 바인딩과 초기 라우팅을 위함
export const setupRouter = () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });

  window.addEventListener("popstate", () => {
    router();
  });

  router();
};

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
      router();
    }
  });
  router();
});
