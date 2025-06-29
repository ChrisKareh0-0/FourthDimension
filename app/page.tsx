import { Encryption } from "@/components/main/encryption";
import { Hero } from "@/components/main/hero";
import { Skills } from "@/components/main/skills";
import { Contact } from "@/components/main/contact";
import { Mockups } from "@/components/main/mockups";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        {/* <Encryption /> */}
        <Mockups />
        <Contact />
      </div>
    </main>
  );
}
