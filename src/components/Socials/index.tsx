import UpworkIcon from "../../assets/icons/upwork.svg?react";
import GithubIcon from "../../assets/icons/github.svg?react";
import { developerInfo } from "../../data/developerInfo";

export interface SocialsProps {
  className?: string;
}

export default function Socials({ className }: SocialsProps) {
  const socials = developerInfo.socials;
  const baseStyles =
    "size-8 lg:size-10 opacity-70 hover:opacity-100 transition-all duration-300 dark:[&_path]:fill-white [&_path]:fill-gray-900";

  if (!socials) return;

  return (
    <div className={`flex gap-3  ${className}`}>
      <a target="_blank" href={socials.upwork}>
        <UpworkIcon className={baseStyles} />
      </a>
      <a target="_blank" href={socials.github}>
        <GithubIcon className={baseStyles} />
      </a>
    </div>
  );
}
