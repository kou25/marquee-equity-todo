import { AuthWrapper } from "../components/Auth/AuthWrapper";
import { LoginForm } from "../components/Auth/LoginForm";

export const Login = () => {
  return (
    <AuthWrapper
      bgLogo="https://images.unsplash.com/photo-1506784781895-38847b5e50e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80"
      title={"Welcome Back"}
      subTitle={"Please enter your credentials below"}
    >
      <LoginForm />
    </AuthWrapper>
  );
};
