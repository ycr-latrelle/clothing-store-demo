import Header from "../components/layout/Header";
import HeroSection from "../components/home/HeroSection";
import CollectionsSection from "../components/home/CollectionsSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <CollectionsSection />
      </main>
    </>
  );
}
