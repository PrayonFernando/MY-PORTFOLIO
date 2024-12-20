import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/ui/Social";
import Photo from "@/components/ui/Photo";
import Stats from "@/components/ui/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Front-End Developer</span>
            <h1 className="h1">
              Hello I am <br />{" "}
              <span className="text-accent">Prayon Fernando</span>
            </h1>
            <p className="max-w-[800px] mb-9 text-white/80">
              I am a passionate Software Engineer and an experienced front-end
              developer. As a front-end engineer with extensive experience in
              frameworks such as React.js, Angular.js, React-Native,
              Backbone.js, and Next.js, I have honed my skills in developing
              dynamic and responsive web applications. Whether its building
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
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
