import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans selection:bg-orange-500 selection:text-white">
      
      {/* Navbar Premium */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-extrabold tracking-tighter text-gray-900">
            MP <span className="text-orange-500">Aluminium.</span>
          </div>
          <a href="#kontak" className="hidden md:inline-block bg-gray-900 hover:bg-gray-800 text-white font-medium py-2 px-6 rounded-full transition-colors">
            Konsultasi Proyek
          </a>
        </div>
      </nav>

      {/* Hero Section dengan Cloud CDN Bypass */}
      <section className="relative w-full h-[85vh] flex items-center justify-center bg-gray-900 pt-16">
        <div 
          className="absolute inset-0 z-0 opacity-60"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed" 
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/50 z-10"></div>
        
        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-gray-400/30 bg-gray-800/30 backdrop-blur-sm text-sm text-gray-300 font-medium tracking-wide">
            Spesialis Fasad & Eksterior Premium
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight drop-shadow-lg">
            Presisi Tinggi. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Integritas Visual.
            </span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 mb-10 max-w-3xl drop-shadow-md font-light">
            Rekayasa Aluminium Composite Panel (ACP) dan Kusen Premium untuk proyek komersial dan residensial mewah.
          </p>
          <a 
            id="kontak"
            href="https://wa.me/628111123021?text=Halo%20MP%20Aluminium,%20saya%20ingin%20berkonsultasi%20mengenai%20proyek%20instalasi." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-orange-600 border border-transparent rounded-lg hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-600 shadow-xl shadow-orange-600/20"
          >
            Mulai Proyek Anda Sekarang
            <svg className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Layanan Section - Refined UI (6 Kolom) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">Katalog Spesifikasi Produk</h2>
          <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
        </div>
        
        {/* Grid 3 Kolom */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col group translate-y-0 hover:-translate-y-2">
            <div className="relative w-full h-72 overflow-hidden bg-gray-200">
              <Image src="/kusen.jpg" alt="Kusen & Jendela" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transform group-hover:scale-110 transition duration-700 ease-in-out" />
            </div>
            <div className="p-8 flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">Kusen & Jendela</h3>
              <p className="text-gray-600 leading-relaxed">Pemasangan kusen dan jendela aluminium dengan presisi tingkat milimeter. Tahan lama, anti rayap, untuk arsitektur modern.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col group translate-y-0 hover:-translate-y-2">
            <div className="relative w-full h-72 overflow-hidden bg-gray-200">
              <Image src="/fasad.jpg" alt="Fasad ACP" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transform group-hover:scale-110 transition duration-700 ease-in-out" />
            </div>
            <div className="p-8 flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">Fasad Eksterior ACP</h3>
              <p className="text-gray-600 leading-relaxed">Solusi Aluminium Composite Panel (ACP) untuk identitas visual gedung komersial yang bonafide dan proteksi cuaca ekstrem.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col group translate-y-0 hover:-translate-y-2">
            <div className="relative w-full h-72 overflow-hidden bg-gray-200">
              <Image src="/kitchen.jpg" alt="Kitchen Set Aluminium" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transform group-hover:scale-110 transition duration-700 ease-in-out" />
            </div>
            <div className="p-8 flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">Kitchen Set Premium</h3>
              <p className="text-gray-600 leading-relaxed">Investasi interior yang higienis. Material aluminium *food-grade* bebas lapuk dan anti karat dengan *finishing* elegan.</p>
            </div>
          </div>

          {/* Card 4: Pintu Aluminium */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col group translate-y-0 hover:-translate-y-2">
            <div className="relative w-full h-72 overflow-hidden bg-gray-200">
              <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop" alt="Pintu Aluminium Premium" className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700 ease-in-out" />
            </div>
            <div className="p-8 flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">Pintu Aluminium</h3>
              <p className="text-gray-600 leading-relaxed">Sistem pintu aluminium modern dengan engsel *heavy-duty*. Perpaduan sempurna antara keamanan mekanis maksimal dan estetika minimalis.</p>
            </div>
          </div>

          {/* Card 5: Double Glass Fixed Window */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col group translate-y-0 hover:-translate-y-2">
            <div className="relative w-full h-72 overflow-hidden bg-gray-200">
              <img src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=800&auto=format&fit=crop" alt="Double Glass Fixed Window" className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700 ease-in-out" />
            </div>
            <div className="p-8 flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">Double Glass Fixed Window</h3>
              <p className="text-gray-600 leading-relaxed">Kaca mati lapis ganda untuk insulasi termal dan akustik (kedap suara) superior. Ideal untuk fasad gedung perkantoran dan ruang privasi tinggi.</p>
            </div>
          </div>

          {/* Card 6: Glass Window with Mesh */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col group translate-y-0 hover:-translate-y-2">
            <div className="relative w-full h-72 overflow-hidden bg-gray-200">
              <img src="https://images.unsplash.com/photo-1503174971373-b1f69850bded?q=80&w=800&auto=format&fit=crop" alt="Glass Window with Mesh" className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700 ease-in-out" />
            </div>
            <div className="p-8 flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">Glass Window with Mesh</h3>
              <p className="text-gray-600 leading-relaxed">Jendela terintegrasi dengan kasa nyamuk premium. Memaksimalkan sirkulasi udara alami dan proteksi serangga tanpa merusak estetika fasad.</p>
            </div>
          </div>

        </div>
      </section>

      {/* Footer Minimalis */}
      <footer className="bg-gray-900 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400 font-medium">© {new Date().getFullYear()} MP Aluminium. Hak Cipta Dilindungi.</p>
        </div>
      </footer>
    </main>
  );
}