import { FC } from "react";
import { Icons } from "./Icons";
import UserAuthForm from "./UserAuthForm";
import Link from "next/link";

const Signup: FC = () => {
  return (
    <div className="container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
      <div className="flex flex-col space-y-2 text-center">
        <Icons.logo
          className="mx-auto h-6 w-6"
          style={{ fill: "currentColor" }}
        />
        <h1 className="text-2xl font-semibold tracking-tight">
          Register Account
        </h1>
        <p className="text-sm max-w-xs mx-auto">
          By continuing, you are setting up a Breadit account and agree to our
          User Agreement and Privacy Policy.
        </p>
      </div>
      <UserAuthForm />
      <p className="px-8 text-center text-sm text-muted-foreground">
        Already has an account?{" "}
        <Link
          href="/login"
          className="hover:text-brand text-sm underline underline-offset-4"
        >
          Login
        </Link>
      </p>
    </div>
  );
};

export default Signup;
