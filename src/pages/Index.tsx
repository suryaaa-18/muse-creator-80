import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ContentGenerator from "@/components/ContentGenerator";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <ContentGenerator />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
