import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import JumbotronPT from "./components/Jumbotron";
import Image from "next/image";

export default function PTVirtualOffice() {
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

      <JumbotronPT />
      
      <Image
        src="/img/ellipse-8.png"
        width={347}
        height={767}
        className="absolute right-0 -mt-[200px]"
        alt="ellipse-8"
      />
      <section id="pt-virtual-office-2" className="px-8 pb-16 pt-8 lg:px-40">
        <h1 className="text-xl font-bold text-primary">
          Keuntungan membuat PT melalui UVO antara lain:{" "}
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
              Keamanan Harta Pribadi
            </p>
            <p className="ml-6 text-base text-primary">
              Memisahkan aset perusahaan dan pribadi untuk perlindungan lebih
              baik.
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
              Kredibilitas Tinggi
            </p>
            <p className="ml-6 text-base text-primary">
              Perusahaan berbadan hukum memberikan kepercayaan lebih di mata
              mitra dan investor.
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
              Pengelolaan Saham yang Fleksibel
            </p>
            <p className="ml-6 text-base text-primary">
              Membuat pembagian kepemilikan menjadi lebih mudah dan terstruktur
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
              Kemudahan Pendanaan
            </p>
            <p className="ml-6 text-base text-primary">
              Mempermudah perusahaan dalam mendapatkan pendanaan dari pihak
              eksternal.
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
              Operasi Jangka Panjang
            </p>
            <p className="ml-6 text-base text-primary">
              PT dapat bertahan lebih lama dengan sistem hukum yang kuat.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
