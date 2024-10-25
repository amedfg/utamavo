import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import JumbotronPT from "./components/Jumbotron";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PTVirtualOffice() {
  return (
    <main className="w-full">
      <Navbar />
      <JumbotronPT />
      <section id="pt-virtual-office-2" className="px-8 pb-16 pt-8 lg:px-40">
        <h1 className="text-xl font-bold text-primary">
          Keuntungan membuat PT melalui UVO antara lain:{" "}
        </h1>
        <div className="grid grid-rows-1 gap-x-40 gap-y-6 pb-8 pt-[23px] lg:grid-cols-2">
          <div>
            <p className="flex items-center text-xl font-bold text-secondary">
              <img
                src="../icon/ic-checklist.svg"
                alt="icon-checklist"
                className="mr-1.5 h-[17px] w-[17px]"
              />
              Keamanan Harta Pribadi
            </p>
            <p className="ml-6 text-base text-primary">
              Memisahkan aset perusahaan dan pribadi untuk perlindungan lebih
              baik.
            </p>
          </div>
          <div>
            <p className="flex items-center text-xl font-bold text-secondary">
              <img
                src="../icon/ic-checklist.svg"
                alt="icon-checklist"
                className="mr-1.5 h-[17px] w-[17px]"
              />
              Kredibilitas Tinggi
            </p>
            <p className="ml-6 text-base text-primary">
              Perusahaan berbadan hukum memberikan kepercayaan lebih di mata
              mitra dan investor.
            </p>
          </div>
          <div>
            <p className="flex items-center text-xl font-bold text-secondary">
              <img
                src="../icon/ic-checklist.svg"
                alt="icon-checklist"
                className="mr-1.5 h-[17px] w-[17px]"
              />
              Pengelolaan Saham yang Fleksibel
            </p>
            <p className="ml-6 text-base text-primary">
              Membuat pembagian kepemilikan menjadi lebih mudah dan terstruktur
            </p>
          </div>
          <div>
            <p className="flex items-center text-xl font-bold text-secondary">
              <img
                src="../icon/ic-checklist.svg"
                alt="icon-checklist"
                className="mr-1.5 h-[17px] w-[17px]"
              />
              Kemudahan Pendanaan
            </p>
            <p className="ml-6 text-base text-primary">
              Mempermudah perusahaan dalam mendapatkan pendanaan dari pihak
              eksternal.
            </p>
          </div>
          <div>
            <p className="flex items-center text-xl font-bold text-secondary">
              <img
                src="../icon/ic-checklist.svg"
                alt="icon-checklist"
                className="mr-1.5 h-[17px] w-[17px]"
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
