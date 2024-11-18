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
                <img
                    src="https://image.hm.com/assets/hm/0d/90/0d90d8c295a93b87cecd5f53f8261c83af759937.jpg?imwidth=2160"
                    alt=""
                />
                <img
                    src="https://image.hm.com/assets/hm/59/43/594320c41be2b08175831fea498890e1838afd6f.jpg?imwidth=2160"
                    alt=""
                    className={showImgWhenHover}
                />
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
            <div className={title}>10k yellow Gold</div>
            <div className={price}>999.99</div>
        </div>
    );
}

export default ProductItem;
