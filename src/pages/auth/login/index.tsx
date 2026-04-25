"use client";

import Link from "next/link";
import style from "./login.module.scss";
import { useState } from "react";
import { useRouter } from "next/router"; // Pages Router pakai next/router
import { signIn } from "next-auth/react";

const Tampilanlogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // FIX: Ambil callbackUrl dari router.query dengan cara yang aman (tidak menyebabkan hydration error)
  const callbackUrl =
    typeof window !== "undefined"
      ? (router.query.callbackUrl as string) || "/"
      : "/";

  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setIsLoading(true);

    const form = event.currentTarget;
    const emailInput = form.elements.namedItem("email") as HTMLInputElement;
    const passwordInput = form.elements.namedItem(
      "password"
    ) as HTMLInputElement;

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: emailInput.value,
        password: passwordInput.value,
        callbackUrl,
      });

      if (!res?.error) {
        setIsLoading(false);
        router.push(callbackUrl);
      } else {
        setIsLoading(false);
        setError("Email atau password salah");
      }
    } catch (err) {
      setIsLoading(false);
      setError("Terjadi kesalahan. Coba lagi.");
    }
  };

  return (
    // FIX: Hapus wrapper div dengan className Tailwind yang bentrok dengan SCSS Module
    // Sebelumnya ada div dengan "min-h-screen flex flex-col items-center justify-center bg-gray-100"
    // yang menyebabkan hydration mismatch. Styling cukup dari SCSS Module saja.
    <div className={style.login}>
      <div className={style.login__title}>
        <h1>Halaman Login</h1>
      </div>
      <form onSubmit={handleSubmit} className={style.login__form}>
        <div className={style.login__form__item}>
          <label htmlFor="email" className={style.login__form__item__label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className={style.login__form__item__input}
            required
          />
        </div>

        <div className={style.login__form__item}>
          <label htmlFor="password" className={style.login__form__item__label}>
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className={style.login__form__item__input}
            required
          />
        </div>

        {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}

        <button
          type="submit"
          className={style.login__form__item__button}
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Login"}
        </button>

        <br />

        <button
          type="button"
          className={style.login__form__item__button}
          onClick={() => signIn("google", { callbackUrl, redirect: false })}
        >
          Sign in with Google
        </button>

        <button
              type="button"
              onClick={() => signIn("github", { callbackUrl: "/", redirect: false })}
              className={style.login__form__item__button}
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "sign in with github"}
        </button>

        <br />
        <p className={style.login__form__item__text}>
          Tidak punya akun?{" "}
          <Link href="/auth/register">Ke Halaman Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Tampilanlogin;
