import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] flex items-center justify-center bg-gray-900">
        <div className="absolute inset-0 opacity-50 bg-black z-0"></div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Elegansi & Presisi dalam Setiap Instalasi Aluminium
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Spesialis Aplikator Kusen, Pintu, Jendela, Kitchen Set Aluminium, dan Fasad ACP. Mengutamakan kualitas material dan ketepatan waktu.
          </p>
          <a href="#kontak" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-md transition duration-300">
            Dapatkan Penawaran
          </a>
        </div>
      </section>

      {/* Layanan/Produk Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Layanan & Produk Kami</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition border border-gray-100">
            <h3 className="text-xl font-bold text-blue-900 mb-3">Kusen & Jendela</h3>
            <p className="text-gray-600">Pemasangan kusen dan jendela aluminium dengan presisi tinggi. Tahan lama, anti rayap, dan desain modern.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition border border-gray-100">
            <h3 className="text-xl font-bold text-blue-900 mb-3">Fasad ACP</h3>
            <p className="text-gray-600">Eksterior Aluminium Composite Panel untuk gedung komersial yang memberikan kesan mewah dan profesional.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition border border-gray-100">
            <h3 className="text-xl font-bold text-blue-900 mb-3">Kitchen Set Aluminium</h3>
            <p className="text-gray-600">Solusi dapur bersih, elegan, dan bebas lapuk dengan material aluminium premium.</p>
          </div>
        </div>
      </section>
    </main>
  );
}