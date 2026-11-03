import Hero from "@/components/home/Hero";
import Work from "@/components/home/Work";
import Experience from "@/components/home/Experience";
import Desk from "@/components/home/Desk";
import Studio from "@/components/home/Studio";
import ContributorsNote from "@/components/home/ContributorsNote";
import MobileContents from "@/components/MobileContents";
import ColorOnView from "@/components/ColorOnView";

// v3, recruiter-first: who + what → selected work → experience → writing → studio → contact.
export default function Home() {
  return (
    <>
      <Hero />
      <Work />
      <Experience />
      <Desk />
      <Studio />
      <ContributorsNote />
      <MobileContents />
      <ColorOnView />
    </>
  );
}
