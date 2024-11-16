import BoxIcon from "./BoxIcon/BoxIcon";
import { dataBoxIcon, dataMenu } from "./constants";
import Menu from "./Menu/Menu";
import styles from "./styles.module.scss";
import Logo from "@icons/images/adidas-logo.png";
import heartIcon from "@icons/svgs/heartIcon.svg";
import loadIcon from "@icons/svgs/loadIcon.svg";
import cartIcon from "@icons/svgs/cartIcon.svg";
function MyHeader() {
    const {
        container,
        containerHeader,
        containerBox,
        conatinerBoxIcon,
        containerMenu
    } = styles;
    return (
        <div className={container}>
            <div className={containerHeader}>
                <div className={containerBox}>
                    <div className={conatinerBoxIcon}>
                        {dataBoxIcon.map((item) => {
                            return (
                                <BoxIcon type={item.type} href={item.href} />
                            );
                        })}
                    </div>
                    <div className={containerMenu}>
                        {dataMenu.slice(0, 3).map((item) => {
                            return <Menu content={item.content} />;
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
                            return <Menu content={item.content} />;
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
