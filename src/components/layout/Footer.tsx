import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = [
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Refund Policy", href: "#" },
    { label: "Feedback", href: "#" },
    { label: "News & Updates", href: "#" },
  ];

  return (
    <footer className="py-8 px-4 bg-background border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-muted-foreground text-sm">
            Contact Us: support@savevido.com
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
