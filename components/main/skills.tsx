import { SkillText } from "@/components/sub/skill-text";
import { InteractiveCards } from "@/components/main/interactive-cards";

export const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-visible py-20"
    >
      <SkillText />
      
      {/* Interactive Cards */}
      <div className="w-full relative z-50">
        <InteractiveCards />
      </div>

      {/* Background video with lower z-index */}
      <div className="w-full h-full absolute top-0 left-0">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};
