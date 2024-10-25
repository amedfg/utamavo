import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <main className="w-full">
      <Navbar/>
      <section className="px-8 lg:px-32 pt-36 pb-28 w-full">
        <img className="w-screen min-h-60 lg:min-h-80 rounded-xl" src="../img/jumbotron-about.png" />
      </section>
      <Footer/>
    </main>
  );
}
