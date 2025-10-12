import Footer from "@/components/templates/Footer";
import Header from "@/components/templates/Header";
import PassionProject from "@/components/templates/PassionProject";
import Resume from "@/components/templates/Resume";
import SkillSet from "@/components/templates/SkillSet";

export default function Home() {
  return (
    <main className="relative sm:max-w-[80%] lg:max-w-[60%] mx-auto z-20 rounded-b-[2rem] pt-[40px] md:pt-[128px] ">
      <Header />
      <PassionProject />
      <SkillSet />
      <Resume />
      <Footer />
    </main>
  );
}
