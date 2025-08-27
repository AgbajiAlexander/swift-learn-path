import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Home, RefreshCw } from "lucide-react";

interface ErrorProps {
  title?: string;
  message?: string;
  showRetry?: boolean;
}

const Error = ({ 
  title = "Something went wrong",
  message = "We encountered an unexpected error. Please try again or contact support if the problem persists.",
  showRetry = true
}: ErrorProps) => {
  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-20 h-20 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="h-10 w-10 text-destructive" />
        </div>
        
        <h1 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
          {title}
        </h1>
        
        <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto leading-relaxed">
          {message}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link to="/">
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
          </Button>
          
          {showRetry && (
            <Button 
              variant="outline" 
              size="lg"
              onClick={handleRetry}
            >
              <RefreshCw className="mr-2 h-5 w-5" />
              Try Again
            </Button>
          )}
        </div>
        
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            Need help? Contact us at{" "}
            <a 
              href="mailto:support@schoolwithoutwalls.org" 
              className="text-primary hover:underline"
            >
              support@schoolwithoutwalls.org
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Error;