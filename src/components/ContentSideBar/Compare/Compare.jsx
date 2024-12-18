import HeaderSideBar from "@components/ContentSideBar/components/HeaderSideBar/HeaderSideBar";
import styles from "./styles.module.scss";
import { SlReload } from "react-icons/sl";
import ItemProduct from "@components/ContentSideBar/components/ItemProduct/ItemProduct";
import Button from "@components/Button/Button";

function Comapare() {
    const { container, boxContent, viewBtn } = styles;
    return (
        <div className={container}>
            <div className={boxContent}>
                <HeaderSideBar
                    icon={<SlReload style={{ fontSize: "30px" }} />}
                    title={"COMPARE"}
                />
                <ItemProduct />
            </div>
            <div className={viewBtn}>
                <Button content={"VIEW COMPARE"} />
            </div>
        </div>
    );
}

export default Comapare;
