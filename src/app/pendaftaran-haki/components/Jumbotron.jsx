import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/legacy/image";

export default function JumbotronHAKI() {
  const whatsapp =
    "https://wa.me/6281911506190?text=Halo,%20Saya%20ingin%20bertanya%20tentang%20jasa%20Pendaftaran%20HAKI%20Anda?";

  return (
    <section
      id="haki-virtual-office"
      className="flex w-screen justify-between px-8 pt-44 lg:w-full lg:gap-24 lg:px-40"
    >
      <div className="hidden w-[619px] flex-col items-start justify-start lg:flex">
        <p className="text-5xl font-black text-primary">
          Pendaftaran HAKI/ Merek Dagang
        </p>
        <p className="py-[23px] text-xl font-normal text-primary">
          Utama Virtual Office menawarkan layanan pendaftaran Hak Kekayaan
          Intelektual (HAKI) untuk melindungi merek dagang dan hak cipta Anda.
        </p>
        <Button
          asChild
          className="rounded-lg bg-gold px-2.5 py-2 text-base text-background"
        >
          <Button
            asChild
            className="border-button group relative rounded-lg bg-gold px-2.5 py-2 text-base text-background hover:bg-transparent hover:text-primary"
          >
            <Link href={whatsapp} className="absolute text-lg">
              Konsultasi Sekarang{" "}
              <svg
                role="img"
                className="h-6 w-6 fill-background group-hover:fill-primary"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>WhatsApp</title>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </Link>
          </Button>
        </Button>
      </div>
      <div className="hidden lg:block">
        <Image
          src="/img/pendaftaran-haki.jpg"
          alt="pendaftaran-haki"
          width={400}
          height={335}
          className="h-[335px] w-fit rounded-lg"
          style={{ width: "auto", height: "auto" }}
        />
      </div>
      <div className="flex w-screen lg:hidden">
        <div className="relative flex h-[450px] w-full rounded-xl">
          {/* Background Image */}
          <Image
            src="/img/pendaftaran-haki.jpg"
            alt="pendaftaran-haki"
            layout="fill"
            objectFit="cover"
            objectPosition="left bottom"
            className="rounded-xl"
            priority
          />
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-black to-gold opacity-70"></div>
          {/* Content Overlay */}
          <div className="absolute z-10 flex h-full flex-col rounded-lg p-8">
            <p className="mt-12 text-3xl font-black text-background">
              Pendaftaran HAKI/ Merek Dagang
            </p>
            <p className="py-6 text-lg font-normal text-background">
              Utama Virtual Office menawarkan layanan pendaftaran Hak Kekayaan
              Intelektual (HAKI) untuk melindungi merek dagang dan hak cipta
              Anda.
            </p>
            <Button
              asChild
              className="w-3/4 rounded-lg bg-gold px-2.5 py-2 text-base text-background"
            >
              <Link href={whatsapp} className="text-lg">
                Konsultasi Sekarang{" "}
                <Image
                  src="/icon/ic-wa.svg"
                  alt="icon-wa"
                  width={24}
                  height={24}
                />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
