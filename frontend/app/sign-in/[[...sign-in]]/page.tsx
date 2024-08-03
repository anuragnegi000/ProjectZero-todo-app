import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <>
      <div className=" flex h-screen w-screen justify-center mt-48">
        <SignIn />
      </div>
    </>
  );
}
