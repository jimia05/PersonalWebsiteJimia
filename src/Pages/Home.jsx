import ThemeToggle from "../Components/ThemeToggle";
import ImageGallery from "../Components/ImageGallery";
import AboutMe from "../Components/AboutMe";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";
import Education from "../Components/Education";
import Contact from "../Components/Contact";

const images = [
  "/src/assets/Photos for website copy/Play/IMG_4546.JPG",
  "/src/assets/Photos for website copy/Play/IMG_8169.JPG",
  "/src/assets/Photos for website copy/Play/IMG_9414.HEIC",
];

const Home = () => (
  <div className="min-h-screen bg-background text-foreground font-sans">
    <h1 className="text-4xl font-bold mb-10">Jimi Aderele's Portfolio</h1>
    <ThemeToggle />
    <main className="flex flex-col gap-8 items-stretch max-w-3xl mx-auto px-4 sm:px-6 lg:px-0 pt-24">
      <AboutMe />
      <Skills />
      <Projects />
      <Education />
      <ImageGallery images={images} />
      <Contact />
    </main>
  </div>
);

export default Home;
