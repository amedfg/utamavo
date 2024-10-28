import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import JumbotronHAKI from "./components/Jumbotron";
import Image from "next/image";

export default function PendaftaranHAKI() {
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
        className="absolute right-0 mt-[100px]"
        alt="ellipse-8"
      />
      <JumbotronHAKI />

      <section id="haki-virtual-office" className="px-8 pb-16 pt-8 lg:px-40">
        <h1 className="text-xl font-bold text-primary">
          Layanan kami mencakup:
        </h1>
        <div className="grid grid-rows-1 gap-x-40 gap-y-6 pb-8 pt-[23px] lg:grid-cols-2">
          <div>
            <p className="flex items-center text-xl font-bold text-primary">
              <Image
                src={"/icon/ic-checklist.svg"}
                alt="icon-checklist"
                width={17}
                height={17}
                className="mr-1.5"
              />
              Pengecekan Merek
            </p>
            <p className="ml-6 text-base text-primary">
              Memastikan bahwa merek Anda unik dan tidak melanggar hak cipta
              pihak lain.
            </p>
          </div>
          <div>
            <p className="flex items-center text-xl font-bold text-primary">
              <Image
                src={"/icon/ic-checklist.svg"}
                alt="icon-checklist"
                width={17}
                height={17}
                className="mr-1.5"
              />
              Pendaftaran Hak Cipta
            </p>
            <p className="ml-6 text-base text-primary">
              Melindungi karya-karya intelektual Anda dari potensi pelanggaran.
            </p>
          </div>
          <div>
            <p className="flex items-center text-xl font-bold text-primary">
              <Image
                src={"/icon/ic-checklist.svg"}
                alt="icon-checklist"
                width={17}
                height={17}
                className="mr-1.5"
              />
              Pendaftaran Merek
            </p>
            <p className="ml-6 text-base text-primary">
              Mendaftarkan merek dagang agar diakui dan dilindungi secara hukum.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
