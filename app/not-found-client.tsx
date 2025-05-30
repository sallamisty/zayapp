"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  forofor: string;
  oups: string;
  seconds: string;
  button: string;
};

export default function NotFoundClient({ forofor, oups, seconds, button }: Props) {
  const router = useRouter();
  const [timer, setTimer] = useState(5);

  useEffect(() => {
    const countdown = setInterval(() => setTimer((prev) => prev - 1), 1000);
    const redirect = setTimeout(() => router.push("/"), 5000);

    return () => {
      clearInterval(countdown);
      clearTimeout(redirect);
    };
  }, [router]);

  return (
    <html><body className="notfound">
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
      <h1 className="text-2xl font-bold text-gray-600 mb-4">{forofor}</h1>
      <p className="text-lg text-gray-700 mb-6">
        {oups}{" "}
        <span className="font-semibold text-blue-600">
          {timer} {seconds}
        </span>
      </p>
      <button
        onClick={() => router.push("/")}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300"
      >
        {button}
      </button>
    </div>
    </body></html>
  );
}