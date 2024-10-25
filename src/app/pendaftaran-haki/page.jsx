import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PendaftaranHAKI() {
  return (
    <main className="w-full">
        <Navbar/>
        <section id="pendaftaran-haki" className="pt-44 px-8 lg:px-40 flex lg:gap-24 w-screen lg:w-full justify-between">
            <div className="w-[619px] hidden flex-col justify-start items-start lg:flex">
            <p className="text-secondary font-black text-5xl">Pendaftaran HAKI/ Merek Dagang</p>
            <p className="py-[23px] text-primary font-normal text-xl">Utama Virtual Office menawarkan layanan pendaftaran Hak Kekayaan Intelektual (HAKI) untuk melindungi merek dagang dan hak cipta Anda.</p>
            <Button asChild className="px-2.5 py-2 bg-gold rounded-lg text-background text-base ">
                <Link href={"https://wa.me/6281911506190?text=Halo,%20Saya%20ingin%20bertanya%20tentang%20jasa%20Pendaftaran%20HAKI%20Anda?"} className="text-lg">
                Konsultasi Sekarang <img src="../icon/ic-wa.svg" alt="icon-wa" className="w-6 h-6 fill-background" />
                </Link>
            </Button>
            </div>
            <div className="hidden lg:block">
                <img src="../img/pendaftaran-haki.png" alt="virtual-office" className="w-fit h-[335px] rounded-lg"/>
            </div>
            <div className="flex w-screen lg:hidden">
                <div className="w-full h-[450px] rounded-xl flex">
                    {/* Background Image */}
                    <div className="w-full h-full bg-opacity-50 rounded-xl" style={{ backgroundImage: `url(../img/pendaftaran-haki.png)` }} >   
                        <p className="mt-20 ml-8 text-secondary font-black text-3xl">Pendaftaran HAKI/ Merek Dagang</p>
                        <p className="ml-8 py-[23px] text-background font-normal text-lg">Utama Virtual Office menawarkan layanan pendaftaran Hak Kekayaan Intelektual (HAKI) untuk melindungi merek dagang dan hak cipta Anda.</p>
                        <Button asChild className="ml-8 px-2.5 py-2 bg-gold rounded-lg text-background text-base ">
                            <Link href={"https://wa.me/6281911506190?text=Halo,%20Saya%20ingin%20bertanya%20tentang%20jasa%20Pendaftaran%20HAKI%20Anda?"} className="text-lg">
                            Konsultasi Sekarang <img src="../icon/ic-wa.svg" alt="icon-wa" className="w-6 h-6 fill-background" />
                            </Link>
                        </Button>
                    </div>
                </div>        
            </div>
        </section>
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
