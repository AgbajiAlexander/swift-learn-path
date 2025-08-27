import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Users, BookOpen } from "lucide-react";

interface SuccessProps {
  type?: "newsletter" | "mentorship" | "general";
  title?: string;
  message?: string;
}

const Success = ({ 
  type = "general", 
  title = "Success!",
  message = "Your request has been submitted successfully."
}: SuccessProps) => {
  const getContent = () => {
    switch (type) {
      case "newsletter":
        return {
          title: "Welcome to our community!",
          message: "Thanks for subscribing! You'll receive our latest updates and learning resources.",
          actions: [
            { label: "Browse Resources", href: "/resources", icon: BookOpen },
            { label: "Join Community", href: "/community", icon: Users, variant: "outline" as const }
          ]
        };
      case "mentorship":
        return {
          title: "Thanks for reaching out!",
          message: "Your mentorship request is in. We'll review and reach out within a few days.",
          actions: [
            { label: "Browse Resources", href: "/resources", icon: BookOpen },
            { label: "Join Community", href: "/community", icon: Users, variant: "outline" as const }
          ]
        };
      default:
        return {
          title,
          message,
          actions: [
            { label: "Go Home", href: "/", icon: ArrowRight },
            { label: "Browse Resources", href: "/resources", icon: BookOpen, variant: "outline" as const }
          ]
        };
    }
  };

  const content = getContent();

  return (
    <div className="min-h-screen flex items-center justify-center py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-10 w-10 text-secondary" />
        </div>
        
        <h1 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
          {content.title}
        </h1>
        
        <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto leading-relaxed">
          {content.message}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {content.actions.map((action, index) => (
            <Button 
              key={index} 
              asChild 
              variant={action.variant || "default"}
              size="lg"
            >
              <Link to={action.href}>
                <action.icon className="mr-2 h-5 w-5" />
                {action.label}
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Success;