import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import JumbotronPajak from "./components/Jumbotron";
import Image from "next/image";

export default function KonsultanPajak() {
  return (
    <main className="w-full">
      <Navbar />
      <Image
        src="/img/ellipse-9.png"
        width={435}
        height={836}
        className="absolute"
        alt="ellipse-9"
      />
      <Image
        src="/img/ellipse-8.png"
        width={347}
        height={767}
        className="absolute right-0 mt-[200px]"
        alt="ellipse-8"
      />
      <JumbotronPajak />
      <section id="foto-virtual-office-3" className="px-8 pt-8 lg:hidden">
        <p className="text-xl font-bold text-primary">
          Kami menawarkan layanan yang membantu bisnis Anda untuk:
        </p>
        <div className="grid grid-rows-1 gap-x-11 gap-y-6 pb-8 pt-[23px] lg:grid-cols-2">
          <div>
            <div className="flex">
              <Image
                src={"/icon/ic-checklist.svg"}
                alt="icon-checklist"
                width={17}
                height={17}
              />
              <p className="ml-1.5 flex items-center text-xl font-bold text-primary">
                Identifikasi Jenis Pajak
              </p>
            </div>
            <p className="ml-6 text-base text-primary">
              Menentukan jenis pajak yang relevan untuk model bisnis Anda.
            </p>
          </div>
          <div>
            <div className="flex">
              <Image
                src={"/icon/ic-checklist.svg"}
                alt="icon-checklist"
                width={17}
                height={17}
              />
              <p className="ml-1.5 flex items-center text-xl font-bold text-primary">
                Konsultasi Pajak
              </p>
            </div>
            <p className="ml-6 text-base text-primary">
              Mendampingi Anda dalam penerapan undang-undang perpajakan yang
              berlaku.
            </p>
          </div>
        </div>
      </section>
      <section id="foto-virtual-office-2" className="px-8 pb-16 pt-8 lg:px-40">
        <h1 className="text-xl font-bold text-primary">Partners Kami : </h1>
        <div className="flex gap-x-6 lg:gap-x-20 gap-y-6 pb-8 pt-[23px] lg:grid-cols-2">
          <div>
            <div className="flex">
              <Image
                src={"/icon/ic-checklist.svg"}
                alt="icon-checklist"
                width={17}
                height={17}
              />
              <p className="ml-1.5 flex items-center text-xl font-bold text-primary">
                Utama Karya Bersinar
              </p>
            </div>
            <p className="ml-6 text-base text-primary">
              Registered tax consultant
            </p>
          </div>
          <div>
            <div className="flex">
              <Image
                src={"/icon/ic-checklist.svg"}
                alt="icon-checklist"
                width={17}
                height={17}
              />
              <p className="ml-1.5 flex items-center text-xl font-bold text-primary">
                SBI (Sinar Bersaudara Investama)
              </p>
            </div>
            <p className="ml-6 text-base text-primary">
              Registered tax consultant
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
