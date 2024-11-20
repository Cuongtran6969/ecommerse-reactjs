import Blog from "@components/Blog/Blog";
import HomePage from "@components/HomePage/HomePage";
const routers = [
    { path: "/", component: HomePage },
    { path: "blog", component: Blog }
];

export default routers;
