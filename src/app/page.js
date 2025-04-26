import { PageWrapper } from "@/utils";
import HeroSection from "./components/hero-section";

export default function Home() {
  return (
    <>
      <PageWrapper p="1rem">
        <HeroSection />
      </PageWrapper>
    </>
  );
}
