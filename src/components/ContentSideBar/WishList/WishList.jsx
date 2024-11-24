import HeaderSideBar from "@components/ContentSideBar/components/HeaderSideBar/HeaderSideBar";
import { FaRegHeart } from "react-icons/fa";
import styles from "./styles.module.scss";
import ItemProduct from "@components/ContentSideBar/components/ItemProduct/ItemProduct";
import Button from "@components/Button/Button";
function WishList() {
    const { container, boxBtn } = styles;
    return (
        <div className={container}>
            <div>
                <HeaderSideBar
                    icon={<FaRegHeart style={{ fontSize: "30px" }} />}
                    title={"WISHLIST"}
                />
                <ItemProduct />
            </div>
            <div className={boxBtn}>
                <Button content={"VIEW WISH LIST"} />
                <Button content={"VIEW ADD TO CART"} isPrimary={false} />
            </div>
        </div>
    );
}

export default WishList;
