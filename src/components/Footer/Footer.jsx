import { dataMenu } from "@components/Footer/constant";
import styles from "./styles.module.scss";
function MyFooter() {
    const { container, boxNav, navItem, desc, copyright } = styles;
    return (
        <div className={container}>
            <div className="">
                <img
                    src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/marseille-logo.png"
                    alt=""
                    width={160}
                    height={55}
                />
            </div>
            <div className={boxNav}>
                {dataMenu.map((item) => {
                    return (
                        <div key={item.content} className={navItem}>
                            {item.content}
                        </div>
                    );
                })}
            </div>
            <div>
                <p className={desc}>Guaranteed safe checkout</p>
                <img
                    src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/elementor/thumbs/Icons-123-pzks3go5g30b2zz95xno9hgdw0h3o8xu97fbaqhtb6.png"
                    alt=""
                />
            </div>
            <div className={copyright}>
                Copyright @ 2024 XStore theme created by 8theme - WordPress
                WooCommerce themes
            </div>
        </div>
    );
}

export default MyFooter;
