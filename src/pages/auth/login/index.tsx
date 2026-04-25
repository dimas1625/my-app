"use client";

import Link from "next/link";
import style from "./login.module.scss";
import { useState } from "react";
import { useRouter } from "next/router"; 
import { signIn } from "next-auth/react";

const Tampilanlogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

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
    const passwordInput = form.elements.namedItem("password") as HTMLInputElement;

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
    <div className={style.login}>
      <div className={style.login__title}>
        <h1>Halaman Login</h1>
      </div>
      
      <div className={style.login__card}>
        <form onSubmit={handleSubmit} className={style.login__form}>
          <div className={style.login__form__item}>
            <label htmlFor="email" className={style.login__form__item__label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Masukkan email anda"
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
              placeholder="Masukkan password anda"
              className={style.login__form__item__input}
              required
            />
          </div>

          {error && <p className={style.error_text}>{error}</p>}

          <button
            type="submit"
            className={style.login__button_primary}
            disabled={isLoading}
          >
            {isLoading ? "Memproses..." : "Login Ke Akun"}
          </button>

          <div className={style.login__divider}>
            <span>atau lanjut dengan</span>
          </div>

          <div className={style.login__social_wrapper}>
            <button
              type="button"
              className={`${style.login__social_btn} ${style.google}`}
              onClick={() => signIn("google", { callbackUrl })}
            >
              <img src="https://authjs.dev/img/providers/google.svg" alt="G" />
              Google
            </button>

            <button
              type="button"
              className={`${style.login__social_btn} ${style.github}`}
              onClick={() => signIn("github", { callbackUrl })}
            >
              <img src="https://authjs.dev/img/providers/github.svg" alt="GH" />
              GitHub
            </button>
          </div>

          <p className={style.login__footer_text}>
            Tidak punya akun?{" "}
            <Link href="/auth/register">Daftar Sekarang</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Tampilanlogin;