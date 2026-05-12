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
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

const SignUpPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());
    console.log(userData);

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

  return (
    <div className="flex flex-col space-y-5 items-center justify-center h-160">
      <div className=" text-center">
        <h2 className=" text-2xl font-bold">Sign UP Page</h2>
        <p>welcome to the signup page</p>
      </div>
      <Form
        className="flex w-100 flex-col gap-4 bg-slate-200 p-5 rounded-2xl"
        onSubmit={onSubmit}
      >
        <TextField isRequired name="name" type="text">
          <Label>Name</Label>
          <Input placeholder="Enter your name" />
          <FieldError />
        </TextField>

        <TextField isRequired name="iamge" type="url">
          <Label>Image Url</Label>
          <Input placeholder="Enter your image ulr" />
          <FieldError />
        </TextField>

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
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }

            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        <div className="flex flex-col gap-2">
          <Button type="submit" className="w-full rounded-none bg-cyan-500">
            <Check />
            Create Accout
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default SignUpPage;
