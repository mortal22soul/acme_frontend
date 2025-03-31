import Signup from "@/components/auth/Signup";
import Link from "next/link";
export default function SignupPage() {
  return (
    <div className="p-8 border-2 border-black">
      <div className="text-center text-4xl font-semibold">Signup Page</div>
      <Signup />
      <div className="text-center">
        Already as user{" "}
        <Link href="/login" className="underline">
          Login
        </Link>
      </div>
    </div>
  );
}
