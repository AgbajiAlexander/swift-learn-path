import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import ResourceCard from "@/components/ui/resource-card";
import { BookOpen, Users, Search, ArrowRight, Star, Mail } from "lucide-react";
import heroImage from "@/assets/hero-learning.jpg";

const Home = () => {
  const steps = [
    {
      icon: Search,
      title: "Browse",
      description: "Find high-quality videos, articles, and PDFs curated by educators"
    },
    {
      icon: BookOpen,
      title: "Learn",
      description: "Follow short learning paths and track what resonates with you"
    },
    {
      icon: Users,
      title: "Connect",
      description: "Request mentorship or join our supportive learning community"
    }
  ];

  const featuredResources = [
    {
      title: "Intro to Fractions for Kids",
      description: "Visual approach to understanding fractions with real-world examples that make math concepts stick.",
      type: "Video" as const,
      topics: ["Math", "Numeracy"],
      duration: "15 mins",
      source: "Khan Academy",
      url: "#",
      featured: true
    },
    {
      title: "Learn to Read: Phonics Level 1",
      description: "Comprehensive phonics guide to help children master reading fundamentals step by step.",
      type: "PDF" as const,
      topics: ["Reading", "Literacy"],
      duration: "30 mins",
      source: "Reading Rockets",
      url: "#"
    },
    {
      title: "Scratch for Kids: First Game",
      description: "Build your first interactive game using Scratch programming - perfect for young coders.",
      type: "Playlist" as const,
      topics: ["Coding", "STEM"],
      duration: "45 mins",
      source: "Code.org",
      url: "#"
    }
  ];

  const testimonials = [
    {
      quote: "SWW helped me find the right videos for math—everything clicked.",
      author: "Emmanuel A.",
      role: "Student"
    },
    {
      quote: "I found a mentor who guided my first coding project.",
      author: "Mary O.",
      role: "Young Developer"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-bg py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-foreground mb-6 leading-tight">
                School Without Walls
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Curated learning resources + micro-mentorship for anyone, anywhere.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-base">
                  <Link to="/resources">
                    Browse Resources
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base">
                  <Link to="/mentorship">Find a Mentor</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroImage}
                alt="Diverse learners studying together with modern technology"
                className="rounded-2xl shadow-large w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to transform your learning journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <Card key={step.title} className="text-center hover-lift">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-poppins font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
                Featured Resources
              </h2>
              <p className="text-lg text-muted-foreground">
                Hand-picked learning materials to get you started
              </p>
            </div>
            <Button asChild variant="outline">
              <Link to="/resources">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredResources.map((resource) => (
              <ResourceCard key={resource.title} {...resource} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
              What Learners Say
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-accent fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-lg text-foreground mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <cite className="text-muted-foreground font-medium">
                    — {testimonial.author}, <span className="text-sm">{testimonial.role}</span>
                  </cite>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get the latest learning resources and community updates
          </p>
          
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              // Simulate newsletter signup
              window.location.href = "/success/newsletter";
            }}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <Input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1"
              required
            />
            <Button type="submit">
              <Mail className="mr-2 h-4 w-4" />
              Get Updates
            </Button>
          </form>
          <p className="text-sm text-muted-foreground mt-4">
            Occasional updates. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-8 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 text-muted-foreground text-sm">
            <span className="flex items-center">
              <BookOpen className="h-4 w-4 mr-2" />
              Built with open resources
            </span>
            <span className="flex items-center">
              <Users className="h-4 w-4 mr-2" />
              Mentor-led
            </span>
            <span className="flex items-center">
              <Star className="h-4 w-4 mr-2" />
              Community-driven
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;