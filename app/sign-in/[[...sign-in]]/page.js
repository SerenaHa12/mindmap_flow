import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <div className="container mx-auto my-8">
      <div className="flex items-start justify-center">
        <SignIn redirectUrl="/mindmap" />
      </div>
    </div>
  );
};

export default SignInPage;
