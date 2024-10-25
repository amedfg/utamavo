import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import JumbotronCV from "./components/Jumbotron";

export default function CVVirtualOffice() {
  return (
    <main className="w-full">
      <Navbar />
      <JumbotronCV />
      <section
        id="keuntungan-virtual-office"
        className="px-8 pb-16 pt-8 lg:px-40"
      >
        <h1 className="text-xl font-bold text-primary">
          Keuntungan membuat CV melalui UVO antara lain:{" "}
        </h1>
        <div className="grid grid-rows-1 gap-x-40 gap-y-6 pb-8 pt-[23px] lg:grid-cols-2">
          <div>
            <p className="flex items-center text-xl font-bold text-secondary">
              <img
                src="../icon/ic-checklist.svg"
                alt="icon-checklist"
                className="mr-1.5 h-[17px] w-[17px]"
              />
              Tidak Ada Modal Minimal
            </p>
            <p className="ml-6 text-base text-primary">
              Pembuatan CV tidak memerlukan modal dasar yang besar, lebih
              fleksibel bagi pemilik usaha kecil.{" "}
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
              CV memiliki aturan perpajakan yang lebih sederhana dibandingkan
              PT.
            </p>
          </div>
          <div>
            <p className="flex items-center text-xl font-bold text-secondary">
              <img
                src="../icon/ic-checklist.svg"
                alt="icon-checklist"
                className="mr-1.5 h-[17px] w-[17px]"
              />
              Pengambilan Keputusan Cepat
            </p>
            <p className="ml-6 text-base text-primary">
              Dalam CV, struktur manajemen lebih sederhana sehingga keputusan
              dapat diambil dengan cepat.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
