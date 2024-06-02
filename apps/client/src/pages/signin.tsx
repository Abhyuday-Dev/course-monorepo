import { SignIn } from "@repo/ui/signin";
import { signIn } from "next-auth/react";

const LoginPage = () => {
  return  <SignIn onClick={async (email:string, password:string) => {
    await signIn("credentials", { redirect:true, email, password });
  }} />
};

export default LoginPage;
