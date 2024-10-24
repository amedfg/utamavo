import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <main className="w-full">
      <Navbar/>
      <section className="px-32 py-36 w-full">
        <img className="w-screen h-[554px] rounded-xl" src="../img/jumbotron-about.png" />
      </section>
      <Footer/>
    </main>
  );
}
