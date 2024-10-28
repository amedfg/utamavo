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
        className="absolute w-1/2 h-1/2 lg:h-full lg:w-full  right-0 mt-[300px]"
        alt="ellipse-8"
      />
      <section className="w-full px-8 pb-28 pt-36 lg:px-32">
        <Image
          src={"/img/jumbotron-about.jpg"}
          alt="jumbotron-about"
          width={500}
          height={500}
          sizes="100vw"
          className="min-h-60 w-screen rounded-xl lg:min-h-80"
        />
      </section>

      <Footer />
    </main>
  );
}
