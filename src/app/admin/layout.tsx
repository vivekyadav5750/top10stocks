"use client";

import React, { useEffect } from "react";
import RouteProtector from "./RouteProtector";
import { useAppSelector } from "@/redux/hook";
import { toast } from "@/hooks/use-toast";

export default function AdminLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const user = useAppSelector((state) => state.userAdmin);

  useEffect(() => {
    if (user.status === "idle" || user.status === "loading") return;
    toast({
      title: user.status,
      description: user.message,
      variant: user.status === "failed" ? "destructive" : "default"
    });
  }, [user.message, user.status]);

  return <RouteProtector>{children}</RouteProtector>;
}
