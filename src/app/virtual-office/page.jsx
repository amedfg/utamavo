import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Image from "next/image";

export default function VirtualOffice() {
  return (
    <main className="w-full">
      <Navbar />
      <Jumbotron />
      <div className="half-circle-vertical absolute -mt-[150px]"></div>
      <section id="foto-virtual-office" className="px-8 pb-16 pt-8 lg:hidden">
        <h1 className="text-xl font-bold text-primary">
          Keuntungan yang didapatkan:{" "}
        </h1>
        <div className="grid grid-rows-1 gap-x-40 gap-y-6 pb-8 pt-[23px]">
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
      </section>
      <section id="foto-virtual-office-2" className="hidden px-32 py-16 lg:block">
        <h1 className="pb-8 text-4xl font-bold text-primary">
          Foto Virtual Office
        </h1>
        <div className="relative flex min-h-[735px] w-full min-w-[1176px] items-center justify-center gap-3">
          <div className="relative flex w-[790px] flex-col items-start gap-3">
            <div className="relative flex w-full flex-[0_0_auto] items-center gap-3 self-stretch">
              <Image
                className="relative h-[238px] w-[407px] rounded-lg object-cover"
                alt="DSCF"
                src="/img/virtual-office/DSCF32231.jpg"
                width={407}
                height={238}
              />
              <Image
                className="relative h-[238px] w-[371px] rounded-lg object-cover"
                alt="DSCF"
                src="/img/virtual-office/DSCF32381.jpg"
                width={371}
                height={238}
              />
            </div>

            <div className="relative flex w-full flex-[0_0_auto] items-center gap-3 self-stretch">
              <div className="relative flex w-[536px] flex-col items-start gap-3">
                <div className="relative flex w-full flex-[0_0_auto] items-center gap-3 self-stretch">
                  <Image
                    className="relative h-[254px] w-[356px] rounded-lg object-cover"
                    alt="DSCF"
                    src="/img/virtual-office/DSCF32731.jpg"
                    width={356}
                    height={254}
                  />
                  <Image
                    className="relative h-[254px] w-[168px] rounded-lg object-cover"
                    alt="DSCF"
                    src="/img/virtual-office/DSCF32771.jpg"
                    width={168}
                    height={254}
                  />
                </div>

                <div className="relative flex w-full flex-[0_0_auto] items-center gap-3 self-stretch">
                  <Image
                    className="relative h-[219px] w-[152px] rounded-lg object-cover"
                    alt="DSCF"
                    src="/img/virtual-office/DSCF32621.jpg"
                    width={152}
                    height={219}
                  />
                  <div className="relative flex w-[372px] flex-col items-start gap-3">
                    <Image
                      className="relative h-[104px] w-full self-stretch rounded-lg object-cover"
                      alt="DSCF"
                      src="/img/virtual-office/DSCF32331.jpg"
                      width={372}
                      height={104}
                    />
                    <Image
                      className="relative h-[103px] w-full self-stretch rounded-lg object-cover"
                      alt="DSCF"
                      src="/img/virtual-office/DSCF32811.jpg"
                      width={372}
                      height={103}
                    />
                  </div>
                </div>
              </div>

              <div className="relative flex w-[242px] flex-col items-start gap-[11px]">
                <Image
                  className="relative h-[161px] w-full self-stretch rounded-lg object-cover"
                  alt="DSCF"
                  src="/img/virtual-office/DSCF32181.jpg"
                  width={242}
                  height={161}
                />
                <Image
                  className="relative h-[155px] w-full self-stretch rounded-lg object-cover"
                  alt="DSCF"
                  src="/img/virtual-office/DSCF32641.jpg"
                  width={242}
                  height={155}
                />
                <Image
                  className="relative h-[147px] w-full self-stretch rounded-lg object-cover"
                  alt="DSCF"
                  src="/img/virtual-office/DSCF32251.jpg"
                  width={242}
                  height={147}
                />
              </div>
            </div>
          </div>

          <div className="relative flex w-[374px] flex-col items-start gap-3">
            <Image
              className="relative h-[504px] w-full self-stretch rounded-lg object-cover"
              alt="DSCF"
              src="/img/virtual-office/DSCF32611.jpg"
              width={374}
              height={504}
            />
            <Image
              className="relative h-[219px] w-full self-stretch rounded-lg object-cover"
              alt="DSCF"
              src="/img/virtual-office/DSCF32841.jpg"
              width={374}
              height={219}
            />
          </div>
        </div>
      </section>
      <div className="right-half-circle-vertical absolute -mt-[150px]"></div>
      <Footer />
    </main>
  );
}
