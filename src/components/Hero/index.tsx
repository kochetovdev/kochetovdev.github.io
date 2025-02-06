import Title from "../Title";
import Socials from "../Socials";
import React from "react";

export interface HeroProps {
  name: string;
  position: string;
  avatar: string;
  description: string;
}

const Hero = React.forwardRef<HTMLDivElement, HeroProps>(({ name, avatar, position, description }, ref) => {
  return (
    <div
      id="about"
      ref={ref}
      className="flex flex-col items-left text-left gap-5 relative pb-3 /*lg:text-center lg:items-center*/">
      <div>
        <Title variant="h1">{name}</Title>
        <p className="text-xl">{position}</p>
        <img
          className="mt-3 rounded-md size-56 mx-0 sm:size-64 md:size-80 object-cover /*lg:mx-auto*/"
          src={avatar}
          alt="developer avatar"
        />
        <p className="mt-4">{description}</p>
      </div>
      <div className="w-full h-[2px] dark:bg-green-400 bg-green-500" />
      <Socials className="hidden lg:flex" />
    </div>
  );
});

export default Hero;
