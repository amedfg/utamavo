import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PTVirtualOffice() {
  return (
    <main className="w-full">
        <Navbar/>
        <section id="pt-virtual-office" className="pt-44 px-40 flex gap-24 w-full justify-between">
            <div className="w-[619px] flex flex-col justify-start items-start">
            <p className="text-secondary font-black text-5xl">PT + Virtual Office</p>
            <p className="py-[23px] text-primary font-normal text-xl">UVO menyediakan layanan lengkap untuk mendirikan Perseroan Terbatas (PT) dan penyewaan Virtual Office yang terintegrasi. Dengan menggunakan layanan ini, Anda dapat menjalankan perusahaan dengan legalitas yang aman dan kredibel. </p>
            <Button asChild className="px-2.5 py-2 bg-gold rounded-lg text-background text-base ">
                <Link href={"#"} className="text-lg">
                Konsultasi Sekarang <img src="../icon/ic-wa.svg" alt="icon-wa" className="w-6 h-6 fill-background" />
                </Link>
            </Button>
            </div>
            <img src="../img/virtual-office-1.png" alt="virtual-office" className="w-fit h-[335px] rounded-lg"/>
        </section>
        <section id="foto-virtual-office" className="pt-8 pb-16 px-40">
            <h1 className="text-xl text-primary font-bold">Keuntangan membuat CV melalui UVO antara lain: </h1>
            <div className="grid grid-cols-2 gap-x-40 gap-y-6  pt-[23px] pb-8">
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
