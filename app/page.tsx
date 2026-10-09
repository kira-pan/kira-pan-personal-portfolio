import Cover from "@/components/home/Cover";
import Marquee from "@/components/home/Marquee";
import EditorsLetter from "@/components/home/EditorsLetter";
import Features from "@/components/home/Features";

export default function Home() {
  return (
    <>
      <Cover />
      <Marquee />
      <EditorsLetter />
      <Features />
      {/* Sections below are built in the next steps (see CLAUDE.md → Build order). */}
      <div className="container-page pb-24">
        <span id="case-files" />
        <span id="desk" />
        <span id="studio" />
        <span id="about" />
        <p className="label border-t-2 border-ink pt-3 text-muted">The rest of the issue is still on press.</p>
      </div>
    </>
  );
}
