import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6 max-w-md mx-auto px-6">
        <div className="space-y-4">
          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-neural animate-neural-pulse flex items-center justify-center">
            <span className="text-3xl font-bold text-white">404</span>
          </div>
          <h1 className="text-4xl font-bold text-foreground">Page Not Found</h1>
          <p className="text-xl text-muted-foreground">
            The page you're looking for doesn't exist in our neural network.
          </p>
        </div>
        
        <Button 
          variant="neural" 
          size="lg"
          onClick={() => window.location.href = "/"}
          className="animate-glow"
        >
          Return to AI Generator
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
