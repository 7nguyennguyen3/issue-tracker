"use client";
import { Box, Container, Flex } from "@radix-ui/themes";
import SignInButton from "./SignInButton";
import { FaGithub, FaGoogle } from "react-icons/fa";

const SignInPage = () => {
  return (
    <Flex
      align="center"
      direction="column"
      justify="center"
      className="h-screen"
    >
      <Flex direction="column" gap="3" className="bg-sky-100">
        <SignInButton provider="google" color="tomato">
          Sign in with Google
          <FaGoogle />
        </SignInButton>
        <SignInButton provider="github" color="violet">
          Sign in with GitHub
          <FaGithub />
        </SignInButton>
      </Flex>
    </Flex>
  );
};

export default SignInPage;
