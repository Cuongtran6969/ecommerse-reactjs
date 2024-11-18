import Banner from "@components/Banner/Banner";
import MyHeader from "@components/Header/Header";
import styles from "./styles.module.scss";
import AdvanceHeadling from "@components/AdvanceHeadling/AdvanceHedling";
import Info from "@components/Info/Info";
import HeadingListProduct from "@components/HeadingListProduct/HeadingListProduct";

function HomePage() {
    const { container } = styles;
    return (
        <div className={container}>
            <MyHeader />
            <Banner />
            <Info />
            <AdvanceHeadling />
            <HeadingListProduct />
            <div style={{ height: "200px" }}></div>
        </div>
    );
}

export default HomePage;
