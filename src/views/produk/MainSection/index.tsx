const dataProduct = [
  { id: 1, name: "Laptop", price: 15000000, desc: "Deskripsi singkat produk A" },
  { id: 2, name: "Mouse", price: 200000, desc: "Deskripsi singkat produk B" },
  { id: 3, name: "Keyboard", price: 200000, desc: "Deskripsi singkat produk C" },
];

const MainSection = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-extrabold text-blue-700 mb-10">
        Daftar Produk
      </h1>
      <div className="grid grid-cols-3 gap-4 w-full max-w-4xl">
        {dataProduct.map((item) => (
          <div key={item.id} className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
            <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
            <p className="text-gray-500 text-sm mt-2">{item.desc}</p>
            <p className="text-blue-600 font-bold mt-2">
              Rp {item.price.toLocaleString("id-ID")}
            </p>
            <button className="mt-4 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800">
              Beli Sekarang
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainSection;