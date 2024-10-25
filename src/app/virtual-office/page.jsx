import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function VirtualOffice() {
  return (
    <main className="w-full">
      <Navbar/>
      <section id="virtual-office" className="pt-44 px-8 lg:px-32 flex lg:gap-24 w-screen lg:w-full justify-between">
        <div className="w-[619px] hidden flex-col justify-start items-start lg:flex">
          <p className="text-secondary font-black text-5xl">Virtual Office</p>
          <p className="py-[23px] text-primary font-normal text-xl">Kami siap membantu mewujudkan kantor virtual dengan lokasi strategis yang mendukung perkembangan bisnis Anda.</p>
          <p className="text-primary text-xl font-bold">Keuntungan yang didapatkan:</p>
          <div className="grid grid-cols-2 gap-x-11 gap-y-6  pt-[23px] pb-8">
            <p className="text-primary text-xl font-normal flex items-center">
              <img src="../icon/ic-checklist.svg" alt="icon-checklist" className="w-[17px] h-[17px] mr-1.5" />
              Alamat Domisili Gedung
            </p>
            <p className="text-primary text-xl font-normal flex items-center">
              <img src="../icon/ic-checklist.svg" alt="icon-checklist" className="w-[17px] h-[17px] mr-1.5" />
              Ruang Rapat (Meeting Room)
            </p>
            <p className="text-primary text-xl font-normal flex items-center">
              <img src="../icon/ic-checklist.svg" alt="icon-checklist" className="w-[17px] h-[17px] mr-1.5" />
              PKP (Pengusaha Kena Pajak)
            </p>
            <p className="text-primary text-xl font-normal flex items-center">
              <img src="../icon/ic-checklist.svg" alt="icon-checklist" className="w-[17px] h-[17px] mr-1.5" />
              Working Space
            </p>
          </div>
          <Button asChild className="px-2.5 py-2 bg-gold rounded-lg text-background text-base ">
            <Link href={"https://wa.me/6281911506190?text=Halo,%20Saya%20ingin%20bertanya%20tentang%20jasa%20Virtual%20Office%20Anda?"} className="text-lg">
              Konsultasi Sekarang <img src="../icon/ic-wa.svg" alt="icon-wa" className="w-6 h-6 fill-background" />
            </Link>
          </Button>
        </div>
        <div className="hidden lg:block">
          <img src="../img/virtual-office-1.png" alt="virtual-office" className="w-fit h-[335px] rounded-lg"/>
        </div>
        <div className="flex w-screen lg:hidden">
                <div className="w-full h-[450px] rounded-xl flex">
                    {/* Background Image */}
                    <div className="w-full h-full bg-gradient-to-r from-black to-gold rounded-xl" style={{ backgroundImage: `url(../img/pt-virtual-office.png)` }} >   
                        <p className="mt-32 ml-8 text-secondary font-black text-3xl">Virtual Office</p>
                        <p className="ml-8 py-[23px] text-background font-normal text-lg">Kami siap membantu mewujudkan kantor virtual dengan lokasi strategis yang mendukung perkembangan bisnis Anda.</p>
                        <Button asChild className="ml-8 px-2.5 py-2 bg-gold rounded-lg text-background text-base ">
                            <Link href={"https://wa.me/6281911506190?text=Halo,%20Saya%20ingin%20bertanya%20tentang%20jasa%20Virtual%20Office%20Anda?"} className="text-lg">
                            Konsultasi Sekarang <img src="../icon/ic-wa.svg" alt="icon-wa" className="w-6 h-6 fill-background" />
                            </Link>
                        </Button>
                    </div>
                </div>        
            </div>
      </section>
      <section id="foto-virtual-office" className="pt-8 pb-16 px-8 lg:hidden">
            <h1 className="text-xl text-primary font-bold">Keuntungan yang didapatkan: </h1>
            <div className="grid grid-rows-1 gap-x-40 gap-y-6  pt-[23px] pb-8">
            <p className="text-primary text-xl font-normal flex items-center">
              <img src="../icon/ic-checklist.svg" alt="icon-checklist" className="w-[17px] h-[17px] mr-1.5" />
              Alamat Domisili Gedung
            </p>
            <p className="text-primary text-xl font-normal flex items-center">
              <img src="../icon/ic-checklist.svg" alt="icon-checklist" className="w-[17px] h-[17px] mr-1.5" />
              Ruang Rapat (Meeting Room)
            </p>
            <p className="text-primary text-xl font-normal flex items-center">
              <img src="../icon/ic-checklist.svg" alt="icon-checklist" className="w-[17px] h-[17px] mr-1.5" />
              PKP (Pengusaha Kena Pajak)
            </p>
            <p className="text-primary text-xl font-normal flex items-center">
              <img src="../icon/ic-checklist.svg" alt="icon-checklist" className="w-[17px] h-[17px] mr-1.5" />
              Working Space
            </p>
        </div>
      </section>
      <section id="foto-virtual-office" className="hidden lg:block py-16 px-32">
        <h1 className="text-4xl text-secondary font-bold pb-8">Foto Virtual Office</h1>
        <div className="flex justify-center items-center gap-3 relative w-full min-w-[1176px] min-h-[735px]">
          <div className="flex-col w-[790px] items-start gap-3 flex relative">
            <div className="items-center gap-3 self-stretch w-full flex-[0_0_auto] flex relative">
              <img
                className="relative w-[407px] h-[238px] object-cover rounded-lg"
                alt="DSCF"
                src="../img/virtual-office/DSCF32231.jpg"
              />

              <img
                className="relative w-[371px] h-[238px] object-cover rounded-lg"
                alt="DSCF"
                src="../img/virtual-office/DSCF32381.jpg"
              />
            </div>

            <div className="items-center gap-3 self-stretch w-full flex-[0_0_auto] flex relative">
              <div className="flex-col w-[536px] items-start gap-3 flex relative">
                <div className="items-center gap-3 self-stretch w-full flex-[0_0_auto] flex relative">
                  <img
                    className="relative w-[356px] h-[254px] object-cover rounded-lg"
                    alt="DSCF"
                    src="../img/virtual-office/DSCF32731.jpg"
                  />

                  <img
                    className="relative w-[168px] h-[254px] object-cover rounded-lg"
                    alt="DSCF"
                    src="../img/virtual-office/DSCF32771.jpg"
                  />
                </div>

                <div className="items-center gap-3 self-stretch w-full flex-[0_0_auto] flex relative">
                  <img
                    className="relative w-[152px] h-[219px] object-cover rounded-lg"
                    alt="DSCF"
                    src="../img/virtual-office/DSCF32621.jpg"
                  />

                  <div className="flex-col w-[372px] items-start gap-3 flex relative">
                    <img
                      className="relative self-stretch w-full h-[104px] object-cover rounded-lg"
                      alt="DSCF"
                      src="../img/virtual-office/DSCF32331.jpg"
                    />

                    <img
                      className="relative self-stretch w-full h-[103px] object-cover rounded-lg"
                      alt="DSCF"
                      src="../img/virtual-office/DSCF32811.jpg"
                    />
                  </div>
                </div>
              </div>

              <div className="flex-col w-[242px] items-start gap-[11px] flex relative">
                <img
                  className="relative self-stretch w-full h-[161px] object-cover rounded-lg"
                  alt="DSCF"
                  src="../img/virtual-office/DSCF32181.jpg"
                />

                <img
                  className="relative self-stretch w-full h-[155px] object-cover rounded-lg"
                  alt="DSCF"
                  src="../img/virtual-office/DSCF32641.jpg"
                />

                <img
                  className="relative self-stretch w-full h-[147px] object-cover rounded-lg"
                  alt="DSCF"
                  src="../img/virtual-office/DSCF32251.jpg"
                />
              </div>
            </div>
          </div>

          <div className="flex-col w-[374px] items-start gap-3 flex relative">
            <img
              className="relative self-stretch w-full h-[504px] object-cover rounded-lg"
              alt="DSCF"
              src="../img/virtual-office/DSCF32611.jpg"
            />

            <img
              className="relative self-stretch w-full h-[219px] object-cover rounded-lg"
              alt="DSCF"
              src="../img/virtual-office/DSCF32841.jpg"
            />
          </div>
        </div>
      </section>
      <Footer/>
    </main>
  );
}
