import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Image from "next/image";

export default function About() {
  return (
    <main className="w-full">
      <Navbar/>
      <section className="px-8 lg:px-32 pt-36 pb-28 w-full">
        <Image
          src={"/img/jumbotron-about.jpg"}
          alt="jumbotron-about"
          width={500}
          height={500}
          sizes="100vw"
          className="w-screen min-h-60 lg:min-h-80 rounded-xl"
        />
      </section>
      <Footer/>
    </main>
  );
}
