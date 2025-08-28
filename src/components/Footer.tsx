import { Badge } from "@/components/ui/badge";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-neural animate-neural-pulse"></div>
              <span className="text-xl font-bold text-neural-blue">AI Content Generator</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Python-based AI application for generating creative content using advanced machine learning models.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="bg-card/50 border-neural-blue/30">Python</Badge>
              <Badge variant="outline" className="bg-card/50 border-neural-cyan/30">Flask</Badge>
              <Badge variant="outline" className="bg-card/50 border-neural-purple/30">TensorFlow</Badge>
            </div>
          </div>

          {/* Product */} 
          <div className="space-y-4">
            <h3 className="font-semibold text-neural-cyan">Product</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#features" className="hover:text-neural-blue transition-neural">Features</a></li>
              <li><a href="#demo" className="hover:text-neural-blue transition-neural">Live Demo</a></li>
              <li><a href="#pricing" className="hover:text-neural-blue transition-neural">Pricing</a></li>
              <li><a href="#changelog" className="hover:text-neural-blue transition-neural">Changelog</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-neural-cyan">Resources</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#docs" className="hover:text-neural-blue transition-neural">Documentation</a></li>
              <li><a href="#api" className="hover:text-neural-blue transition-neural">API Reference</a></li>
              <li><a href="#tutorials" className="hover:text-neural-blue transition-neural">Tutorials</a></li>
              <li><a href="#support" className="hover:text-neural-blue transition-neural">Support</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-neural-cyan">Company</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#about" className="hover:text-neural-blue transition-neural">About</a></li>
              <li><a href="#blog" className="hover:text-neural-blue transition-neural">Blog</a></li>
              <li><a href="#careers" className="hover:text-neural-blue transition-neural">Careers</a></li>
              <li><a href="#contact" className="hover:text-neural-blue transition-neural">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 AI Content Generator. Built with React, TypeScript, and Tailwind CSS.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#privacy" className="text-muted-foreground hover:text-neural-blue transition-neural text-sm">
              Privacy Policy
            </a>
            <a href="#terms" className="text-muted-foreground hover:text-neural-blue transition-neural text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;