import { Signup } from "@repo/ui/signup";
import { signIn } from "next-auth/react";
import { Router } from "next/router";
import { useRouter } from 'next/navigation'

export default function SignInPage() {
  const router=useRouter()
  return (
    <Signup onClick={async (name:string,email:string, password:string) => {
      await signIn("credentials", { redirect: true, name,email, password });
    }} />
  );
}
