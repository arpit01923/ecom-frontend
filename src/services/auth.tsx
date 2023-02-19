import { SigninForm, SignupForm } from "../interface/common";
import Axios from "./axios";

const signupApi = (data: SignupForm) => Axios.post("/api/auth/signup", data);

const signinApi = (data: SigninForm) => Axios.post("/api/auth/signin", data);

export { signupApi, signinApi };
