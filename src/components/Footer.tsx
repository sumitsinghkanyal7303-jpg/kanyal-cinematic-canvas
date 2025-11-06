import { Mail, Phone, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bebas mb-4 text-primary">Sumit Singh Kanyal</h3>
            <p className="text-muted-foreground text-sm">
              Visual Storyteller • Video Editor • Graphic Designer
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bebas mb-4 text-primary">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <a href="/" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Home
              </a>
              <a href="/about" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                About
              </a>
              <a href="/portfolio" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Portfolio
              </a>
              <a href="/contact" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bebas mb-4 text-primary">Contact Info</h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:sumitsinghkanyal7303@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                <Mail className="h-4 w-4" />
                sumitsinghkanyal7303@gmail.com
              </a>
              <a
                href="tel:7303997548"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                <Phone className="h-4 w-4" />
                7303997548
              </a>
              <a
                href="https://www.linkedin.com/in/sumit-singh-kanyal-aaa484381"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sumit Singh Kanyal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
