import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import ResourceCard from "@/components/ui/resource-card";
import { SearchInput } from "@/components/ui/search-input";
import { Filter, X, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const topics = ["STEM", "Literacy", "Numeracy", "Coding", "Life Skills"];
  const types = ["Video", "Article", "PDF", "Playlist"];
  const levels = ["Beginner", "Intermediate", "Advanced"];
  const durations = ["≤10 mins", "10-30 mins", "30-60 mins", "1-2 hrs", "2+ hrs"];

  const resources = [
    {
      title: "Introduction to Fractions for Kids",
      description: "Learn fractions through visual examples and real-world applications that make math concepts easy to understand.",
      type: "Video" as const,
      topics: ["Numeracy", "STEM"],
      duration: "15 mins",
      source: "Khan Academy",
      url: "#"
    },
    {
      title: "Reading Comprehension Strategies",
      description: "Essential techniques to improve reading understanding and critical thinking skills for all ages.",
      type: "Article" as const,
      topics: ["Literacy"],
      duration: "20 mins",
      source: "Reading Rockets",
      url: "#"
    },
    {
      title: "Python Programming Basics",
      description: "Complete beginner's guide to Python programming with hands-on exercises and projects.",
      type: "Playlist" as const,
      topics: ["Coding", "STEM"],
      duration: "2 hrs",
      source: "FreeCodeCamp",
      url: "#"
    },
    {
      title: "Financial Literacy for Teens",
      description: "Learn essential money management skills including budgeting, saving, and understanding credit.",
      type: "PDF" as const,
      topics: ["Life Skills"],
      duration: "45 mins",
      source: "Jump$tart Coalition",
      url: "#"
    },
    {
      title: "Basic Algebra Concepts",
      description: "Master fundamental algebra concepts with step-by-step explanations and practice problems.",
      type: "Video" as const,
      topics: ["STEM", "Numeracy"],
      duration: "25 mins",
      source: "Khan Academy",
      url: "#"
    },
    {
      title: "Creative Writing Workshop",
      description: "Develop your writing skills with exercises in storytelling, character development, and narrative structure.",
      type: "Article" as const,
      topics: ["Literacy"],
      duration: "35 mins",
      source: "Writer's Digest",
      url: "#"
    }
  ];

  const toggleTopic = (topic: string) => {
    setSelectedTopics(prev => 
      prev.includes(topic) ? prev.filter(t => t !== topic) : [...prev, topic]
    );
  };

  const toggleType = (type: string) => {
    setSelectedTypes(prev => 
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  const clearFilters = () => {
    setSelectedTopics([]);
    setSelectedTypes([]);
    setSelectedLevel("");
    setSelectedDuration("");
    setSearchQuery("");
  };

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTopics = selectedTopics.length === 0 || 
                         selectedTopics.some(topic => resource.topics.includes(topic));
    const matchesTypes = selectedTypes.length === 0 || selectedTypes.includes(resource.type);
    
    return matchesSearch && matchesTopics && matchesTypes;
  });

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
            Learning Resources
          </h1>
          <p className="text-lg text-muted-foreground">
            Discover curated educational content across all subjects and skill levels
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            {/* Search */}
            <SearchInput
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search topics, titles, or creators..."
              className="flex-1"
              onClear={() => setSearchQuery("")}
            />
            
            {/* Filter Toggle (Mobile) */}
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>

          {/* Filter Panel */}
          <Card className={cn(
            "transition-all duration-300",
            showFilters || "hidden lg:block"
          )}>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Topics */}
                <div>
                  <h3 className="font-medium text-foreground mb-3">Topics</h3>
                  <div className="flex flex-wrap gap-2">
                    {topics.map(topic => (
                      <Badge
                        key={topic}
                        variant={selectedTopics.includes(topic) ? "default" : "outline"}
                        className="cursor-pointer"
                        onClick={() => toggleTopic(topic)}
                      >
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Types */}
                <div>
                  <h3 className="font-medium text-foreground mb-3">Type</h3>
                  <div className="flex flex-wrap gap-2">
                    {types.map(type => (
                      <Badge
                        key={type}
                        variant={selectedTypes.includes(type) ? "default" : "outline"}
                        className="cursor-pointer"
                        onClick={() => toggleType(type)}
                      >
                        {type}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Level */}
                <div>
                  <h3 className="font-medium text-foreground mb-3">Level</h3>
                  <div className="flex flex-wrap gap-2">
                    {levels.map(level => (
                      <Badge
                        key={level}
                        variant={selectedLevel === level ? "default" : "outline"}
                        className="cursor-pointer"
                        onClick={() => setSelectedLevel(selectedLevel === level ? "" : level)}
                      >
                        {level}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Duration */}
                <div>
                  <h3 className="font-medium text-foreground mb-3">Duration</h3>
                  <div className="flex flex-wrap gap-2">
                    {durations.map(duration => (
                      <Badge
                        key={duration}
                        variant={selectedDuration === duration ? "default" : "outline"}
                        className="cursor-pointer"
                        onClick={() => setSelectedDuration(selectedDuration === duration ? "" : duration)}
                      >
                        {duration}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Clear Filters */}
              {(selectedTopics.length > 0 || selectedTypes.length > 0 || selectedLevel || selectedDuration || searchQuery) && (
                <div className="mt-4 pt-4 border-t border-border">
                  <Button variant="ghost" onClick={clearFilters} size="sm">
                    <X className="h-4 w-4 mr-2" />
                    Clear all filters
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredResources.length} resource{filteredResources.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Resource Grid */}
        {filteredResources.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {filteredResources.map((resource, index) => (
              <ResourceCard key={index} {...resource} />
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="p-12 text-center">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">No results found</h3>
              <p className="text-muted-foreground mb-4">
                Try clearing filters or searching with different keywords
              </p>
              <Button variant="outline" onClick={clearFilters}>
                Clear filters
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Load More */}
        {filteredResources.length > 0 && (
          <div className="text-center">
            <Button variant="outline" size="lg">
              Load More Resources
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Resources;