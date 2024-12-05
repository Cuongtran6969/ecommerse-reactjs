import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { CiCircleList } from "react-icons/ci";
import styles from "../styles.module.scss";
function Filter() {
    const { containerFilter, boxIcon, boxLeft, selectBox, show, sort } = styles;

    return (
        <div>
            <div>
                <select>
                    <option value=""></option>
                    <option value=""></option>
                </select>
                <TfiLayoutGrid4Alt style={{ fontSize: "20px" }} />
                <div
                    style={{
                        height: "20px",
                        width: "1px",
                        backgroundColor: "#e1e1e1"
                    }}
                ></div>
                <CiCircleList style={{ fontSize: "20px" }} />
            </div>
            <div></div>
        </div>
    );
}

export default Filter;
