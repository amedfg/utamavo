import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/legacy/image";

export default function JumbotronPajak() {
  return (
    <section
      id="konsultan-pajak"
      className="flex w-screen justify-between px-8 pt-44 lg:w-full lg:gap-24 lg:px-40"
    >
      <div className="hidden w-[619px] flex-col items-start justify-start lg:flex">
        <p className="text-5xl font-black text-secondary">Konsultan Pajak</p>
        <p className="py-[23px] text-xl font-normal text-primary">
          Tim konsultan pajak UVO siap membantu perusahaan Anda memahami
          regulasi perpajakan di Indonesia.
        </p>
        <p className="text-xl font-bold text-primary">
          Kami menawarkan layanan yang membantu bisnis Anda untuk:
        </p>
        <div className="grid grid-cols-2 gap-x-11 gap-y-6 pb-8 pt-[23px]">
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
        <Button
          asChild
          className="rounded-lg bg-gold px-2.5 py-2 text-base text-background"
        >
          <Link
            href={
              "https://wa.me/6281911506190?text=Halo,%20Saya%20ingin%20bertanya%20tentang%20jasa%20Konsultan%20Pajak%20Anda?"
            }
            className="text-lg"
          >
            Konsultasi Sekarang{" "}
            <img
              src="../icon/ic-wa.svg"
              alt="icon-wa"
              className="h-6 w-6 fill-background"
            />
          </Link>
        </Button>
      </div>
      <div className="hidden lg:block">
        <Image
          src="/img/konsultan-pajak.jpg"
          alt="virtual-office"
          width={400}
          height={335}
          className="h-[335px] w-fit rounded-lg"
        />
      </div>
      <div className="flex w-screen lg:hidden">
        <div className="relative flex h-[450px] w-full rounded-xl">
          {/* Background Image */}
          <Image
            src="/img/konsultan-pajak.jpg"
            alt="cv + Virtual Office"
            layout="fill"
            objectFit="cover"
            objectPosition="left bottom"
            className="rounded-xl"
            priority
          />
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-black to-gold opacity-70"></div>
          {/* Content Overlay */}
          <div className="absolute z-10 flex h-full flex-col p-8">
            <p className="mt-12 text-3xl font-black text-secondary">
              Konsultan Pajak
            </p>
            <p className="py-6 text-lg font-normal text-background">
              Tim konsultan pajak UVO siap membantu perusahaan Anda memahami
              regulasi perpajakan di Indonesia.
            </p>
            <Button
              asChild
              className="w-3/4 rounded-lg bg-gold px-2.5 py-2 text-base text-background"
            >
              <Link
                href={
                  "https://wa.me/6281911506190?text=Halo,%20Saya%20ingin%20bertanya%20tentang%20jasa%20Konsultan%20Pajak%20Anda?"
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
        </div>
      </div>
    </section>
  );
}
