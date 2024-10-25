import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import JumbotronHAKI from "./components/Jumbotron"; 

export default function PendaftaranHAKI() {
  return (
    <main className="w-full">
        <Navbar/>
        <JumbotronHAKI/>
        <section id="foto-virtual-office" className="pt-8 pb-16 px-8 lg:px-40">
            <h1 className="text-xl text-primary font-bold">Layanan kami mencakup:</h1>
            <div className="grid grid-rows-1 lg:grid-cols-2 gap-x-40 gap-y-6  pt-[23px] pb-8">
                <div>
                    <p className="text-secondary text-xl font-bold flex items-center">
                    <img src="../icon/ic-checklist.svg" alt="icon-checklist" className="w-[17px] h-[17px] mr-1.5" />
                    Pengecekan Merek
                    </p>
                    <p className="text-primary text-base ml-6">Memastikan bahwa merek Anda unik dan tidak melanggar hak cipta pihak lain.</p>
                </div>
                <div>
                    <p className="text-secondary text-xl font-bold flex items-center">
                    <img src="../icon/ic-checklist.svg" alt="icon-checklist" className="w-[17px] h-[17px] mr-1.5" />
                    Pendaftaran Hak Cipta
                    </p>
                    <p className="text-primary text-base ml-6">Melindungi karya-karya intelektual Anda dari potensi pelanggaran.</p>
                </div>
                <div>
                    <p className="text-secondary text-xl font-bold flex items-center">
                    <img src="../icon/ic-checklist.svg" alt="icon-checklist" className="w-[17px] h-[17px] mr-1.5" />
                    Pendaftaran Merek
                    </p>
                    <p className="text-primary text-base ml-6">Mendaftarkan merek dagang agar diakui dan dilindungi secara hukum.</p>
                </div>
            </div>
        </section>
        <Footer/>
    </main>
  );
}
