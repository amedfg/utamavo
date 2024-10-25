import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CVVirtualOffice() {
  return (
    <main className="w-full">
        <Navbar/>
        <section id="cv-virtual-office" className="pt-44 px-8 lg:px-40 flex lg:gap-24 w-screen lg:w-full justify-between"> 
            <div className="w-[619px] hidden flex-col justify-start items-start lg:flex"> 
                <p className="text-secondary font-black text-5xl">CV + Virtual Office</p>
                <p className="py-[23px] text-primary font-normal text-xl">UVO juga melayani pembuatan Commanditaire Vennootschap (CV) dan Virtual Office, solusi tepat bagi perusahaan yang ingin memulai bisnis dengan cepat dan efisien.</p>
                <Button asChild className="px-2.5 py-2 bg-gold rounded-lg text-background text-base ">
                    <Link href={"https://wa.me/6281911506190?text=Halo,%20Saya%20ingin%20bertanya%20tentang%20jasa%20CV%20+%20Virtual%20Office%20Anda?"} className="text-lg">
                        Konsultasi Sekarang <img src="../icon/ic-wa.svg" alt="icon-wa" className="w-6 h-6 fill-background" />
                    </Link>
                </Button>
                </div>
                <div className="hidden lg:block">
                    <img src="../img/cv-virtual-office.png" alt="virtual-office" className="w-fit h-[335px] rounded-lg"/>
                </div>
            <div className="flex w-screen lg:hidden">
                <div className="w-full h-[450px] rounded-xl flex">
                    {/* Background Image */}
                    <div className="w-full h-full bg-cover bg-left-bottom rounded-xl" style={{ backgroundImage: `url(../img/cv-virtual-office.png)` }} >   
                        <p className="mt-20 ml-8 text-secondary font-black text-3xl">CV + Virtual Office</p>
                        <p className="ml-8 py-[23px] text-primary font-normal text-lg">UVO juga melayani pembuatan Commanditaire Vennootschap (CV) dan Virtual Office, solusi tepat bagi perusahaan yang ingin memulai bisnis dengan cepat dan efisien.</p>
                        <Button asChild className="ml-8 px-2.5 py-2 bg-gold rounded-lg text-background text-base ">
                            <Link href={"https://wa.me/6281911506190?text=Halo,%20Saya%20ingin%20bertanya%20tentang%20jasa%20CV%20+%20Virtual%20Office%20Anda?"} className="text-lg">
                            Konsultasi Sekarang <img src="../icon/ic-wa.svg" alt="icon-wa" className="w-6 h-6 fill-background" />
                            </Link>
                        </Button>
                    </div>
                </div>        
            </div>
        </section>
        <section id="keuntungan-virtual-office" className="pt-8 pb-16 px-8 lg:px-40">
            <h1 className="text-xl text-primary font-bold">Keuntungan membuat CV melalui UVO antara lain: </h1>
            <div className="grid grid-rows-1 lg:grid-cols-2 gap-x-40 gap-y-6  pt-[23px] pb-8">
                <div>
                    <p className="text-secondary text-xl font-bold flex items-center">
                    <img src="../icon/ic-checklist.svg" alt="icon-checklist" className="w-[17px] h-[17px] mr-1.5" />
                    Tidak Ada Modal Minimal
                    </p>
                    <p className="text-primary text-base ml-6">Pembuatan CV tidak memerlukan modal dasar yang besar, lebih fleksibel bagi pemilik usaha kecil. </p>
                </div>
                <div>
                    <p className="text-secondary text-xl font-bold flex items-center">
                    <img src="../icon/ic-checklist.svg" alt="icon-checklist" className="w-[17px] h-[17px] mr-1.5" />
                    Kredibilitas Tinggi
                    </p>
                    <p className="text-primary text-base ml-6">CV memiliki aturan perpajakan yang lebih sederhana dibandingkan PT.</p>
                </div>
                <div>
                    <p className="text-secondary text-xl font-bold flex items-center">
                    <img src="../icon/ic-checklist.svg" alt="icon-checklist" className="w-[17px] h-[17px] mr-1.5" />
                    Pengambilan Keputusan Cepat
                    </p>
                    <p className="text-primary text-base ml-6">Dalam CV, struktur manajemen lebih sederhana sehingga keputusan dapat diambil dengan cepat.</p>
                </div>
            </div>
        </section>
        <Footer/>
    </main> 
  );
}
