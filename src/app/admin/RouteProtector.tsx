"use client";

import { useAppSelector } from "@/redux/hook";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function RouteProtector({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const user = useAppSelector((state) => state.userAdmin);

  useEffect(() => {
    if (user.status === "success") {
      router.push("/admin/951753/dashboard");
      return;
    }

    if (user.status === "failed" || user.status === "idle") {
      router.push("/admin/951753/login");
    }
  }, [user.status, router]);

  return children;
}

export default RouteProtector;
