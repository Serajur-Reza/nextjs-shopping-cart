"use client";

import { useAppDispatch } from "@/store/hooks";
import { login } from "@/store/slices/userSlice";
import { Button, Grid } from "@radix-ui/themes";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";

import { useRouter } from "next/navigation";

export default function LoginPage() {
  // {
  //       username: "kminchelle",
  //       password: "0lelplR",
  //     }

  const router = useRouter();
  const dispatch = useAppDispatch();

  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const fetchData = async () => {
    const res = await fetch(`https://dummyjson.com/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((res) => res.json());
    return res;
  };

  const mutation = useMutation({
    mutationFn: fetchData,
    onSuccess: (data) => {
      dispatch(login(data));
      console.log(data);
      router.push("/", { scroll: false });
    },
  });

  const LoginPage = (e: React.SyntheticEvent) => {
    e.preventDefault();
    mutation.mutate();
  };

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mx-auto px-3">
      <Grid columns={{ initial: "1" }} gap="5" width="auto">
        <form onSubmit={LoginPage}>
          <div>
            <label htmlFor="">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-10"
              placeholder="Username"
              onChange={onChange}
            />
          </div>

          <div>
            <label htmlFor="">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-10"
              placeholder="Password"
              onChange={onChange}
            />
          </div>

          <Button type="submit" variant="solid" color="indigo">
            Login
          </Button>
        </form>
      </Grid>
    </div>
  );
}
