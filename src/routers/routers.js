import Blog from "@components/Blog/Blog";
import HomePage from "@components/HomePage/HomePage";
import OurShop from "@pages/OurShop/OurShop";
const routers = [
    { path: "/", component: HomePage },
    { path: "blog", component: Blog },
    { path: "shop", component: OurShop }
];

export default routers;
