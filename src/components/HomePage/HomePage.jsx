import Banner from "@components/Banner/Banner";
import MyHeader from "@components/Header/Header";
import styles from "./styles.module.scss";
import AdvanceHeadling from "@components/AdvanceHeadling/AdvanceHedling";
import Info from "@components/Info/Info";
import HeadingListProduct from "@components/HeadingListProduct/HeadingListProduct";
import { useEffect, useState } from "react";
import { getProduct } from "@/apis/productsService";
import PopularProduct from "@components/PopularProduct/PopularProduct";
import SaleHomePage from "@components/SaleHomePage/SaleHomePage";
function HomePage() {
    const [listProducts, setListProducts] = useState([]);
    const { container } = styles;
    useEffect(() => {
        getProduct().then((res) => {
            setListProducts(res.contents);
        });
    }, []);
    return (
        <div className={container}>
            <MyHeader />
            <Banner />
            <Info />
            <AdvanceHeadling />
            <HeadingListProduct data={listProducts.slice(0, 2)} />
            <PopularProduct data={listProducts.slice(2, listProducts.length)} />
            <SaleHomePage />
            <div style={{ height: "200px" }}></div>
        </div>
    );
}

export default HomePage;
