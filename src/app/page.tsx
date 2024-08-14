import ImageAnalyzer from "@/components/ImageAnalyzer";
import { LandingPage } from "@/components/LandingPage";
import { LearningSteps } from "@/components/LearningSteps";

export default function Home() {
  return (
    <main className="">
      <LandingPage />
      <LearningSteps />
      <ImageAnalyzer />
    </main>
  );
}
