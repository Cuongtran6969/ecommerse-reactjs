import InputCommon from "@components/InputCommon/inputCommon";
import styles from "./styles.module.scss";
import Button from "@components/Button/Button";

function Login() {
    const { container, title, boxRememberMe, lostPassword } = styles;
    return (
        <div className={container}>
            <div className={title}>SIGN IN</div>
            <InputCommon label={"Usename or email"} type={"text"} isRequire />

            <InputCommon
                label={"Password"}
                type={"password"}
                isRequire={true}
            />
            <div className={boxRememberMe}>
                <input type="checkbox" />
                <span>Remember me</span>
            </div>
            <Button content={"Login"} />
            <div className={lostPassword}>Lost your password</div>
        </div>
    );
}

export default Login;
