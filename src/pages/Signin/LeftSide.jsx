import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInSchema } from "./validationSchema";
import { loginUser } from "../../services/auth";
import TextInput from "../../components/TextInput";
import lock from "../../assets/icons/lock.png";
import sms from "../../assets/icons/sms.png";
import logo from "../../assets/Images/logo.png";

const LeftSide = () => {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    setError,
  } = useForm({
    resolver: yupResolver(signInSchema),
    mode: "onChange",
  });

  const email = watch("email");
  const password = watch("password");
  const isFormValid = email && password;

  const onSubmit = async (data) => {
    try {
      setLoginError("");
      const response = await loginUser(data);
      localStorage.setItem("token", response.token);
      navigate("/dashboard");
    } catch (error) {
      setLoginError(error.message);
      setError("root", { type: "manual", message: error.message });
    }
  };

  return (
    <div className="w-full lg:w-[554px] h-full flex items-center justify-center overflow-y-auto px-6 sm:px-10 py-8 lg:py-0">
      <div className="flex flex-col items-center justify-center w-full max-w-md my-auto">

        <img
          src={logo}
          alt="Logo"
          className="block lg:hidden w-48 sm:w-56 mb-4 sm:mb-6"
        />

        {/* Header */}
        <div className="text-center mb-4 sm:mb-6">
          <h1
            className="text-3xl sm:text-4xl lg:text-[56px] font-normal text-gray-900 leading-[100%] mb-2 sm:mb-3"
            style={{ fontFamily: "ABeeZee, sans-serif", fontStyle: "normal" }}
          >
            Welcome back
          </h1>

          <p
            className="text-sm sm:text-base lg:text-lg text-gray-600 leading-[155%] text-center px-4 sm:px-0"
            style={{ fontFamily: "ABeeZee, sans-serif", fontStyle: "normal" }}
          >
            Step into our shopping metaverse for an
            <br className="hidden sm:block" />
            unforgettable shopping experience
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center space-y-4 sm:space-y-5 w-full"
        >
          <TextInput
            icon={sms}
            name="email"
            type="email"
            placeholder="Email"
            register={register}
            error={errors.email}
          />

          <TextInput
            icon={lock}
            name="password"
            type="password"
            placeholder="Password"
            register={register}
            error={errors.password}
          />

          {loginError && (
            <p className="text-red-500 text-sm text-center">{loginError}</p>
          )}

          {/* Button */}
          <button
            type="submit"
            disabled={!isFormValid || isSubmitting}
            className={`w-full max-w-[381px] font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg text-white ${
              !isFormValid || isSubmitting
                ? "bg-[#9414FF]/50 cursor-not-allowed opacity-60"
                : "bg-[#9414FF] hover:bg-[#7b0fe0]"
            }`}
            style={{ fontFamily: "ABeeZee, sans-serif" }}
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Footer */}
        <p
          className="text-center text-gray-600 mt-4 sm:mt-5 text-sm sm:text-base"
          style={{ fontFamily: "ABeeZee, sans-serif" }}
        >
          Don't have an account?{" "}
          <a href="#" className="text-gray-600">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LeftSide;