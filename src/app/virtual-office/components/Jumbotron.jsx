import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/legacy/image";

export default function Header() {
  return (
    <section
      id="virtual-office"
      className="flex w-screen justify-between px-8 pt-44 lg:w-full lg:gap-24 lg:px-32"
    >
      <div className="hidden w-[619px] flex-col items-start justify-start lg:flex">
        <p className="text-5xl font-black text-secondary">Virtual Office</p>
        <p className="py-[23px] text-xl font-normal text-primary">
          Kami siap membantu mewujudkan kantor virtual dengan lokasi strategis
          yang mendukung perkembangan bisnis Anda.
        </p>
        <p className="text-xl font-bold text-primary">
          Keuntungan yang didapatkan:
        </p>
        <div className="grid grid-cols-2 gap-x-11 gap-y-6 pb-8 pt-[23px]">
          <p className="flex items-center text-xl font-normal text-primary">
            <Image
              src={"/icon/ic-checklist.svg"}
              alt="icon-checklist"
              width={17}
              height={17}
              className="mr-1.5"
            />
            Alamat Domisili Gedung
          </p>
          <p className="flex items-center text-xl font-normal text-primary">
            <Image
              src={"/icon/ic-checklist.svg"}
              alt="icon-checklist"
              width={17}
              height={17}
              className="mr-1.5"
            />
            Ruang Rapat (Meeting Room)
          </p>
          <p className="flex items-center text-xl font-normal text-primary">
            <Image
              src={"/icon/ic-checklist.svg"}
              alt="icon-checklist"
              width={17}
              height={17}
              className="mr-1.5"
            />
            PKP (Pengusaha Kena Pajak)
          </p>
          <p className="flex items-center text-xl font-normal text-primary">
            <Image
              src={"/icon/ic-checklist.svg"}
              alt="icon-checklist"
              width={17}
              height={17}
              className="mr-1.5"
            />
            Working Space
          </p>
        </div>
        <Button
          asChild
          className="rounded-lg bg-gold px-2.5 py-2 text-base text-background"
        >
          <Link
            href={
              "https://wa.me/6281911506190?text=Halo,%20Saya%20ingin%20bertanya%20tentang%20jasa%20Virtual%20Office%20Anda?"
            }
            className="text-lg"
          >
            Konsultasi Sekarang{" "}
            <Image
              src="/icon/ic-wa.svg"
              alt="icon-wa"
              width={24}
              height={24}
              className="h-6 w-6 fill-background"
            />
          </Link>
        </Button>
      </div>
      <div className="hidden lg:block">
        <Image
          src={"/img/virtual-office-1.jpg"}
          width={450}
          height={335}
          alt="virtual-office"
          className="h-[335px] w-fit rounded-lg"
          style={{ width: "auto", height: "auto" }}
        />
      </div>
      <div className="flex w-screen lg:hidden">
        <div className="relative flex h-[450px] w-full overflow-hidden rounded-xl">
          {/* Background Image */}
          <Image
            src="/img/pt-virtual-office.jpg" // Ensure the path is correct from 'public' directory
            alt="Virtual Office Background"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="rounded-xl"
            priority
          />
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-black to-gold opacity-70"></div>

          {/* Overlay Content */}
          <div className="relative z-10">
            <p className="ml-8 mt-32 text-3xl font-black text-secondary">
              Virtual Office
            </p>
            <p className="ml-8 py-[23px] text-lg font-normal text-background">
              Kami siap membantu mewujudkan kantor virtual dengan lokasi
              strategis yang mendukung perkembangan bisnis Anda.
            </p>
            <Button
              asChild
              className="ml-8 rounded-lg bg-gold px-2.5 py-2 text-base text-background"
            >
              <Link
                href="https://wa.me/6281911506190?text=Halo,%20Saya%20ingin%20bertanya%20tentang%20jasa%20Virtual%20Office%20Anda?"
                className="text-lg"
              >
                Konsultasi Sekarang{" "}
                <Image
                  src="/icon/ic-wa.svg"
                  alt="WhatsApp icon"
                  width={24}
                  height={24}
                  className="h-6 w-6 fill-background"
                />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
