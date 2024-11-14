/**
 * @name 路由配置
 * -------------------------------
 * @doc 参考相关文档：https://umijs.org/docs/guides/routes
 */
export default [
  {
    path: "/",
    // name: xxx,
    routes: [
      {
        path: "/",
        redirect: "/home",
      },
      {
        path: "/home",
        component: "./Home",
        // name: xxx,
      },
    ],
  },
  { path: "/403", component: "403" },
  {
    path: "*",
    layout: false,
    component: "404",
  },
];
