import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import CarouselCard from "./components/Carousel";

export default function Home() {
  const jumbotron = "/img/jumbotron-home.jpg";
  const layanan = "/img/virtual-office/DSCF32721.jpg";

  return (
    <main className="w-full">
      <Navbar />
      {/* <Navbar/> */}
      <Image
        src="/img/ellipse-9.png"
        width={435}
        height={836}
        className="absolute"
        alt="ellipse-9"
      />
      <section id="jumbotron" className="flex w-screen px-8 pt-36 lg:px-32">
        <div className="relative flex h-[450px] w-screen overflow-hidden rounded-xl">
          {/* Background Image */}
          <Image
            src={jumbotron}
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

          {/* Overlay content */}
          <div className="absolute inset-0 flex flex-col justify-start">
            <div className="mx-6 mt-10 text-5xl font-black text-background lg:ml-14 lg:mt-24">
              Utama Virtual Office
            </div>
            <div className="mx-6 mt-6 text-xl text-background lg:ml-14">
              Menyediakan kebutuhan Virtual Office anda dengan harga yang
              terjangkau.
            </div>
            <div className="mx-6 pt-8 lg:ml-14">
              <Button
                asChild
                className="group rounded-lg border-2 bg-transparent px-2.5 py-2 text-base text-background hover:bg-gold hover:text-background"
              >
                <Link
                  href={
                    "https://wa.me/6281911506190?text=Halo,%20Saya%20ingin%20bertanya%20tentang%20jasa%20Anda?"
                  }
                  className="flex items-center text-lg group-hover:text-background"
                >
                  Konsultasi Sekarang
                  <svg
                    className="h-6 w-6 fill-background transition-colors duration-300"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <title>WhatsApp</title>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Image
        src="/img/ellipse-8.png"
        width={347}
        height={767}
        className="absolute right-0 -mt-[200px]"
        alt="ellipse-8"
      />
      <Image
        src="/img/ellipse-10.png"
        width={385}
        height={1354}
        className="absolute"
        alt="ellipse-10"
        priority
      />
      <section id="layanan-kami" className="px-8 pt-14 lg:px-32">
        <h1 className="pb-6 text-4xl font-bold text-primary">Layanan Kami</h1>
        <CarouselCard />
      </section>

      <section id="about" className="px-8 py-14 lg:px-32">
        <div className="flex flex-row items-center">
          <div className="relative hidden min-h-[429px] w-full min-w-[485px] items-center gap-2 lg:inline-flex">
            <div className="relative flex w-[238px] flex-col items-start gap-[11px]">
              <Image
                src={"/img/virtual-office/DSCF32611.jpg"}
                width={238}
                height={276}
                alt="virtual-office"
                priority={true}
                className="relative h-[276px] w-full self-stretch rounded-lg object-cover"
                style={{
                  maxWidth: "100%",
                }}
              />
              <Image
                src={"/img/virtual-office/DSCF32641.jpg"}
                width={238}
                height={142}
                alt="virtual-office"
                priority={true}
                className="relative h-[142px] w-full self-stretch rounded-lg object-cover"
                style={{
                  maxWidth: "auto",
                }}
              />
            </div>
            <div className="relative flex w-[239px] flex-col items-start gap-[11px]">
              <Image
                src={"/img/virtual-office/DSCF32721.jpg"}
                width={238}
                height={142}
                alt="virtual-office"
                priority={true}
                className="relative h-[142px] w-full self-stretch rounded-lg object-cover"
                style={{
                  maxWidth: "100%",
                }}
              />
              <Image
                src={"/img/virtual-office-1.jpg"}
                width={238}
                height={276}
                alt="virtual-office"
                priority={true}
                className="relative h-[276px] w-full self-stretch rounded-lg object-cover"
                style={{
                  maxWidth: "100%",
                }}
              />
            </div>
          </div>
          <div className="hidden h-[450px] w-screen rounded-xl lg:flex">
            <div className="item flex flex-col">
              <p className="mt-32 text-3xl font-bold text-primary">
                UVO Selalu Memberikan Pelayanan yang Terbaik
              </p>
              <p className="pt-6 text-xl font-normal text-primary">
                Utama Virtual Office menawarkan layanan sewa kantor virtual
                dengan harga terjangkau, sebagai solusi alamat domisili hukum
                bagi bisnis Anda.
              </p>
              <div className="pt-6">
                <Button
                  asChild
                  className="border-button group rounded-lg border-2 bg-transparent px-2.5 py-2 text-base text-primary hover:border-none hover:bg-gold hover:text-background"
                >
                  <Link
                    href={"/about"}
                    className="flex items-center text-lg group-hover:text-background"
                  >
                    Tentang Kami
                    <svg
                      className="h-5 w-5 fill-primary transition-colors duration-300 group-hover:fill-background"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M10 20C4.47059 20 0 15.5294 0 10C0 4.47059 4.47059 0 10 0C15.5294 0 20 4.47059 20 10C20 15.5294 15.5294 20 10 20ZM10 1.17647C5.11765 1.17647 1.17647 5.11765 1.17647 10C1.17647 14.8824 5.11765 18.8235 10 18.8235C14.8824 18.8235 18.8235 14.8824 18.8235 10C18.8235 5.11765 14.8824 1.17647 10 1.17647Z"
                        fill="currentColor"
                      />
                      <path
                        d="M12.748 14.462C12.4285 14.426 12.1986 14.1376 12.2347 13.8181L12.9441 7.53562L6.66164 6.82626C6.34206 6.79017 6.11224 6.50185 6.14833 6.18227C6.18441 5.8627 6.47273 5.63288 6.79231 5.66896L12.2447 6.2846C13.3423 6.40853 14.1316 7.39877 14.0076 8.49637L13.392 13.9487C13.3559 14.2683 13.0676 14.4981 12.748 14.462Z"
                        fill="currentColor"
                      />
                      <path
                        d="M12.7612 6.92915C13.0152 6.72665 13.3853 6.76844 13.5878 7.02249C13.7903 7.27653 13.7485 7.64663 13.4945 7.84912L6.5947 13.3489C6.34065 13.5514 5.97055 13.5096 5.76806 13.2555C5.56556 13.0015 5.60735 12.6314 5.8614 12.4289L12.7612 6.92915Z"
                        fill="currentColor"
                      />
                    </svg>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="relative flex h-[450px] w-screen overflow-hidden rounded-xl lg:hidden">
            {/* Background Image */}
            <Image
              src={layanan}
              alt="Background for layanan"
              className="rounded-xl"
              priority
              fill
              sizes="100vw"
              style={{
                objectFit: "cover",
              }}
            />
            {/* Overlay and content */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-gold to-background opacity-75"></div>
            <div className="absolute inset-0 flex flex-col">
              <p className="ml-4 mt-10 text-3xl font-bold text-primary">
                UVO Selalu Memberikan Pelayanan yang Terbaik
              </p>
              <p className="ml-4 mt-6 pt-6 text-xl font-normal text-primary">
                Utama Virtual Office menawarkan layanan sewa kantor virtual
                dengan harga terjangkau, sebagai solusi alamat domisili hukum
                bagi bisnis Anda.
              </p>
              <div className="ml-4 pt-6">
                <Button
                  asChild
                  className="group rounded-lg border-2 bg-transparent px-2.5 py-2 text-base text-primary hover:border-none hover:bg-gold hover:text-background"
                >
                  <Link
                    href="/about"
                    className="flex items-center text-lg group-hover:text-background"
                  >
                    Tentang Kami
                    <svg
                      className="h-5 w-5 fill-primary transition-colors duration-300 group-hover:fill-background"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 20C4.47059 20 0 15.5294 0 10C0 4.47059 4.47059 0 10 0C15.5294 0 20 4.47059 20 10C20 15.5294 15.5294 20 10 20ZM10 1.17647C5.11765 1.17647 1.17647 5.11765 1.17647 10C1.17647 14.8824 5.11765 18.8235 10 18.8235C14.8824 18.8235 18.8235 14.8824 18.8235 10C18.8235 5.11765 14.8824 1.17647 10 1.17647Z" />
                      <path d="M12.748 14.462C12.4285 14.426 12.1986 14.1376 12.2347 13.8181L12.9441 7.53562L6.66164 6.82626C6.34206 6.79017 6.11224 6.50185 6.14833 6.18227C6.18441 5.8627 6.47273 5.63288 6.79231 5.66896L12.2447 6.2846C13.3423 6.40853 14.1316 7.39877 14.0076 8.49637L13.392 13.9487C13.3559 14.2683 13.0676 14.4981 12.748 14.462Z" />
                      <path d="M12.7612 6.92915C13.0152 6.72665 13.3853 6.76844 13.5878 7.02249C13.7903 7.27653 13.7485 7.64663 13.4945 7.84912L6.5947 13.3489C6.34065 13.5514 5.97055 13.5096 5.76806 13.2555C5.56556 13.0015 5.60735 12.6314 5.8614 12.4289L12.7612 6.92915Z" />
                    </svg>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="hubungi-kami" className="flex w-full px-8 pb-16 lg:px-32">
        <div className="flex w-full flex-wrap justify-center">
          <div className="relative flex h-[360px] lg:h-[320px] max-w-[663px] rounded-xl">
            {/* Overlay content */}
            <div className="absolute inset-0 bg-gradient-to-r from-background to-gold opacity-75"></div>
            <div className="relative z-10">
              <div className="mx-6 mt-10 text-4xl font-semibold text-primary lg:ml-14 lg:mt-24">
                Tertarik dengan Layanan Kami?
              </div>
              <div className="mx-6 mt-6 text-xl text-primary lg:ml-14">
                Hubungi kami untuk informasi lebih lanjut terkait harga dan
                layanan yang tersedia di Utama Virtual Office.
              </div>
              <div className="mx-6 pt-8 lg:ml-14">
                <Button
                  asChild
                  className="border-button group rounded-lg border-2 bg-transparent px-2.5 py-2 text-base text-primary hover:border-none hover:bg-gold hover:text-background"
                >
                  <Link
                    href="https://wa.me/6281911506190?text=Halo,%20Saya%20ingin%20bertanya%20tentang%20jasa%20Anda?"
                    className="flex items-center text-lg group-hover:text-background"
                  >
                    Hubungi Kami
                    <svg
                      className="h-5 w-5 fill-primary transition-colors duration-300 group-hover:fill-background"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 20C4.47059 20 0 15.5294 0 10C0 4.47059 4.47059 0 10 0C15.5294 0 20 4.47059 20 10C20 15.5294 15.5294 20 10 20ZM10 1.17647C5.11765 1.17647 1.17647 5.11765 1.17647 10C1.17647 14.8824 5.11765 18.8235 10 18.8235C14.8824 18.8235 18.8235 14.8824 18.8235 10C18.8235 5.11765 14.8824 1.17647 10 1.17647Z" />
                      <path d="M12.748 14.462C12.4285 14.426 12.1986 14.1376 12.2347 13.8181L12.9441 7.53562L6.66164 6.82626C6.34206 6.79017 6.11224 6.50185 6.14833 6.18227C6.18441 5.8627 6.47273 5.63288 6.79231 5.66896L12.2447 6.2846C13.3423 6.40853 14.1316 7.39877 14.0076 8.49637L13.392 13.9487C13.3559 14.2683 13.0676 14.4981 12.748 14.462Z" />
                      <path d="M12.7612 6.92915C13.0152 6.72665 13.3853 6.76844 13.5878 7.02249C13.7903 7.27653 13.7485 7.64663 13.4945 7.84912L6.5947 13.3489C6.34065 13.5514 5.97055 13.5096 5.76806 13.2555C5.56556 13.0015 5.60735 12.6314 5.8614 12.4289L12.7612 6.92915Z" />
                    </svg>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="relative hidden max-w-[513px] lg:flex">
            {/* Background Image */}
            <Image
              src={"/img/hubungi-kami.jpg"}
              width={513}
              height={320}
              className="max-w-[513px] rounded-r-lg"
              alt="hubungi-kami"
            />
            <div className="absolute inset-0 bg-gray-600 opacity-50"></div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
