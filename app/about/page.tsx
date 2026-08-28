import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutTrust from "@/components/about/AboutTrust";
import AboutCoverage from "@/components/about/AboutCoverage";
import AboutTeam from "@/components/about/AboutTeam";

export const metadata = {
  title: "About Us | SMP Surgitech",
  description:
    "Learn about SMP Surgitech - 10+ years of excellence in cardiovascular medical device distribution across Central India.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <AboutHero />
      <AboutStory />
      <AboutTrust />
      <AboutCoverage />
      <AboutTeam />
    </div>
  );
}