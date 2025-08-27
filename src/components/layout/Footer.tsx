import { Link } from "react-router-dom";
import { BookOpen, Mail, Twitter, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-8 w-8 text-primary" />
              <span className="font-poppins font-bold text-xl text-foreground">
                School Without Walls
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Learning beyond the classroom. We expand access to high-quality learning 
              by curating open resources, micro-mentorship, and a supportive community—anywhere, anytime.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-poppins font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "Resources", href: "/resources" },
                { name: "Mentorship", href: "/mentorship" },
                { name: "Community", href: "/community" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-poppins font-semibold text-foreground mb-4">Contact</h3>
            <div className="space-y-2">
              <a
                href="mailto:hello@schoolwithoutwalls.org"
                className="flex items-center text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Mail className="h-4 w-4 mr-2" />
                hello@schoolwithoutwalls.org
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} School Without Walls. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link
              to="/privacy"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Privacy
            </Link>
            <Link
              to="/terms"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Terms
            </Link>
            <span className="text-muted-foreground text-sm">
              Made with ♥ in Africa
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;