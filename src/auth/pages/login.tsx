import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

interface Props {}

export const Login = ({}: Props) => {
  return (
    <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
};
