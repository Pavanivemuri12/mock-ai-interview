import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">

      {/* LEFT */}
      <div className="relative hidden lg:block">
        <img
          src="/auth-img2.png"
          alt="Welcome"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-10 text-white">
          <h1 className="text-3xl font-bold">Welcome to Mock AI interviewer 🤝</h1>
          <p className="mt-2 max-w-md text-sm text-gray-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center justify-center bg-white">
        <SignIn
          appearance={{
            elements: {
              cardBox: "w-[560px]", // 🔑 THIS IS THE KEY
              card: "shadow-none border-none",
              headerTitle: "text-2xl",
              headerSubtitle: "text-base",
              formFieldInput: "py-3 text-base",
              formButtonPrimary: "py-3 text-base",
            },
          }}
        />
      </div>
    </div>
  );
}
