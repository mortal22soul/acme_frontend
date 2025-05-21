import Signup from "@/components/auth/Signup";
import Link from "next/link";
export default function SignupPage() {
  return (
    <>
      <Signup />
      <div className="text-center p-4">
        Already a user{" "}
        <Link href="/login" className="underline">
          Login
        </Link>
      </div>
    </>
  );
}
