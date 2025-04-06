// router/Router.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../src/pages/Home/Home.jsx";

import MarginAutoLayout from "../src/layouts/MarginAutoLayout/MarginAutoLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MarginAutoLayout />, // 이 레이아웃을 기본으로!
    children: [
      {
        index: true,
        element: <Home />
      }
      // {
      //   path: "contact",
      //   element: <About />
      // }
    ]
  }
]);

export default () => <RouterProvider router={router} />;

// export default Router;

// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./pages/Home/Home";
// import Login from "./pages/Login/Login";
// import MainLayout from "./layouts/MainLayout";
// import AuthLayout from "./layouts/AuthLayout";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainLayout />, // MainLayout을 최상단 element로 설정
//     children: [
//       {
//         index: true,
//         element: <Home />
//       },
//     ]
//   },
//   {
//     path: "/login",
//     element: <AuthLayout />, // 로그인은 AuthLayout 사용
//     children: [
//       {
//         index: true,
//         element: <Login />
//       }
//     ]
//   }
// ]);

// function Router() {
//   return <RouterProvider router={router} />;
// }

// export default Router;
