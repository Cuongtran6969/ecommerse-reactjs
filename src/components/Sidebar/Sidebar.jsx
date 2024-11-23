import { useContext } from "react";
import styles from "./styles.module.scss";
import { SideBarContext } from "@/contexts/SideBarProvider";
import classNames from "classnames";
import { TfiClose } from "react-icons/tfi";
import Login from "@components/ContentSideBar/Login/Login";
import Comapare from "@components/ContentSideBar/Compare/Compare";
function SideBar() {
    const { container, overlay, sideBar, slideSideBar, boxIcon } = styles;

    const { isOpen, setIsOpen, type } = useContext(SideBarContext);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleRenderContent = () => {
        switch (type) {
            case "login":
                return <Login />;
            case "compare":
                return <Comapare />;
            case "cart":
                return "cart";
            case "wishlist":
                return "wishlist";
            default:
                return <Login />;
        }
    };
    console.log("type: " + type);

    return (
        <div className={container}>
            <div
                className={classNames({
                    [overlay]: isOpen
                })}
                onClick={handleToggle}
            />
            <div
                className={classNames(sideBar, {
                    [slideSideBar]: isOpen
                })}
            >
                {isOpen && (
                    <div className={boxIcon} onClick={handleToggle}>
                        <TfiClose />
                    </div>
                )}
                {handleRenderContent()}
            </div>
        </div>
    );
}

export default SideBar;
