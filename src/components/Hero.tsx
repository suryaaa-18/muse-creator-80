import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import neuralBrainImage from "@/assets/neural-brain.jpg";

const Hero = () => {
  return (
    <section className="hero-section min-h-screen flex items-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-neural-blue/5 via-transparent to-neural-cyan/5"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                AI content are{" "}
                <span className="text-transparent bg-gradient-to-r from-neural-blue to-neural-cyan bg-clip-text">
                  what we will
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Whereas we are destined to crafting the content. 
                Python-based AI application that generates creative content using machine learning models with a clean web interface for user interaction.
              </p>
            </div>
            
          </div>
          
          {/* Right image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={neuralBrainImage} 
                alt="Neural Network Brain Visualization" 
                className="w-full h-auto rounded-2xl shadow-2xl neural-glow"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-neural-blue/20 rounded-full animate-neural-pulse blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-neural-cyan/20 rounded-full animate-neural-pulse blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;