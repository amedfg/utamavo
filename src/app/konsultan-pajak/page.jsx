import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CVVirtualOffice() {
  return (
    <main className="w-full">
        <Navbar/>
        <section id="konsultan-pajak" className="pt-44 px-8 lg:px-40 flex lg:gap-24 w-screen lg:w-full justify-between">
            <div className="w-[619px] hidden flex-col justify-start items-start lg:flex">
                <p className="text-secondary font-black text-5xl">Konsultan Pajak</p>
                <p className="py-[23px] text-primary font-normal text-xl">Tim konsultan pajak UVO siap membantu perusahaan Anda memahami regulasi perpajakan di Indonesia.</p>
                <p className="text-primary text-xl font-bold">Kami menawarkan layanan yang membantu bisnis Anda untuk:</p>
                <div className="grid grid-cols-2 gap-x-11 gap-y-6  pt-[23px] pb-8">
                    <div>
                        <p className="text-secondary text-xl font-bold flex items-center">
                        <img src="../icon/ic-checklist.svg" alt="icon-checklist" className="w-[17px] h-[17px] mr-1.5" />
                        Identifikasi Jenis Pajak
                        </p>
                        <p className="text-primary text-base ml-6">Menentukan jenis pajak yang relevan untuk model bisnis Anda.</p>
                    </div>
                    <div>
                        <p className="text-secondary text-xl font-bold flex items-center">
                        <img src="../icon/ic-checklist.svg" alt="icon-checklist" className="w-[17px] h-[17px] mr-1.5" />
                        Konsultasi Pajak
                        </p>
                        <p className="text-primary text-base ml-6">Mendampingi Anda dalam penerapan undang-undang perpajakan yang berlaku.</p>
                    </div>
                </div>
                <Button asChild className="px-2.5 py-2 bg-gold rounded-lg text-background text-base ">
                    <Link href={"https://wa.me/6281911506190?text=Halo,%20Saya%20ingin%20bertanya%20tentang%20jasa%20Konsultan%20Pajak%20Anda?"} className="text-lg">
                    Konsultasi Sekarang <img src="../icon/ic-wa.svg" alt="icon-wa" className="w-6 h-6 fill-background" />
                    </Link>
                </Button>
            </div>
            <div className="hidden lg:block">
                <img src="../img/konsultan-pajak.png" alt="virtual-office" className="w-fit h-[335px] rounded-lg"/>
            </div>
            <div className="flex w-screen lg:hidden">
                <div className="w-full h-[450px] rounded-xl flex">
                    {/* Background Image */}
                    <div className="w-full h-full bg-gradient-to-r from-black to-gold rounded-xl" style={{ backgroundImage: `url(../img/pt-virtual-office.png)` }} >   
                        <p className="mt-32 ml-8 text-secondary font-black text-3xl">Konsultan Pajak</p>
                        <p className="ml-8 py-[23px] text-background font-normal text-lg">Tim konsultan pajak UVO siap membantu perusahaan Anda memahami regulasi perpajakan di Indonesia.</p>
                        <Button asChild className="ml-8 px-2.5 py-2 bg-gold rounded-lg text-background text-base ">
                            <Link href={"https://wa.me/6281911506190?text=Halo,%20Saya%20ingin%20bertanya%20tentang%20jasa%20Konsultan%20Pajak%20Anda?"} className="text-lg">
                            Konsultasi Sekarang <img src="../icon/ic-wa.svg" alt="icon-wa" className="w-6 h-6 fill-background" />
                            </Link>
                        </Button>
                    </div>
                </div>        
            </div>
        </section>
        <section id="foto-virtual-office" className="pt-8 px-8 lg:px-40">
            <p className="text-primary text-xl font-bold">Kami menawarkan layanan yang membantu bisnis Anda untuk:</p>
            <div className="grid grid-rows-1 lg:grid-cols-2 gap-x-11 gap-y-6  pt-[23px] pb-8">
                    <div>
                        <p className="text-secondary text-xl font-bold flex items-center">
                        <img src="../icon/ic-checklist.svg" alt="icon-checklist" className="w-[17px] h-[17px] mr-1.5" />
                        Identifikasi Jenis Pajak
                        </p>
                        <p className="text-primary text-base ml-6">Menentukan jenis pajak yang relevan untuk model bisnis Anda.</p>
                    </div>
                    <div>
                        <p className="text-secondary text-xl font-bold flex items-center">
                        <img src="../icon/ic-checklist.svg" alt="icon-checklist" className="w-[17px] h-[17px] mr-1.5" />
                        Konsultasi Pajak
                        </p>
                        <p className="text-primary text-base ml-6">Mendampingi Anda dalam penerapan undang-undang perpajakan yang berlaku.</p>
                    </div>
                </div>
        </section>
        <section id="foto-virtual-office" className="pt-8 pb-16 px-8 lg:px-40">
            <h1 className="text-xl text-primary font-bold">Partners Kita : </h1>
            <div className="grid grid-rows-1 lg:grid-cols-2 gap-x-40 gap-y-6  pt-[23px] pb-8">
                <div>
                    <p className="text-secondary text-xl font-bold flex items-center">
                    <img src="../icon/ic-checklist.svg" alt="icon-checklist" className="w-[17px] h-[17px] mr-1.5" />
                    SBI (Sinar Bersaudara Investama)
                    </p>
                    <p className="text-primary text-base ml-6">Registered tax consultant</p>
                </div>
                <div>
                    <p className="text-secondary text-xl font-bold flex items-center">
                    <img src="../icon/ic-checklist.svg" alt="icon-checklist" className="w-[17px] h-[17px] mr-1.5" />
                    Utama Karya Bersama
                    </p>
                    <p className="text-primary text-base ml-6">Registered Tax Consultant</p>
                </div>
            </div>
        </section>
        <Footer/>
    </main>
  );
}
