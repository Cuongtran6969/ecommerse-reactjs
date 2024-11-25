import InputCommon from "@components/InputCommon/inputCommon";
import styles from "./styles.module.scss";
import Button from "@components/Button/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useContext, useEffect, useState } from "react";
import { ToastContext } from "@/contexts/ToastProvider";
import { register, signIn, getInfo } from "@/apis/authService";
import Cookies from "js-cookie";

function Login() {
    const { container, title, boxRememberMe, lostPassword } = styles;
    const { toast } = useContext(ToastContext);
    const [isRegister, setIsRegister] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            cfPassword: ""
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Invalid email")
                .required("Email is required"),
            password: Yup.string()
                .min(6, "Password must be at least 6 character")
                .required("Password is required"),
            cfPassword: Yup.string().oneOf(
                [Yup.ref("password"), null],
                "Password must match"
            )
        }),
        onSubmit: async (values) => {
            if (isLoading) return;

            const { email: username, password } = values;
            setIsLoading(true);

            if (isRegister) {
                const { email: username, password } = values;
                await register({ username, password })
                    .then((res) => {
                        toast.success(res.data.message);
                        setIsLoading(false);
                    })
                    .catch((err) => {
                        toast.error(err.response.data.message);
                        setIsLoading(false);
                    });
            }
            if (!isRegister) {
                await signIn({ username, password })
                    .then((res) => {
                        const { id, token, refreshToken } = res.data;

                        Cookies.set("token", token);
                        Cookies.set("refreshToken", refreshToken);

                        setIsLoading(false);
                        console.log(res);
                    })
                    .catch((err) => {
                        setIsLoading(false);
                    });
            }
        }
    });
    const handleToggle = () => {
        setIsRegister(!isRegister);
        formik.resetForm();
    };
    console.log(formik.errors);

    useEffect(() => {
        getInfo();
    }, []);
    return (
        <div className={container}>
            <div className={title}>{isRegister ? "SIGN UP" : "SIGN IN"}</div>
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
                {isRegister && (
                    <InputCommon
                        id="cfPassword"
                        label={"Confirm password"}
                        type={"password"}
                        isRequire={true}
                        formik={formik}
                    />
                )}
                {!isRegister && (
                    <div className={boxRememberMe}>
                        <input type="checkbox" />
                        <span>Remember me</span>
                    </div>
                )}

                <Button
                    content={
                        isLoading
                            ? "LOADING...."
                            : isRegister
                            ? "REGISTER"
                            : "LOGIN"
                    }
                    type={"submit"}
                    // onClick={() => toast.success("Success")}
                />
            </form>
            <Button
                content={
                    isRegister
                        ? "Already have an account"
                        : "Don't have an account?"
                }
                style={{ marginTop: "10px" }}
                isPrimary={false}
                onClick={handleToggle}
            />
            {!isRegister && (
                <div className={lostPassword}>Lost your password</div>
            )}
        </div>
    );
}

export default Login;
