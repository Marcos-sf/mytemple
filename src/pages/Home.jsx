import PageLayout from "../components/PageLayout";
import HeroSlider from "../components/HeroSlider";
import IntroSection from "../components/IntroSection";
import TempleGalleryPreview from "../components/TempleGalleryPreview";
import InfoBlock from "../components/InfoBlock";

export default function Home() {
  return (
    <PageLayout>


      <HeroSlider />

      <IntroSection />

      <TempleGalleryPreview />

      <InfoBlock />
    </PageLayout>
  );
}
