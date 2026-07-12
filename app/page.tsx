import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <img 
          src="/hero-acp.jpg" 
          alt="Fasad Gedung ACP" 
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        {/* Overlay Gelap agar teks terbaca */}
        <div className="absolute inset-0 bg-black bg-opacity-70 z-10"></div>
        
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto mt-12 md:mt-0">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight drop-shadow-md">
            Elegansi & Presisi dalam Setiap Instalasi Aluminium
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 drop-shadow-sm">
            Spesialis Aplikator Kusen, Pintu, Jendela, Kitchen Set Aluminium, dan Fasad ACP. Mengutamakan kualitas material dan ketepatan waktu.
          </p>
          <a href="#kontak" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-md transition duration-300 shadow-lg text-lg">
            Hubungi Kami Sekarang
          </a>
        </div>
      </section>

      {/* Layanan/Produk Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Layanan & Produk Premium Kami</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 overflow-hidden flex flex-col group">
            <div className="relative w-full h-64 overflow-hidden">
              <img src="/kusen.jpg" alt="Kusen & Jendela" className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500" />
            </div>
            <div className="p-6 flex-1">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Kusen & Jendela</h3>
              <p className="text-gray-600">Pemasangan kusen dan jendela aluminium dengan presisi tinggi. Tahan lama, anti rayap, dan desain modern untuk hunian mewah.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 overflow-hidden flex flex-col group">
            <div className="relative w-full h-64 overflow-hidden">
              <img src="/fasad.jpg" alt="Fasad ACP" className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500" />
            </div>
            <div className="p-6 flex-1">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Fasad Eksterior ACP</h3>
              <p className="text-gray-600">Solusi Aluminium Composite Panel (ACP) untuk gedung komersial. Memberikan impresi bonafide, profesional, dan tahan cuaca ekstrem.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 overflow-hidden flex flex-col group">
            <div className="relative w-full h-64 overflow-hidden">
              <img src="/kitchen.jpg" alt="Kitchen Set Aluminium" className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500" />
            </div>
            <div className="p-6 flex-1">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Kitchen Set Aluminium</h3>
              <p className="text-gray-600">Investasi dapur elegan dan higienis. Material aluminium premium yang bebas lapuk, anti karat, dan dirancang presisi.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}