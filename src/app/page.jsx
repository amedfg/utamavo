import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="w-full">
      <Navbar/>
      {/* <div className="container">
        <section id="jumbotron">
          <Image
          src="/img/jumbotron.png"
          width={1182}
          height={449}
          alt="jumbotron"
          priority={true} // Keep priority if needed
          style={{ width: '1182px', height: '449px' }} // Use style for dimensions
          />
        </section>
      </div> */}
      <Footer/>
    </main>
  );
}
