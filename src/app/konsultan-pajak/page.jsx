import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import JumbotronPajak from "./components/Jumbotron";

export default function KonsultanPajak() {
  return (
    <main className="w-full">
      <Navbar />
      <JumbotronPajak />
      <section id="foto-virtual-office" className="px-8 pt-8 lg:px-40">
        <p className="text-xl font-bold text-primary">
          Kami menawarkan layanan yang membantu bisnis Anda untuk:
        </p>
        <div className="grid grid-rows-1 gap-x-11 gap-y-6 pb-8 pt-[23px] lg:grid-cols-2">
          <div>
            <p className="flex items-center text-xl font-bold text-secondary">
              <img
                src="../icon/ic-checklist.svg"
                alt="icon-checklist"
                className="mr-1.5 h-[17px] w-[17px]"
              />
              Identifikasi Jenis Pajak
            </p>
            <p className="ml-6 text-base text-primary">
              Menentukan jenis pajak yang relevan untuk model bisnis Anda.
            </p>
          </div>
          <div>
            <p className="flex items-center text-xl font-bold text-secondary">
              <img
                src="../icon/ic-checklist.svg"
                alt="icon-checklist"
                className="mr-1.5 h-[17px] w-[17px]"
              />
              Konsultasi Pajak
            </p>
            <p className="ml-6 text-base text-primary">
              Mendampingi Anda dalam penerapan undang-undang perpajakan yang
              berlaku.
            </p>
          </div>
        </div>
      </section>
      <section id="foto-virtual-office" className="px-8 pb-16 pt-8 lg:px-40">
        <h1 className="text-xl font-bold text-primary">Partners Kita : </h1>
        <div className="grid grid-rows-1 gap-x-11 gap-y-6 pb-8 pt-[23px] lg:grid-cols-2">
          <div>
            <p className="flex items-center text-xl font-bold text-secondary">
              <img
                src="../icon/ic-checklist.svg"
                alt="icon-checklist"
                className="mr-1.5 h-[17px] w-[17px]"
              />
              SBI (Sinar Bersaudara Investama)
            </p>
            <p className="ml-6 text-base text-primary">
              Registered tax consultant
            </p>
          </div>
          <div>
            <p className="flex items-center text-xl font-bold text-secondary">
              <img
                src="../icon/ic-checklist.svg"
                alt="icon-checklist"
                className="mr-1.5 h-[17px] w-[17px]"
              />
              Utama Karya Bersama
            </p>
            <p className="ml-6 text-base text-primary">
              Registered Tax Consultant
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
