import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/ui/Social";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left">
            <span className="text-xl">Front-End Developer</span>
            <h1 className="h1">
              Hello I'm <br />{" "}
              <span className="text-accent">Prayon Fernando</span>
            </h1>
            <p className="max-w-[800px] mb-9 text-white/80">
              I am a passionate Software Engineer and an experienced front-end
              developer. As a front-end engineer with extensive experience in
              frameworks such as React.js, Angular.js, React-Native,
              Backbone.js, and Next.js, I have honed my skills in developing
              dynamic and responsive web applications. Whether it's building
              complex single-page applications, optimizing performance, or
              ensuring a seamless user experience, I am dedicated to leveraging
              my knowledge to create impactful digital solutions.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">Socials</div>
              <Social />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
