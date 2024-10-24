import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CVVirtualOffice() {
  return (
    <main className="w-full">
        <Navbar/>
        <section id="virtual-office" className="pt-44 pb-[200px] px-32 flex gap-24 w-full justify-between">
            <div className="w-[619px] flex flex-col justify-start items-start">
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
                <Link href={"#"} className="text-lg">
                Konsultasi Sekarang <img src="../icon/ic-wa.svg" alt="icon-wa" className="w-6 h-6 fill-background" />
                </Link>
            </Button>
            </div>
            <img src="../img/virtual-office-1.png" alt="virtual-office" className="w-fit h-[335px] rounded-lg"/>
        </section>
        
        <Footer/>
    </main>
  );
}
