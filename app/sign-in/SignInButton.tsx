import { ReactNode, useState } from "react";
import { signIn } from "next-auth/react";
import { Button } from "@radix-ui/themes";

interface Props {
  children: ReactNode;
  provider: string;
  color: "tomato" | "violet" | "mint";
}

const GoogleSignInButton = ({ children, provider, color }: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  const loginWithGoogle = async () => {
    try {
      setIsLoading(true);
      await signIn(provider, { callbackUrl: "http://localhost:3001" });
    } catch (error) {
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      color={color}
      disabled={isLoading}
      onClick={loginWithGoogle}
      className="mb-2"
      size="3"
    >
      {!isLoading}
      {children}
    </Button>
  );
};

export default GoogleSignInButton;
