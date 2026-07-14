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
              <p className="text-gray-600 leading-relaxed">Investasi interior yang higienis. Material aluminium bebas lapuk dan anti karat dengan finishing presisi dan rapih.</p>
            </div>
          </div>

{/* Card 4: Pintu Aluminium */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col group translate-y-0 hover:-translate-y-2">
            <div className="relative w-full h-72 overflow-hidden bg-gray-200">
              <Image src="/pintu.jpg" alt="Pintu Aluminium Premium" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transform group-hover:scale-110 transition duration-700 ease-in-out" />
            </div>
            <div className="p-8 flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">Pintu Aluminium</h3>
              <p className="text-gray-600 leading-relaxed">Sistem pintu aluminium modern dengan engsel *heavy-duty*. Perpaduan sempurna antara keamanan mekanis maksimal dan estetika minimalis.</p>
            </div>
          </div>

          {/* Card 5: Double Glass Fixed Window */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col group translate-y-0 hover:-translate-y-2">
            <div className="relative w-full h-72 overflow-hidden bg-gray-200">
              <Image src="/double-glass.jpg" alt="Double Glass Fixed Window" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transform group-hover:scale-110 transition duration-700 ease-in-out" />
            </div>
            <div className="p-8 flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">Double Glass Fixed Window</h3>
              <p className="text-gray-600 leading-relaxed">Kaca mati lapis ganda untuk insulasi termal dan akustik (kedap suara) superior. Ideal untuk fasad gedung perkantoran dan ruang privasi tinggi.</p>
            </div>
          </div>

          {/* Card 6: Glass Window with Mesh */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col group translate-y-0 hover:-translate-y-2">
            <div className="relative w-full h-72 overflow-hidden bg-gray-200">
              <Image src="/mesh.jpg" alt="Glass Window with Mesh" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transform group-hover:scale-110 transition duration-700 ease-in-out" />
            </div>
            <div className="p-8 flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">Glass Window with Mesh</h3>
              <p className="text-gray-600 leading-relaxed">Jendela terintegrasi dengan kasa nyamuk premium. Memaksimalkan sirkulasi udara alami dan proteksi serangga tanpa merusak estetika fasad.</p>
            </div>
          </div>

        </div>
      </section>

{/* Keunggulan (Value Proposition) Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-orange-500">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h4 className="text-xl font-bold mb-3">Material Grade-A</h4>
              <p className="text-gray-400">Kami hanya menggunakan material aluminium dan panel ACP bersertifikat dengan daya tahan maksimal terhadap cuaca ekstrem.</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-orange-500">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <h4 className="text-xl font-bold mb-3">Presisi Engineer</h4>
              <p className="text-gray-400">Dikerjakan oleh tenaga ahli berpengalaman. Setiap sudut, potongan, dan instalasi diukur dengan toleransi tingkat milimeter.</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-orange-500">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h4 className="text-xl font-bold mb-3">Tepat Waktu</h4>
              <p className="text-gray-400">Kami memahami urgensi proyek Anda. Manajemen waktu yang ketat adalah komitmen kami untuk memastikan *deadline* terpenuhi.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Komprehensif (Local SEO) */}
      <footer className="bg-gray-950 pt-16 pb-8 border-t border-gray-900 text-gray-400">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <h5 className="text-2xl font-extrabold tracking-tighter text-white mb-4">MP <span className="text-orange-500">Aluminium.</span></h5>
            <p className="leading-relaxed mb-6">Mitra strategis Anda untuk rekayasa aluminium dan fasad premium. Estetika tanpa kompromi, durabilitas tanpa batas.</p>
          </div>
          <div>
            <h5 className="text-lg font-bold text-white mb-4">Layanan Cepat</h5>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Kusen & Pintu Aluminium</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Fasad Eksterior ACP</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Kitchen Set Premium</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Double Glass Window</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-bold text-white mb-4">Hubungi Kami</h5>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-orange-500 mr-3">📍</span>
                <span>Workshop: Jawa Barat, Indonesia<br/></span>
              </li>
              <li className="flex items-center">
                <span className="text-orange-500 mr-3">📞</span>
                <span>0811-1123-021</span>
              </li>
              <li className="flex items-center">
                <span className="text-orange-500 mr-3">🕒</span>
                <span>Senin - Sabtu | 08:00 - 17:00</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 text-center border-t border-gray-800 pt-8 text-sm">
          <p>© {new Date().getFullYear()} MP Aluminium. Hak Cipta Dilindungi.</p>
        </div>
      </footer>
    </main>
  );
}