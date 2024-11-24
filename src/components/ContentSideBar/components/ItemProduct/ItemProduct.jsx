import styles from "./styles.module.scss";
import { IoMdClose } from "react-icons/io";

function ItemProduct() {
    const {
        container,
        boxContent,
        proTitle,
        proPrice,
        boxClose,
        proSize,
        proCode
    } = styles;
    return (
        <div className={container}>
            <img
                src="https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-2.1-min.jpg"
                alt=""
            />
            <div className={boxClose}>
                <IoMdClose style={{ fontSize: "25px" }} />
            </div>
            <div className={boxContent}>
                <div className={proTitle}>title of product</div>
                <div className={proSize}>Size: M</div>
                <div className={proPrice}>$119.99</div>
                <div className={proCode}>SKU: 12349</div>
            </div>
        </div>
    );
}

export default ItemProduct;
