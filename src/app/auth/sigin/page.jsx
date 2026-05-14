"use client";

import { authClient } from "@/Components/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const SignInPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: userData.email,
      password: userData.password,
    });

    if (data) {
      toast.success("Sign Up Successfull");
      redirect("/");
    }

    if (error) {
      toast.error(error.message);
    }
  };

  const siginWidthGoogle = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });

    if (data) {
      toast.success("Sigin Successfull");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      {/* Background Glows */}
      <div className="fixed top-0 right-0 w-125 h-125 bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="w-full max-w-md z-10">
        {/* Header Section */}
        <div className="text-center mb-10 space-y-2">
          <h2 className="text-4xl font-black text-white tracking-tight uppercase">
            Login to <span className="text-cyan-400 italic">Account</span>
          </h2>
          <p className="text-gray-400 font-medium tracking-[0.2em] text-[10px] uppercase">
            Unlock your next adventure
          </p>
        </div>

        {/* Glassmorphic Login Form */}
        <Form
          className="flex flex-col gap-6 bg-white/5 backdrop-blur-2xl p-8 md:p-10 rounded-[2.5rem] border border-white/10 shadow-2xl"
          onSubmit={onSubmit}
        >
          {/* Email Field */}
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Invalid email address";
              }
              return null;
            }}
          >
            <Label className="text-gray-400 text-[10px] uppercase tracking-widest ml-2 mb-1">
              Email
            </Label>
            <Input
              placeholder="john@example.com"
              className="rounded-2xl bg-white/5 border-white/10 text-white focus:border-cyan-500 transition-all"
            />
            <FieldError className="text-red-400 text-xs mt-1 ml-2" />
          </TextField>

          {/* Password Field */}
          <TextField isRequired name="password" type="password">
            <div className="flex justify-between items-center mb-1 ml-2">
              <Label className="text-gray-400 text-[10px] uppercase tracking-widest">
                Password
              </Label>
              <button
                type="button"
                className="text-cyan-500 text-[10px] uppercase font-bold hover:underline"
              >
                Forgot?
              </button>
            </div>
            <Input
              placeholder="••••••••"
              className="rounded-2xl bg-white/5 border-white/10 text-white focus:border-cyan-500"
            />
            <FieldError className="text-red-400 text-xs mt-1 ml-2" />
          </TextField>

          {/* Login Button */}
          <Button
            type="submit"
            className="w-full py-7 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black font-black uppercase tracking-widest shadow-lg shadow-cyan-500/20 transition-all active:scale-95"
          >
            <Check className="mr-2" />
            Login Account
          </Button>

          {/* Divider */}
          <div className="flex items-center gap-4 py-2">
            <div className="h-px w-full bg-white/10" />
            <span className="text-gray-500 text-[10px] uppercase tracking-widest whitespace-nowrap">
              Or sign in with
            </span>
            <div className="h-px w-full bg-white/10" />
          </div>

          {/* Google Login */}
          <Button
            onClick={siginWidthGoogle}
            className="w-full py-6 rounded-2xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all"
          >
            <FcGoogle className="text-xl mr-2" /> Google
          </Button>
        </Form>

        {/* Footer Link */}
        <p className="text-center mt-8 text-gray-500 text-sm">
          Dont have an account?{" "}
          <Link href={"/auth/signup"}>
            <button className="text-cyan-400 font-bold hover:underline">
              Sign up now
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
