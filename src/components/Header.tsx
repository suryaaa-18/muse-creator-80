import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="border-b border-border backdrop-blur-sm bg-background/95 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-neural animate-neural-pulse"></div>
          <h1 className="text-xl font-bold text-neural-blue">AI Content Generator</h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-muted-foreground hover:text-neural-cyan transition-neural">
            Features
          </a>
          <a href="#demo" className="text-muted-foreground hover:text-neural-cyan transition-neural">
            Demo
          </a>
          <a href="#docs" className="text-muted-foreground hover:text-neural-cyan transition-neural">
            Docs
          </a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
          <Button variant="neural" size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;