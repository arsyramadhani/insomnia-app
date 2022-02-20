import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function AuthLayout({ children }) {
  const router = useRouter();
  const [bgUrl, setBgUrl] = useState("");

  useEffect(() => {
    const pathname = router.pathname.split("/");
    console.log();
    pathname[2].toLowerCase() === "login"
      ? setBgUrl(
          "https://images.unsplash.com/photo-1645095534040-cce77f6519a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
        )
      : setBgUrl(
          "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
        );
  }, [router.pathname]);

  return (
    <div className="flex h-screen  w-screen flex-col items-center justify-center bg-zinc-700 antialiased ">
      <div className="flex h-full  w-full overflow-clip rounded-xl bg-zinc-50 shadow-xl shadow-zinc-800 md:h-[80vh] md:w-8/12 xl:w-7/12  ">
        {/* Image background in side */}
        <div className="relative hidden h-full bg-zinc-500 md:block md:w-4/12 xl:w-5/12  ">
          <Image
            src="img-bg-login"
            alt="img-login"
            layout="fill"
            objectFit="cover"
            loader={() => {
              return bgUrl;
            }}
          />
        </div>
        {/* Form */}
        <div className="z-10 flex  h-full  max-w-full flex-1  items-center justify-center   rounded-xl  bg-zinc-50  px-8 md:px-12 lg:px-20 ">
          <div className="w-full  max-w-full   ">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
