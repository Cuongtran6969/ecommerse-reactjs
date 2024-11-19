import Button from "@components/Button/Button";
import styles from "./styles.module.scss";
import { useEffect } from "react";
import useTranslateXImage from "@components/SaleHomePage/translateXImage";
function SaleHomePage() {
    const { container, title, des, boxbtn, boxImage } = styles;

    const { translateXPosition, handleTranslateX, scrollPosition } =
        useTranslateXImage();

    useEffect(() => {
        handleTranslateX();
    }, [scrollPosition]);
    console.log(scrollPosition);

    return (
        <div className={container}>
            <div
                className={boxImage}
                style={{
                    transform: `translateX(${translateXPosition}px)`,
                    transition: "transform 0.6s ease"
                }}
            >
                <img
                    src="https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_1.jpeg"
                    alt=""
                />
            </div>
            <div className="">
                <h2 className={title}>Sale Of The Year</h2>
                <p className={des}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Sapiente quo perferendis excepturi id eius. ?
                </p>
                <div className={boxbtn}>
                    <Button content={"Read More"} isPrimary={false} />
                </div>
            </div>
            <div
                className={boxImage}
                style={{
                    transform: `translateX(-${translateXPosition}px)`,
                    transition: "transform 0.6s ease"
                }}
            >
                <img
                    src="https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_2.jpeg"
                    alt=""
                />
            </div>
        </div>
    );
}

export default SaleHomePage;
