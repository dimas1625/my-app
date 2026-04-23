import Head from 'next/head'
import Link from 'next/link'

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h1>Halaman About</h1>
        <hr />

        <p><strong>Nama Mahasiswa:</strong> Muhammad Dimas Ajie Nugroho</p>
        <p><strong>NIM:</strong> 2341720033</p>
        <p><strong>Program Studi:</strong> D4 Teknologi Informasi</p>

        <br />

        {/* Tombol kembali ke Home */}
        <Link href="/">
          <button 
            style={{ 
              padding: "8px 15px",
              cursor: "pointer"
            }}
          >
            Kembali ke Home
          </button>
        </Link>
      </div>
    </>
  )
}