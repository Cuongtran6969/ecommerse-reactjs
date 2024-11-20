import MainLayout from "@components/Layout/Layout";
import styles from "./styles.module.scss";
import CountdownBanner from "@components/CoutdownBanner/CountdownBanner";
import ProductItem from "@components/ProductItem/ProductItem";
function HeadingListProduct({ data }) {
    const { container, containerItem } = styles;

    return (
        <MainLayout>
            <div className={container}>
                {/* <CountdownTimer targetDate={targetDate} /> */}
                <CountdownBanner />
                <div className={containerItem}>
                    {data.map((item) => {
                        return (
                            <ProductItem
                                key={item.name}
                                src={item.images[0]}
                                prevSrc={item.images[1]}
                                name={item.name}
                                cost={item.price}
                            />
                        );
                    })}
                </div>
            </div>
        </MainLayout>
    );
}

export default HeadingListProduct;
