import MainLayout from "@components/Layout/Layout";
import styles from "./styles.module.scss";
import ProductItem from "@components/ProductItem/ProductItem";

function PopularProduct({ data }) {
    const { container } = styles;
    return (
        <MainLayout>
            <div className={container}>
                {data.map((item) => {
                    return (
                        <ProductItem
                            src={item.images[0]}
                            prevSrc={item.images[1]}
                            name={item.name}
                            cost={item.price}
                        />
                    );
                })}
            </div>
        </MainLayout>
    );
}

export default PopularProduct;
