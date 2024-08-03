import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <>
      <div className=" bg-accent flex h-screen w-screen justify-center ">
        <div className="mt-44">
          <SignUp />
        </div>
      </div>
    </>
  );
}
