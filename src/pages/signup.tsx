import { useNavigate } from "react-router-dom";
import AuthCard from "../components/extras/cards/authCard";
import Button from "../components/standard/button";
import Input from "../components/standard/input";
import { useState } from "react";
import { useMutation } from "react-query";
import { signupApi } from "../services/auth";
import { SignupForm } from "../interface/common";
import ToastNotification from "../components/standard/toastNotification";
import { HiEye, HiEyeOff } from "react-icons/hi";

interface SignupFormData {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}
const Signup = () => {
  const navigate = useNavigate();
  const [signupFormData, setSignupFormData] = useState<SignupFormData>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const signupMutation = useMutation((data: SignupForm) => signupApi(data), {
    onSuccess: (res) => {
      const success = res.data.success;
      const message = res.data.message;
      if (success) {
        ToastNotification({
          status: "success",
          message: message || "User created successfully",
        });
        navigate("/signin");
      } else {
        ToastNotification({
          status: "error",
          message: message || "User already exist",
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
    const data = {
      email: signupFormData.email,
      password: signupFormData.password,
      username: `${signupFormData.firstname} ${signupFormData.lastname}`,
    };
    signupMutation.mutate(data);
  };

  return (
    <div className="flex justify-center">
      <AuthCard>
        <div className="leading-5">
          <div className="text-primary text-3xl font-bold text-center">
            Sign Up
          </div>
          <div className="text-center font-bold text-sm">
            Create your account
          </div>
        </div>
        <Input
          label="Firstname"
          type="text"
          value={signupFormData.firstname}
          onChange={(e) =>
            setSignupFormData((prev) => ({
              ...prev,
              firstname: e.target.value,
            }))
          }
        />
        <Input
          label="Lastname"
          type="text"
          value={signupFormData.lastname}
          onChange={(e) =>
            setSignupFormData((prev) => ({
              ...prev,
              lastname: e.target.value,
            }))
          }
        />
        <Input
          label="Email"
          type="email"
          value={signupFormData.email}
          onChange={(e) =>
            setSignupFormData((prev) => ({
              ...prev,
              email: e.target.value,
            }))
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
          value={signupFormData.password}
          onChange={(e) =>
            setSignupFormData((prev) => ({
              ...prev,
              password: e.target.value,
            }))
          }
        />
        <Button loading={signupMutation.isLoading} onClick={submit}>
          Signup
        </Button>
        <div className="text-sm text-center">
          Already have an account?{" "}
          <span
            className="text-primary font-bold cursor-pointer"
            onClick={() => navigate("/signin")}
          >
            Sign in
          </span>
        </div>
      </AuthCard>
    </div>
  );
};

export default Signup;
