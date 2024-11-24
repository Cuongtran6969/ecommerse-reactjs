import InputCommon from "@components/InputCommon/inputCommon";
import styles from "./styles.module.scss";
import Button from "@components/Button/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useContext } from "react";
import { ToastContext } from "@/contexts/ToastProvider";
function Login() {
    const { container, title, boxRememberMe, lostPassword } = styles;
    const { toast } = useContext(ToastContext);
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Invalid email")
                .required("Email is required"),
            password: Yup.string()
                .min(6, "Password must be at least 6 character")
                .required("Password is required")
        }),
        onSubmit: (values) => {
            console.log(values);
        }
    });
    console.log(formik.errors);

    return (
        <div className={container}>
            <div className={title}>SIGN IN</div>
            <form onSubmit={formik.handleSubmit}>
                <InputCommon
                    id="email"
                    label={"Usename or email"}
                    type={"text"}
                    isRequire
                    formik={formik}
                />
                <InputCommon
                    id="password"
                    label={"Password"}
                    type={"password"}
                    isRequire={true}
                    formik={formik}
                />
                <div className={boxRememberMe}>
                    <input type="checkbox" />
                    <span>Remember me</span>
                </div>
                <Button
                    content={"Login"}
                    type={"submit"}
                    onClick={() => toast.success("Success")}
                />
            </form>

            <div className={lostPassword}>Lost your password</div>
        </div>
    );
}

export default Login;
