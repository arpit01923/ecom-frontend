import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import AuthCard from "../components/extras/cards/authCard";
import Button from "../components/standard/button";
import Input from "../components/standard/input";
import ToastNotification from "../components/standard/toastNotification";
import { SigninForm, SignupForm } from "../interface/common";
import { signinApi } from "../services/auth";
import { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { changeUser } from "../redux/slices/common";
import { changeLoggedIn } from "../redux/slices/auth";

interface SigninFormData {
  email: string;
  password: string;
}
const Signin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [signinFormData, setSigninFormData] = useState<SigninFormData>({
    email: "",
    password: "",
  });

  const signinMutation = useMutation((data: SigninForm) => signinApi(data), {
    onSuccess: (res) => {
      const success = res.data.success;
      const data = res.data.data;
      const message = res.data.message;
      if (success) {
        dispatch(changeLoggedIn(true));
        dispatch(changeUser(data));
        ToastNotification({
          status: "success",
          message: message || "Signin successfully",
        });
        navigate("/");
      } else {
        ToastNotification({
          status: "error",
          message: message || "Something went wrong",
        });
      }
    },
    onError: (err) => {
      ToastNotification({
        status: "error",
        message: "Something went wrong",
      });
      console.log(err);
    },
  });

  const changeShowPasword = () => {
    setShowPassword((prev) => !prev);
  };

  const submit = () => {
    const data = { ...signinFormData };
    signinMutation.mutate(data);
  };

  return (
    <div className="flex justify-center">
      <AuthCard>
        <div className="leading-5">
          <div className="text-primary text-3xl font-bold text-center">
            Sign In
          </div>
          <div className="text-center font-bold text-sm">
            Sign in to access E-com
          </div>
        </div>
        <Input
          type="text"
          label="Email"
          value={signinFormData.email}
          onChange={(e) =>
            setSigninFormData((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        <Input
          icon={
            showPassword ? (
              <HiEye onClick={changeShowPasword} className="cursor-pointer" />
            ) : (
              <HiEyeOff
                onClick={changeShowPasword}
                className="cursor-pointer"
              />
            )
          }
          type={showPassword ? "text" : "password"}
          label="Password"
          value={signinFormData.password}
          onChange={(e) =>
            setSigninFormData((prev) => ({ ...prev, password: e.target.value }))
          }
        />
        <Button loading={signinMutation.isLoading} onClick={submit}>
          Signin
        </Button>
        <div className="text-sm text-center">
          Don't have an account?{" "}
          <span
            className="text-primary font-bold cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </span>
        </div>
      </AuthCard>
    </div>
  );
};

export default Signin;
