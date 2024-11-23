import HeaderSideBar from "@components/ContentSideBar/components/HeaderSideBar/HeaderSideBar";
import styles from "./styles.module.scss";
import { SlReload } from "react-icons/sl";
import ItemProduct from "@components/ContentSideBar/components/ItemProduct/ItemProduct";

function Comapare() {
    return (
        <div>
            <HeaderSideBar
                icon={<SlReload style={{ fontSize: "30px" }} />}
                title={"COMPARE"}
            />
            <ItemProduct />
        </div>
    );
}

export default Comapare;
