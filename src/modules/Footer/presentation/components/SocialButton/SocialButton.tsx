export interface SocialButtonProps {
  icon: React.ReactNode;
  href: string;
}

export default function SocialButton({ icon, href }: SocialButtonProps) {
  return(<a href={href} target="_blank"> <div className="p-2 bg-yellow">{icon}</div></a>)
}
