import "./App.css";
import {
  // About,
  Achievement,
  Banner,
  Categories,
  Header,
  Internships,
  NewsLetter,
  SubFooter,
} from "./components";
import founder from "./assets/founder.jpg";
import cofounder from "./assets/co-founder.jpg";

function App() {
  return (
    <main>
      <Header />
      <Banner />
      
      <section className="overflow-hidden flex flex-wrap max-md:flex-col items-center justify-center gap-5 px-2 relative h-[80vh] max-w-[1500px] w-full mx-auto my-10">
  <div className="relative md:max-w-[25%] flex-shrink-0">
    <img
      src={founder}
      alt="founder internee.pk"
      className="round-banner object-contain h-full"
    />
  </div>

  <div className="bg-secondary sm:py-10 px-6 md:max-w-[45%] flex-grow">
    <h1 className="text-white text-3xl font-semibold">Welcome to Internee.pk</h1>
    <p className="text-white my-5">
      Our internship program is designed to give students the opportunity to work on
      meaningful projects and tasks, while also receiving mentorship and guidance from
      experienced professionals in the field. Our goal is to help interns develop the
      skills and knowledge they need to succeed in their careers, while also building a
      strong network of talented individuals who may become valuable members of our team
      in the future. If you're looking for a challenging and rewarding internship
      experience, we invite you to explore our program and Apply Today
    </p>

    <div className="flex items-center gap-5">
      <button className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-black py-2.5 rounded-full px-3">
        Get to know us
      </button>
      <button className="text-white">Explore Internships</button>
    </div>
  </div>

  <div className="relative md:max-w-[25%] flex-shrink-0">
    <img
      src={cofounder}
      alt="founder internee.pk"
      className="round-banner-img object-contain h-full"
    />
  </div>
</section>


      <Categories />
      <Achievement />
      <Internships />
      <NewsLetter />
      <SubFooter />
    </main>
  );
}

export default App;
