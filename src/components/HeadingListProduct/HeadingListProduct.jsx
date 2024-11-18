import MainLayout from "@components/Layout/Layout";
import styles from "./styles.module.scss";
import CountdownBanner from "@components/CoutdownBanner/CountdownBanner";
import ProductItem from "@components/ProductItem/ProductItem";
function HeadingListProduct() {
    const { container, containerItem } = styles;
    return (
        <MainLayout>
            <di className={container}>
                {/* <CountdownTimer targetDate={targetDate} /> */}
                <CountdownBanner />
                <div className={containerItem}>
                    <ProductItem />
                    <ProductItem />
                </div>
            </di>
        </MainLayout>
    );
}

export default HeadingListProduct;
