export interface SocialButtonProps {
  icon: React.ReactNode;
}

export default function SocialButton({ icon }: SocialButtonProps) {
  return <div className="p-2 bg-yellow">{icon}</div>;
}
