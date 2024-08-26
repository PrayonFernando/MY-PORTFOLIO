import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const socials = [
  { icons: <FaGithub />, path: "https://github.com/PrayonFernando" },
  {
    icons: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/prayon-fernando-738b271b8/",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icons}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
