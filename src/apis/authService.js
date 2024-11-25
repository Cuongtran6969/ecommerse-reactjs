import axiosClient from "./axiosClient";

const register = async (body) => {
    return await axiosClient.post("/register", body);
};

const signIn = async (body) => {
    return await axiosClient.post("/login", body);
};

const getInfo = async (body) => {
    return await axiosClient.get(
        "/user/info/d126fd29-357b-42c9-bbf2-aeba967fed33"
    );
};
export { register, signIn, getInfo };
