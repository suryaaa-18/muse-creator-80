import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Loader2, Sparkles, Copy, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContentGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [contentType, setContentType] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState("");
  const { toast } = useToast();

  const contentTypes = [
    { value: "blog-post", label: "Blog Post", description: "SEO-optimized blog articles" },
    { value: "social-media", label: "Social Media", description: "Engaging social content" },
    { value: "email", label: "Email Copy", description: "Marketing email content" },
    { value: "product-desc", label: "Product Description", description: "Compelling product copy" },
    { value: "ad-copy", label: "Ad Copy", description: "Persuasive advertising text" },
    { value: "creative", label: "Creative Writing", description: "Stories and creative content" }
  ];

  const handleGenerate = async () => {
    if (!prompt.trim() || !contentType) {
      toast({
        title: "Missing Information",
        description: "Please enter a prompt and select a content type.",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    
    // Simulate AI generation with realistic delay
    setTimeout(() => {
      const sampleContent = generateSampleContent(contentType, prompt);
      setGeneratedContent(sampleContent);
      setIsGenerating(false);
      
      toast({
        title: "Content Generated!",
        description: "Your AI-powered content is ready.",
      });
    }, 3000);
  };

  const generateSampleContent = (type: string, userPrompt: string) => {
    const contents = {
      "blog-post": `# ${userPrompt}\n\nIn today's digital landscape, understanding the nuances of ${userPrompt.toLowerCase()} has become crucial for businesses and individuals alike. This comprehensive guide explores the key aspects and practical applications.\n\n## Key Benefits\n\n1. **Enhanced Efficiency**: Streamlining processes and workflows\n2. **Improved Results**: Data-driven insights for better outcomes\n3. **Future-Ready**: Staying ahead of industry trends\n\n## Implementation Strategy\n\nTo successfully implement these concepts, consider the following approach:\n\n- Start with a clear understanding of your objectives\n- Leverage proven methodologies and best practices\n- Monitor progress and adapt as needed\n\n## Conclusion\n\nBy embracing these principles, you'll be well-positioned to achieve your goals and drive meaningful results in your field.`,
      
      "social-media": `🚀 Excited to share insights about ${userPrompt}! \n\nHere are 3 game-changing tips:\n\n✨ Tip 1: Focus on value-driven content\n💡 Tip 2: Engage authentically with your audience\n🎯 Tip 3: Consistency is key to building trust\n\nWhat's your experience with ${userPrompt.toLowerCase()}? Drop your thoughts below! 👇\n\n#AI #Innovation #ContentCreation #DigitalMarketing`,
      
      "email": `Subject: Transform Your Approach to ${userPrompt}\n\nHi there!\n\nI hope this email finds you well. I wanted to share something exciting that could revolutionize how you think about ${userPrompt.toLowerCase()}.\n\nOur latest research shows that businesses implementing these strategies see:\n• 40% improvement in efficiency\n• 25% increase in customer satisfaction\n• 60% reduction in manual tasks\n\nReady to get started? Click here to learn more about how we can help you succeed.\n\nBest regards,\nYour AI Assistant`,
      
      "product-desc": `**${userPrompt} - Premium Solution**\n\nExperience the future of innovation with our cutting-edge ${userPrompt.toLowerCase()} solution. Designed for professionals who demand excellence and results.\n\n**Key Features:**\n• Advanced AI-powered functionality\n• Intuitive user interface\n• Enterprise-grade security\n• 24/7 customer support\n• Seamless integration capabilities\n\n**Why Choose Us:**\nWith over 10,000 satisfied customers worldwide, we've proven that quality and innovation go hand in hand. Join the ranks of industry leaders who trust our solutions.\n\n*Starting at $99/month - 30-day money-back guarantee*`,
      
      "ad-copy": `🎯 **Attention ${userPrompt} Enthusiasts!**\n\nTired of settling for less? It's time to experience the difference that quality makes.\n\n✅ Proven Results\n✅ Expert Support\n✅ Money-Back Guarantee\n\n**Limited Time Offer: 50% OFF**\n\nDon't let this opportunity slip away. Join thousands of satisfied customers who've already transformed their approach to ${userPrompt.toLowerCase()}.\n\n👉 **Act Now - Only 48 Hours Left!**\n\n[Get Started Today] [Learn More]`,
      
      "creative": `The Journey of ${userPrompt}\n\nIn a world where possibilities seemed endless, there lived a curious soul who dared to explore the mysteries of ${userPrompt.toLowerCase()}. Each day brought new discoveries, new challenges, and new reasons to believe in the power of innovation.\n\nThe morning sun cast long shadows across the landscape of opportunity, illuminating paths previously hidden from view. It was here, in this moment of clarity, that everything changed.\n\n"Success," whispered the wind, "belongs to those who dare to dream beyond the ordinary." And so began an extraordinary adventure that would reshape everything we thought we knew about the possible.\n\nThe story continues, with each chapter more compelling than the last...`
    };

    return contents[type as keyof typeof contents] || `Generated content about ${userPrompt} would appear here.`;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedContent);
    toast({
      title: "Copied!",
      description: "Content copied to clipboard.",
    });
  };

  return (
    <section id="demo" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-neural-blue/10 text-neural-blue border-neural-blue/20">
            <Sparkles className="w-4 h-4 mr-2" />
            AI Content Generator
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            Generate Content with{" "}
            <span className="text-transparent bg-gradient-to-r from-neural-blue to-neural-cyan bg-clip-text">
              AI Power
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your ideas into compelling content using advanced machine learning models
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Panel */}
            <Card className="ai-card">
              <CardHeader>
                <CardTitle className="flex items-center text-neural-blue">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Content Configuration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Content Type</label>
                  <Select value={contentType} onValueChange={setContentType}>
                    <SelectTrigger className="bg-secondary/50 border-border/50">
                      <SelectValue placeholder="Choose content type..." />
                    </SelectTrigger>
                    <SelectContent>
                      {contentTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          <div>
                            <div className="font-medium">{type.label}</div>
                            <div className="text-xs text-muted-foreground">{type.description}</div>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Your Prompt</label>
                  <Textarea
                    placeholder="Describe what you want to create... (e.g., 'Digital Marketing Strategies for Small Businesses')"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    className="min-h-32 bg-secondary/50 border-border/50 resize-none"
                  />
                </div>

                <Button 
                  onClick={handleGenerate}
                  disabled={isGenerating || !prompt.trim() || !contentType}
                  className="w-full"
                  variant="neural"
                  size="lg"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 mr-2" />
                      Generate Content
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Output Panel */}
            <Card className="ai-card">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-neural-cyan">
                  <span className="flex items-center">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Generated Content
                  </span>
                  {generatedContent && (
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={copyToClipboard}
                        className="h-8 px-3"
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 px-3"
                      >
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="min-h-96 bg-secondary/30 rounded-lg p-4 border border-border/50">
                  {isGenerating ? (
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center space-y-4">
                        <div className="flex justify-center">
                          <div className="w-12 h-12 rounded-full bg-gradient-neural animate-neural-pulse"></div>
                        </div>
                        <p className="text-muted-foreground">AI is generating your content...</p>
                      </div>
                    </div>
                  ) : generatedContent ? (
                    <pre className="whitespace-pre-wrap text-sm leading-relaxed text-foreground">
                      {generatedContent}
                    </pre>
                  ) : (
                    <div className="flex items-center justify-center h-full text-center">
                      <div className="space-y-4">
                        <div className="w-16 h-16 mx-auto rounded-full bg-muted/50 flex items-center justify-center">
                          <Sparkles className="w-8 h-8 text-muted-foreground" />
                        </div>
                        <p className="text-muted-foreground">
                          Configure your settings and click "Generate Content" to begin
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentGenerator;