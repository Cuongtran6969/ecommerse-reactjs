import styles from "./styles.module.scss";

import heartIcon from "@icons/svgs/heartIcon.svg";
import loadIcon from "@icons/svgs/loadIcon.svg";
import cartIcon from "@icons/svgs/cartIcon.svg";
function ProductItem({ src, prevSrc, name, cost }) {
    const { boxImg, showImgWhenHover, showFncFeature, boxIcon, title, price } =
        styles;
    return (
        <div>
            <div className={boxImg}>
                <img src={src} alt="" />
                <img src={prevSrc} alt="" className={showImgWhenHover} />
                <div className={showFncFeature}>
                    <div className={boxIcon}>
                        <img src={cartIcon} alt="" />
                    </div>
                    <div className={boxIcon}>
                        <img src={heartIcon} alt="" />
                    </div>
                    <div className={boxIcon}>
                        <img src={loadIcon} alt="" />
                    </div>
                    <div className={boxIcon}>
                        <img src={cartIcon} alt="" />
                    </div>
                </div>
            </div>
            <div className={title}>{name}</div>
            <div className={price}>{cost}</div>
        </div>
    );
}

export default ProductItem;
