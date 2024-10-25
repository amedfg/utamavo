import * as React from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const cards = [
  {
    title: "Virtual Office",
    img: "virtual-office-1.jpg",
    description:
      "Alamat bisnis yang terletak di gedung komersial premium dengan fasilitas untuk meningkatkan profesionalitas bisnis Anda.",
    alt: "virtual-office",
    pages: "/virtual-office",
    wa: "https://wa.me/6281911506190?text=Halo,%20Saya%20ingin%20bertanya%20tentang%20jasa%20Virtual%20Office%20Anda?",
  },
  {
    title: "PT + Virtual Office",
    img: "pt-virtual-office.jpg",
    description:
      "UVO menyediakan layanan lengkap untuk mendirikan Perseroan Terbatas (PT) dan penyewaan Virtual Office yang terintegrasi.",
    alt: "pt-virtual-office",
    pages: "/pt-virtual-office",
    wa: "https://wa.me/6281911506190?text=Halo,%20Saya%20ingin%20bertanya%20tentang%20jasa%20PT%20+%20Virtual%20Office%20Anda?",
  },
  {
    title: "CV + Virtual Office",
    img: "cv-virtual-office.jpg",
    description:
      "UVO melayani pembuatan Commanditaire Vennootschap (CV) dan Virtual Office, solusi tepat bagi perusahaan yang ingin memulai bisnis.",
    alt: "cv-virtual-office",
    pages: "/cv-virtual-office",
    wa: "https://wa.me/6281911506190?text=Halo,%20Saya%20ingin%20bertanya%20tentang%20jasa%20CV%20+%20Virtual%20Office%20Anda?",
  },
  {
    title: "Pendaftaran HAKI",
    img: "pendaftaran-haki.jpg",
    description:
      "Utama Virtual Office menawarkan layanan pendaftaran Hak Kekayaan Intelektual (HAKI) untuk melindungi merek dagang dan hak cipta Anda.",
    pages: "/pendaftaran-haki",
    wa: "https://wa.me/6281911506190?text=Halo,%20Saya%20ingin%20bertanya%20tentang%20jasa%20Pendaftaran%20HAKI%20Anda?",
  },
  {
    title: "Konsultan Pajak",
    img: "konsultan-pajak.jpg",
    description:
      "Tim konsultan pajak Utama Virtual Office siap membantu perusahaan Anda memahami regulasi perpajakan di Indonesia.",
    alt: "konsultan-pajak",
    pages: "/konsultan-pajak",
    wa: "https://wa.me/6281911506190?text=Halo,%20Saya%20ingin%20bertanya%20tentang%20jasa%20Konsultan%20Pajak%20Anda?",
  },
];

