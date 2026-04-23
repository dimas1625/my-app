import Link from "next/link";
import { useRouter } from "next/router";

const TampilanRegister = () => {
  const { push } = useRouter();
  const handleRegister = () => {
    push("/auth/login");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-sm">
        <h1 className="text-3xl font-extrabold text-blue-700 mb-6 text-center">
          Register
        </h1>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={handleRegister}
            className="bg-blue-600 text-white font-bold py-2 rounded-lg hover:bg-blue-800 transition"
          >
            Daftar
          </button>
        </div>
        <p className="text-center text-gray-500 text-sm mt-4">
          Sudah punya akun?{" "}
          <Link href="/auth/login" className="text-blue-600 font-semibold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default TampilanRegister;