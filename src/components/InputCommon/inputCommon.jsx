import styles from "./styles.module.scss";
import { TiEye } from "react-icons/ti";
import { IoMdEyeOff } from "react-icons/io";
import { useState } from "react";
function InputCommon({ label, type, isRequire = false }) {
    const { container, labelInput, boxInput, showIcon } = styles;
    const isPassword = type === "password";

    const [showPassword, setShowPassword] = useState(false);

    const isShowTextPassword =
        type === "password" && showPassword ? "text" : type;

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div className={container}>
            <div className={labelInput}>
                {label}
                {isRequire && <span>*</span>}
            </div>
            <div className={boxInput}>
                <input type={isShowTextPassword} required={isRequire} />
                {isPassword && (
                    <div className={showIcon}>
                        {showPassword ? (
                            <IoMdEyeOff onClick={handleShowPassword} />
                        ) : (
                            <TiEye onClick={handleShowPassword} />
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default InputCommon;
