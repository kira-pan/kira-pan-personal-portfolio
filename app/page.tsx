import Cover from "@/components/home/Cover";
import Marquee from "@/components/home/Marquee";
import EditorsLetter from "@/components/home/EditorsLetter";
import Features from "@/components/home/Features";
import CaseFiles from "@/components/home/CaseFiles";
import Desk from "@/components/home/Desk";
import Studio from "@/components/home/Studio";
import ContributorsNote from "@/components/home/ContributorsNote";
import MobileContents from "@/components/MobileContents";
import ColorOnView from "@/components/ColorOnView";

export default function Home() {
  return (
    <>
      <Cover />
      <Marquee />
      <EditorsLetter />
      <Features />
      <CaseFiles />
      <Desk />
      <Studio />
      <ContributorsNote />
      <MobileContents />
      <ColorOnView />
    </>
  );
}
