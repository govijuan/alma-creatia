interface FooterContactLinkProps {
  href: string;
  icon: React.ComponentType<{ size: number }>;
  iconSize: number;
  text: string;
}

const FooterContactLink = ({ href, icon: Icon, iconSize, text }: FooterContactLinkProps) => {
  return (
    <a href={href} className="w-100 flex items-center hover:text-blue-500 transition-colors duration-300">
      <Icon size={iconSize} />
      <span className="ms-2">{text}</span>
    </a>
  );
}

export default FooterContactLink;
