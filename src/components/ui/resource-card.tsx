import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, ExternalLink, Bookmark } from "lucide-react";
import { cn } from "@/lib/utils";

interface ResourceCardProps {
  title: string;
  description: string;
  type: "Video" | "Article" | "PDF" | "Playlist";
  topics: string[];
  duration: string;
  source: string;
  url: string;
  featured?: boolean;
  className?: string;
}

const ResourceCard = ({
  title,
  description,
  type,
  topics,
  duration,
  source,
  url,
  featured = false,
  className
}: ResourceCardProps) => {
  const typeColors = {
    Video: "bg-accent/10 text-accent-foreground border-accent/20",
    Article: "bg-primary/10 text-primary border-primary/20",
    PDF: "bg-secondary/10 text-secondary border-secondary/20",
    Playlist: "bg-accent/10 text-accent-foreground border-accent/20"
  };

  return (
    <Card className={cn(
      "hover-lift cursor-pointer group transition-all duration-300",
      featured && "ring-2 ring-primary/20",
      className
    )}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-3">
          <Badge variant="outline" className={typeColors[type]}>
            {type}
          </Badge>
          <Button 
            variant="ghost" 
            size="sm" 
            className="opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Save resource"
          >
            <Bookmark className="h-4 w-4" />
          </Button>
        </div>
        
        <h3 className="font-poppins font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {topics.slice(0, 2).map((topic) => (
            <Badge key={topic} variant="secondary" className="text-xs">
              {topic}
            </Badge>
          ))}
          {topics.length > 2 && (
            <Badge variant="secondary" className="text-xs">
              +{topics.length - 2} more
            </Badge>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center text-muted-foreground text-sm">
            <Clock className="h-4 w-4 mr-1" />
            <span>{duration}</span>
            <span className="mx-2">•</span>
            <span>{source}</span>
          </div>
          
          <Button 
            asChild 
            variant="outline" 
            size="sm" 
            className="opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <a href={url} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-1" />
              Open
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResourceCard;