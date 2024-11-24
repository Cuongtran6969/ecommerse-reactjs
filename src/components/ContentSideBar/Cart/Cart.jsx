import HeaderSideBar from "@components/ContentSideBar/components/HeaderSideBar/HeaderSideBar";
import ItemProduct from "@components/ContentSideBar/components/ItemProduct/ItemProduct";
import { FiShoppingCart } from "react-icons/fi";
import styles from "./styles.module.scss";
import Button from "@components/Button/Button";
function Cart() {
    const { container, total, boxBtn } = styles;
    return (
        <div className={container}>
            <div>
                <HeaderSideBar
                    icon={<FiShoppingCart style={{ fontSize: "30px" }} />}
                    title={"WISHLIST"}
                />
                <ItemProduct />
            </div>
            <div>
                <div className={total}>
                    <p>SUBTOTAL:</p>
                    <p>$199.99</p>
                </div>
                <div className={boxBtn}>
                    <Button content={"VIEW WISH LIST"} />
                    <Button content={"VIEW ADD TO CART"} isPrimary={false} />
                </div>
            </div>
        </div>
    );
}

export default Cart;
