import { SignUpButton, UserButton } from "@clerk/clerk-react";
import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";

export const Auth = () => {
  return (
    <div className="sign-in-container">
      <SignedOut>
        <SignUpButton mode="modal"></SignUpButton>
        <SignInButton mode="modal"></SignInButton>
      </SignedOut>

      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};
