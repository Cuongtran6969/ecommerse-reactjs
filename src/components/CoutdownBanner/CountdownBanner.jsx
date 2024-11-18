import Button from "@components/Button/Button";
import styles from "./styles.module.scss";
import CountdownTimer from "@components/CoutdownTimer/CountdownTimer";
function CountdownBanner() {
    const { container, containerTimer, title, boxbtn } = styles;
    const targetDate = "2025-12-31T00:00:00";

    return (
        <div className={container}>
            <div className={containerTimer}>
                <CountdownTimer targetDate={targetDate} />
            </div>
            <p className={title}>The classics make a comeback</p>
            <div className={boxbtn}>
                <Button content={"buy now"} />
            </div>
        </div>
    );
}

export default CountdownBanner;
