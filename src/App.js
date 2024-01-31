import "./App.css";
import {
  Banner,
  Categories,
  Header,
  Internships,
  NewsLetter,
  SubFooter,
} from "./components";

function App() {
  return (
    <main>
      <Header />
      <Banner />
      <Categories />
      <Internships />
      <NewsLetter />
      <SubFooter />
    </main>
  );
}

export default App;
