import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <Head>
        <title>Praktikum Next.js Pages Router</title>
      </Head>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 max-w-2xl w-full">
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-blue-600 uppercase bg-blue-50 rounded-full">
            Next.js Pages Router
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Praktikum Pengembangan Web
          </h1>
          
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Selamat datang di modul praktikum Next.js. Halaman ini dirancang untuk 
            mendemonstrasikan implementasi dasar routing dan komponen pada mahasiswa 
            <span className="font-semibold text-gray-800"> D4 Pengembangan Web.</span>
          </p>
        </div>
      </main>
    </div>
  )
}