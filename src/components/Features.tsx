import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Zap, Code, Sparkles, Globe, Shield } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Advanced AI Models",
      description: "Powered by state-of-the-art machine learning algorithms for superior content generation.",
      badge: "AI/ML"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Generate high-quality content in seconds with optimized processing pipelines.",
      badge: "Performance"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Python Backend",
      description: "Built with Python, Flask, and TensorFlow for robust and scalable architecture.",
      badge: "Python"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Multiple Content Types",
      description: "Blog posts, social media, emails, ads, and creative writing all in one platform.",
      badge: "Versatile"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Clean Web Interface",
      description: "Intuitive and responsive UI designed for seamless user interaction.",
      badge: "UX/UI"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Ready",
      description: "Secure, scalable, and reliable infrastructure for businesses of all sizes.",
      badge: "Enterprise"
    }
  ];

  return (
    <section id="features" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-neural-cyan/10 text-neural-cyan border-neural-cyan/20">
            <Sparkles className="w-4 h-4 mr-2" />
            Features
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            Powerful{" "}
            <span className="text-transparent bg-gradient-to-r from-neural-blue to-neural-cyan bg-clip-text">
              AI Capabilities
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the advanced features that make our AI Content Generator the perfect choice for your creative needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="ai-card transition-neural hover:shadow-neural hover:scale-105 group"
            >
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-xl bg-gradient-neural text-white group-hover:animate-neural-pulse">
                    {feature.icon}
                  </div>
                </div>
                <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                <Badge 
                  variant="outline" 
                  className="w-fit mx-auto bg-card/50 border-neural-blue/30 text-neural-blue"
                >
                  {feature.badge}
                </Badge>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;