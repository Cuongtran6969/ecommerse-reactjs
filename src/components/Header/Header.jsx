import BoxIcon from "./BoxIcon/BoxIcon";
import { dataBoxIcon, dataMenu } from "./constants";
import Menu from "./Menu/Menu";
import styles from "./styles.module.scss";
import Logo from "@icons/images/adidas-logo.png";
import heartIcon from "@icons/svgs/heartIcon.svg";
import loadIcon from "@icons/svgs/loadIcon.svg";
import cartIcon from "@icons/svgs/cartIcon.svg";
import useScrollHandling from "@/hooks/useScrollHanding";
import { useContext, useEffect, useState } from "react";
import classNames from "classnames";
import { SideBarContext } from "@/contexts/SidebarProvider";
function MyHeader() {
    const {
        container,
        containerHeader,
        containerBox,
        conatinerBoxIcon,
        containerMenu,
        fixedHeader,
        topHeader
    } = styles;

    const { scrollDirection, scrollPosition } = useScrollHandling();

    const [fixedHeaderPosition, setFixedHeaderPosition] = useState(false);

    const { isOpen, setIsOpen } = useContext(SideBarContext);

    console.log("isopne: " + isOpen);

    useEffect(() => {
        setFixedHeaderPosition(scrollPosition > 80);
    }, [scrollPosition]);
    return (
        <div
            className={classNames(container, topHeader, {
                [fixedHeader]: fixedHeaderPosition
            })}
        >
            <div className={containerHeader}>
                <div className={containerBox}>
                    <div className={conatinerBoxIcon}>
                        {dataBoxIcon.map((item) => {
                            return (
                                <BoxIcon
                                    key={item.type}
                                    type={item.type}
                                    href={item.href}
                                />
                            );
                        })}
                    </div>
                    <div className={containerMenu}>
                        {dataMenu.slice(0, 3).map((item) => {
                            return (
                                <Menu
                                    key={item.content}
                                    content={item.content}
                                />
                            );
                        })}
                    </div>
                </div>
                <div>
                    <img
                        src={Logo}
                        alt=""
                        style={{
                            width: "163px",
                            height: "63px",
                            objectFit: "contain"
                        }}
                    />
                </div>
                <div className={containerBox}>
                    <div className={containerMenu}>
                        {dataMenu.slice(3, dataMenu.length).map((item) => {
                            return (
                                <Menu
                                    key={item.content}
                                    content={item.content}
                                    href={item.href}
                                    setIsOpen={setIsOpen}
                                />
                            );
                        })}
                    </div>
                    <div className={conatinerBoxIcon}>
                        <img
                            width={20}
                            height={20}
                            src={loadIcon}
                            alt={loadIcon}
                        />
                        <img
                            width={20}
                            height={20}
                            src={heartIcon}
                            alt={heartIcon}
                        />
                        <img
                            width={20}
                            height={20}
                            src={cartIcon}
                            alt={cartIcon}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyHeader;
