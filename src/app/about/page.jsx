import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Image from "next/image";

export default function About() {
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
        className="absolute right-0 mt-[300px] h-1/2 w-1/2 xl:h-full xl:w-full"
        alt="ellipse-8"
      />
      <section
        id="jumbotron"
        className="flex w-screen px-8 pb-16 pt-36 lg:px-32"
      >
        <div className="relative flex h-[560px] w-screen overflow-hidden rounded-xl md:h-[450px]">
          {/* Background Image */}
          <Image
            src={"/img/jumbotron-about.jpg"}
            alt="Jumbotron Background"
            className="rounded-xl"
            priority={true}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
              maxWidth: "100%",
            }}
          />
          <div className="absolute inset-0 rounded-xl bg-black opacity-70"></div>
          {/* Overlay content */}
          <div className="absolute inset-0 flex w-full justify-between gap-10 lg:mt-10">
            <div className="flex w-fit flex-col justify-start lg:w-[800px]">
              <div className="mx-6 mt-10 text-2xl font-black text-[#F5E7A7] lg:ml-14 lg:text-5xl">
                Utama Virtual Office
              </div>
              <div className="mx-6 mt-6 text-justify text-lg text-background lg:ml-14 lg:text-xl">
                Utama Virtual Office (UVO) adalah mitra terpercaya dalam
                mendukung legalitas usaha Anda. Menawarkan layanan sewa kantor
                virtual dengan harga terjangkau, sebagai solusi alamat domisili
                hukum bagi bisnis Anda.
              </div>
              <div className="mx-6 mt-6 flex lg:ml-14">
                <Image
                  src={"/icon/ic-checklist.svg"}
                  alt="icon-checklist"
                  width={17}
                  height={17}
                />
                <p className="ml-1 text-lg text-background lg:text-justify lg:text-xl">
                  Kami menyediakan virtual office untuk anda serta melayani
                  pendirian perseroan terbatas (PT)
                </p>
              </div>
              <div className="mx-6 mt-6 flex lg:ml-14">
                <Image
                  src={"/icon/ic-checklist.svg"}
                  alt="icon-checklist"
                  width={17}
                  height={17}
                />
                <p className="ml-1 text-lg text-background lg:text-justify lg:text-xl">
                  Lokasi kami berada secara strategis di SOHO Building,
                  Pancoran, Jakarta Selatan.
                </p>
              </div>
            </div>
            <div className="hidden flex-col xl:flex">
              <Image
                src={"/img/logo-about.png"}
                width={380}
                height={380}
                alt="logo-about"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
