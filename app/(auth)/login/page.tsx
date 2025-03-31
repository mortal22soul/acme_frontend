import Login from "@/components/auth/Login";
import Link from "next/link";
export default function LoginPage() {
  return (
    <>
      <Login />
      <div className="text-center">
        New user?{" "}
        <Link href="/signup" className="underline">
          Sign Up
        </Link>
      </div>
    </>
  );
}
