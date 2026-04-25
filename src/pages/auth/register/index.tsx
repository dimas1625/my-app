"use client";

import Link from "next/link";
import style from "../../auth/register/register.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";

const TampilanRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { push } = useRouter();
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setIsLoading(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email") as string;
    const fullname = formData.get("Fullname") as string;
    const password = formData.get("Password") as string;

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, fullname, password }),
      });

      if (response.status === 200) {
        form.reset();
        setIsLoading(false);
        push("/auth/login");
      } else {
        setIsLoading(false);
        setError(response.status === 400 ? "Email sudah terdaftar" : "Terjadi kesalahan server");
      }
    } catch (err) {
      setIsLoading(false);
      setError("Gagal terhubung ke server");
    }
  };

  return (
    <div className={style.register}>
      <div className={style.register__title}>
        <h1>Buat Akun Baru</h1>
        <p>Silahkan lengkapi data diri anda</p>
      </div>

      <div className={style.register__card}>
        <form onSubmit={handleSubmit} className={style.register__form}>
          {/* Email */}
          <div className={style.register__form__item}>
            <label htmlFor="email" className={style.register__form__item__label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="name@example.com"
              className={style.register__form__item__input}
              required
            />
          </div>

          {/* Fullname */}
          <div className={style.register__form__item}>
            <label htmlFor="Fullname" className={style.register__form__item__label}>
              Full Name
            </label>
            <input
              type="text"
              id="Fullname"
              name="Fullname"
              placeholder="Nama lengkap anda"
              className={style.register__form__item__input}
              required
            />
          </div>

          {/* Password */}
          <div className={style.register__form__item}>
            <label htmlFor="Password" className={style.register__form__item__label}>
              Password
            </label>
            <input
              type="password"
              id="Password"
              name="Password"
              placeholder="Minimal 6 karakter"
              className={style.register__form__item__input}
              required
            />
          </div>

          {error && <p className={style.error_text}>{error}</p>}

          <button
            type="submit"
            className={style.register__button_primary}
            disabled={isLoading}
          >
            {isLoading ? "Memproses..." : "Daftar Sekarang"}
          </button>
        </form>

        <p className={style.register__footer_text}>
          Sudah punya akun? <Link href="/auth/login">Login di sini</Link>
        </p>
      </div>
    </div>
  );
};

export default TampilanRegister;