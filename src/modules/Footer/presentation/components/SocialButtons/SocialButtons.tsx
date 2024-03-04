import { FacebookButton } from "../../assets/FacebookButton";
import { InstagramButton } from "../../assets/InstagramButton";
import { LinkedinButton } from "../../assets/LinkedinButton";
import SocialButton, { SocialButtonProps } from "../SocialButton/SocialButton";

export default function SocialButtons() {
  const socialIcons: SocialButtonProps[] = [
    {
      icon: <InstagramButton />,
      href:'https://www.instagram.com/brandsparkvisuals/'
    },
  
  ];

  return (
    <div className="flex flex-row gap-3 mb-10">
      {socialIcons.map((socialButton, index) => (
        <SocialButton icon={socialButton.icon} href={socialButton.href} key={index} />
      ))}
    </div>
  );
}
