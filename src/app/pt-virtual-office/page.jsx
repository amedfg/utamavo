import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PTVirtualOffice() {
  return (
    <main className="w-full">
        <Navbar/>
        <section id="pt-virtual-office" className="pt-44 px-8 lg:px-40 flex lg:gap-24 w-screen lg:w-full justify-between">
            <div className="w-[619px] hidden flex-col justify-start items-start lg:flex">
                <p className="text-secondary font-black text-5xl">PT + Virtual Office</p>
                <p className="py-[23px] text-primary font-normal text-xl">UVO menyediakan layanan lengkap untuk mendirikan Perseroan Terbatas (PT) dan penyewaan Virtual Office yang terintegrasi. Dengan menggunakan layanan ini, Anda dapat menjalankan perusahaan dengan legalitas yang aman dan kredibel. </p>
                <Button asChild className="px-2.5 py-2 bg-gold rounded-lg text-background text-base ">
                    <Link href={"https://wa.me/6281911506190?text=Halo,%20Saya%20ingin%20bertanya%20tentang%20jasa%20PT%20+%20Virtual%20Office%20Anda?"} className="text-lg">
                    Konsultasi Sekarang <img src="../icon/ic-wa.svg" alt="icon-wa" className="w-6 h-6 fill-background" />
                    </Link>
                </Button>
            </div>
            <div className="hidden lg:block">
                <img src="../img/pt-virtual-office.png" alt="virtual-office" className="w-fit h-[335px] rounded-lg"/>
            </div>
            <div className="flex w-screen lg:hidden">
                <div className="w-full h-[450px] rounded-xl flex">
                    {/* Background Image */}
                    <div className="w-full h-full bg-cover bg-left-bottom rounded-xl" style={{ backgroundImage: `url(../img/pt-virtual-office.png)` }} >   
                        <p className="mt-20 ml-8 text-secondary font-black text-3xl">PT + Virtual Office</p>
                        <p className="ml-8 py-[23px] text-background font-normal text-lg">UVO menyediakan layanan lengkap untuk mendirikan Perseroan Terbatas (PT) dan penyewaan Virtual Office yang terintegrasi. Dengan menggunakan layanan ini, Anda dapat menjalankan perusahaan dengan legalitas yang aman dan kredibel. </p>
                        <Button asChild className="ml-8 px-2.5 py-2 bg-gold rounded-lg text-background text-base ">
                            <Link href={"https://wa.me/6281911506190?text=Halo,%20Saya%20ingin%20bertanya%20tentang%20jasa%20PT%20+%20Virtual%20Office%20Anda?"} className="text-lg">
                            Konsultasi Sekarang <img src="../icon/ic-wa.svg" alt="icon-wa" className="w-6 h-6 fill-background" />
                            </Link>
                        </Button>
                    </div>
                </div>        
            </div>
        </section>
        <section id="foto-virtual-office" className="pt-8 pb-16 px-8 lg:px-40">
            <h1 className="text-xl text-primary font-bold">Keuntungan membuat PT melalui UVO antara lain: </h1>
            <div className="grid grid-rows-1 lg:grid-cols-2 gap-x-40 gap-y-6  pt-[23px] pb-8">
                <div>
                    <p className="text-secondary text-xl font-bold flex items-center">
                    <img src="../icon/ic-checklist.svg" alt="icon-checklist" className="w-[17px] h-[17px] mr-1.5" />
                    Keamanan Harta Pribadi
                    </p>
                    <p className="text-primary text-base ml-6">Memisahkan aset perusahaan dan pribadi untuk perlindungan lebih baik.</p>
                </div>
                <div>
                    <p className="text-secondary text-xl font-bold flex items-center">
                    <img src="../icon/ic-checklist.svg" alt="icon-checklist" className="w-[17px] h-[17px] mr-1.5" />
                    Kredibilitas Tinggi
                    </p>
                    <p className="text-primary text-base ml-6">Perusahaan berbadan hukum memberikan kepercayaan lebih di mata mitra dan investor.</p>
                </div>
                <div>
                    <p className="text-secondary text-xl font-bold flex items-center">
                    <img src="../icon/ic-checklist.svg" alt="icon-checklist" className="w-[17px] h-[17px] mr-1.5" />
                    Pengelolaan Saham yang Fleksibel
                    </p>
                    <p className="text-primary text-base ml-6">Membuat pembagian kepemilikan menjadi lebih mudah dan terstruktur</p>
                </div>
                <div>
                    <p className="text-secondary text-xl font-bold flex items-center">
                    <img src="../icon/ic-checklist.svg" alt="icon-checklist" className="w-[17px] h-[17px] mr-1.5" />
                    Kemudahan Pendanaan
                    </p>
                    <p className="text-primary text-base ml-6">Mempermudah perusahaan dalam mendapatkan pendanaan dari pihak eksternal.</p>
                </div>
                <div>
                    <p className="text-secondary text-xl font-bold flex items-center">
                    <img src="../icon/ic-checklist.svg" alt="icon-checklist" className="w-[17px] h-[17px] mr-1.5" />
                    Operasi Jangka Panjang
                    </p>
                    <p className="text-primary text-base ml-6">PT dapat bertahan lebih lama dengan sistem hukum yang kuat.</p>
                </div>
            </div>
        </section>
        <Footer/>
    </main>
  );
}
