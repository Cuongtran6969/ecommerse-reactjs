import Button from "@components/Button/Button";
import styles from "./styles.module.scss";

function Banner() {
    const { container, content, title, description } = styles;
    return (
        <div className={container}>
            <div className={content}>
                <h1 className={title}>XStore Marseille04 Demo</h1>
                <div className={description}>
                    Make your celebrations even more special this year with
                    beautiful.
                </div>
                <div
                    style={{
                        width: "172px"
                    }}
                >
                    <Button content={"Go go shop"} />
                </div>
            </div>
        </div>
    );
}

export default Banner;
