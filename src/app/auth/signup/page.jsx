"use client";

import { authClient } from "@/Components/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
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

const SignUpPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      name: userData.name,
      iamge: userData.iamge,
      email: userData.email,
      password: userData.password,
    });

    if (data) {
      await authClient.signOut();
      redirect("/auth/sigin");
    }

    if (error) {
      toast.error(error.message);
    }
  };

  const siginWidthGoogle = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-20 pt-25">
      {/* Background Decorative Glow */}
      <div className="fixed top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 blur-[120px] pointer-events-none" />
      <div className="fixed bottom-1/4 right-1/4 w-64 h-64 bg-blue-600/10 blur-[120px] pointer-events-none" />

      <div className="w-full max-w-md z-10">
        {/* Header Section */}
        <div className="text-center mb-10 space-y-2">
          <h2 className="text-4xl font-black text-white tracking-tight uppercase">
            Join <span className="text-cyan-400 italic">Wanderlast</span>
          </h2>
          <p className="text-gray-400 font-medium tracking-widest text-xs uppercase">
            Start your journey with us today
          </p>
        </div>

        {/* Glassmorphic Form Container */}
        <Form
          className="flex flex-col gap-6 bg-white/5 backdrop-blur-2xl p-8 md:p-10 rounded-[2.5rem] border border-white/10 shadow-2xl"
          onSubmit={onSubmit}
        >
          {/* Name Field */}
          <TextField isRequired name="name" type="text" className="w-full">
            <Label className="text-gray-400 text-[10px] uppercase tracking-widest ml-2 mb-1">
              Full Name
            </Label>
            <Input
              placeholder="John Doe"
              className="rounded-2xl bg-white/5 border-white/10 text-white focus:border-cyan-500 transition-all"
            />
            <FieldError className="text-red-400 text-xs mt-1 ml-2" />
          </TextField>

          {/* Image URL Field */}
          <TextField isRequired name="iamge" type="url">
            <Label className="text-gray-400 text-[10px] uppercase tracking-widest ml-2 mb-1">
              Profile Image URL
            </Label>
            <Input
              placeholder="https://example.com/photo.jpg"
              className="rounded-2xl bg-white/5 border-white/10 text-white focus:border-cyan-500"
            />
            <FieldError className="text-red-400 text-xs mt-1 ml-2" />
          </TextField>

          {/* Email Field */}
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label className="text-gray-400 text-[10px] uppercase tracking-widest ml-2 mb-1">
              Email Address
            </Label>
            <Input
              placeholder="john@example.com"
              className="rounded-2xl bg-white/5 border-white/10 text-white focus:border-cyan-500"
            />
            <FieldError className="text-red-400 text-xs mt-1 ml-2" />
          </TextField>

          {/* Password Field */}
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) return "Min 8 characters required";
              if (!/[A-Z]/.test(value)) return "Need one uppercase letter";
              if (!/[0-9]/.test(value)) return "Need one number";
              return null;
            }}
          >
            <Label className="text-gray-400 text-[10px] uppercase tracking-widest ml-2 mb-1">
              Password
            </Label>
            <Input
              placeholder="••••••••"
              className="rounded-2xl bg-white/5 border-white/10 text-white focus:border-cyan-500"
            />
            <Description className="text-[10px] text-gray-500 mt-1 ml-2 italic">
              8+ chars, 1 uppercase, 1 number
            </Description>
            <FieldError className="text-red-400 text-xs mt-1 ml-2" />
          </TextField>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full py-7 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black font-black uppercase tracking-widest shadow-lg shadow-cyan-500/20 transition-all active:scale-95"
          >
            <Check className="mr-2" />
            Create Account
          </Button>

          {/* Divider */}
          <div className="flex items-center gap-4 py-2">
            <div className="h-px w-full bg-white/10" />
            <span className="text-gray-500 text-[10px] uppercase tracking-widest whitespace-nowrap">
              Or join with
            </span>
            <div className="h-px w-full bg-white/10" />
          </div>

          {/* Google Button */}
          <Button
            onClick={siginWidthGoogle}
            className="w-full py-6 rounded-2xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all active:scale-95"
          >
            <FcGoogle className="text-xl mr-2" /> Sign Up with Google
          </Button>
        </Form>

        {/* Footer Link */}
        <p className="text-center mt-8 text-gray-500 text-sm">
          Already have an account?{" "}
          <Link href={"/auth/sigin"}>
            <button className="text-cyan-400 font-bold hover:underline">
              Login here
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