export default function CarouselCard() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {cards.map((card, index) => (
          <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/4">
            <div className="p-1">
              <Card className="bg-transparent">
                <CardHeader>
                  <Image
                    src={`/img/${card.img}`}
                    width={145}
                    height={223}
                    alt={`${card.alt}`}
                    priority={true}
                    style={{ width: "auto", height: "auto" }}
                    className="w-full rounded-sm"
                  />
                </CardHeader>
                <CardContent className="h-auto">
                  <p className="text-2xl font-semibold text-secondary">
                    {card.title}
                  </p>
                  <p className="pt-6 text-base text-primary">
                    {card.description}
                  </p>

                  <div className="flex flex-row justify-between pb-2 pt-6 align-bottom">
                    <Button
                      asChild
                      className="group rounded-md border border-solid bg-transparent p-2.5 text-base text-primary hover:bg-gold hover:text-background"
                    >
                      <Link
                        href={`${card.pages}`}
                        className="flex items-center text-lg group-hover:text-background"
                      >
                        Detail
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
                    <Button
                      asChild
                      className="group rounded-md bg-gold p-2.5 text-base text-background hover:border hover:border-solid hover:bg-transparent hover:text-primary"
                    >
                      <Link
                        href={`${card.wa}`}
                        className="flex items-center text-lg group-hover:text-primary"
                      >
                        Pesan Sekarang
                        <svg
                          className="h-[18px] w-[18px] fill-background transition-colors duration-300 group-hover:fill-primary"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 18 18"
                          fill="currentColor"
                        >
                          <title>WhatsApp</title>
                          <path d="M9 0C13.9707 0 18 4.0293 18 9C18 13.9707 13.9707 18 9 18C7.46817 18.0022 5.96135 17.6117 4.62331 16.866L4.3488 16.7058L1.62001 17.5086C1.47151 17.5524 1.3143 17.5575 1.16327 17.5234C1.01225 17.4894 0.872414 17.4174 0.75703 17.3142C0.641647 17.2109 0.554536 17.08 0.503956 16.9337C0.453375 16.7873 0.441001 16.6305 0.468007 16.4781L0.491407 16.38L1.29421 13.6512C0.445555 12.2483 -0.00208119 10.6396 7.27456e-06 9C7.27456e-06 4.0293 4.0293 0 9 0ZM9 1.8C7.71087 1.79977 6.44532 2.14565 5.3355 2.80153C4.22569 3.45741 3.31233 4.39924 2.69079 5.52864C2.06926 6.65805 1.76235 7.93362 1.80213 9.22214C1.8419 10.5107 2.2269 11.7649 2.91691 12.8538C3.09511 13.1346 3.17161 13.4802 3.11131 13.8231L3.07621 13.9698L2.67931 15.3207L4.03021 14.9238C4.41991 14.8086 4.8249 14.8788 5.1462 15.0831C6.0897 15.6805 7.15922 16.0503 8.27023 16.1631C9.38124 16.276 10.5033 16.1289 11.5476 15.7334C12.592 15.338 13.5301 14.705 14.2877 13.8845C15.0453 13.0641 15.6016 12.0787 15.9128 11.0062C16.224 9.93369 16.2814 8.80351 16.0805 7.70499C15.8797 6.60648 15.426 5.56974 14.7555 4.67674C14.0849 3.78373 13.2159 3.05895 12.217 2.55967C11.2181 2.0604 10.1167 1.80032 9 1.8ZM6.3918 4.6656C6.49154 4.62289 6.60062 4.60666 6.70847 4.61849C6.81632 4.63031 6.91929 4.66979 7.0074 4.7331C7.461 5.0643 7.821 5.5089 8.1306 5.9427L8.4249 6.3693L8.5626 6.5718C8.64235 6.68786 8.68152 6.82701 8.67403 6.96763C8.66655 7.10825 8.61282 7.24246 8.5212 7.3494L8.4537 7.4178L7.6221 8.0352C7.58253 8.06454 7.55472 8.10703 7.54367 8.15503C7.53262 8.20303 7.53905 8.25341 7.5618 8.2971C7.7508 8.6391 8.0847 9.1494 8.4681 9.53279C8.8524 9.91619 9.3861 10.2726 9.7515 10.4823C9.8307 10.5273 9.9261 10.5129 9.9909 10.4544L10.0251 10.4139L10.566 9.59039C10.6652 9.45792 10.8118 9.36908 10.9752 9.34256C11.1385 9.31604 11.3057 9.35391 11.4417 9.4482L11.9304 9.7893C12.4164 10.1358 12.8835 10.5084 13.2534 10.9809C13.3218 11.0697 13.3653 11.1751 13.3794 11.2864C13.3935 11.3976 13.3777 11.5105 13.3335 11.6136C12.9771 12.4452 12.0744 13.1535 11.1366 13.1193L10.9935 13.1103L10.8216 13.0941L10.7244 13.0815L10.5102 13.0455C9.6786 12.8889 8.3457 12.4173 6.9642 11.0367C5.5836 9.6552 5.112 8.3223 4.9554 7.4907L4.9194 7.2765L4.8969 7.0893L4.8852 6.9318L4.8816 6.8643C4.8474 5.9247 5.5593 5.022 6.3918 4.6656Z" />
                        </svg>
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="text-primary" />
      <CarouselNext className="text-primary" />
    </Carousel>
  );
}
