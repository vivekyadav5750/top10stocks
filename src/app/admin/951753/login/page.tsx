"use client";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAppDispatch } from "@/redux/hook";
import { userLogin } from "@/redux/reducerUser";
import { redirect } from "next/navigation";
import { useRouter } from "next/router";

export default function LoginPage() {
  const dispatch = useAppDispatch();
  // const router = useRouter();
  const [login, setLogin] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setLogin((prevLogin) => ({
      ...prevLogin,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(userLogin(login));
    // redirect("/admin/951753/dashboard");
    // router.push("/admin/951753/dashboard");
  };

  return (
    <main className="h-[calc(100vh-6rem)]  flex justify-center items-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Welcome back! Please login to your account
          </CardDescription>
        </CardHeader>
        <form onSubmit={(e) => handleSubmit(e)}>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Username</Label>
                <Input
                  id="email"
                  placeholder="xyz@gmail.com"
                  type="email"
                  value={login.email}
                  autoComplete="off"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="12345"
                  value={login.password}
                  autoComplete="off"
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            {/* <Button variant="outline">Cancel</Button> */}
            <Button>Submit</Button>
          </CardFooter>
        </form>
      </Card>
    </main>
  );
}
