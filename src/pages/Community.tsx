import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Users, Shield, ExternalLink, Calendar, BookOpen, Heart } from "lucide-react";

const Community = () => {
  const guidelines = [
    "Be kind and respectful to all community members",
    "Stay on topic and keep discussions educational",
    "No spam, self-promotion, or inappropriate content",
    "Help others learn and grow together",
    "Report any issues to community moderators"
  ];

  const features = [
    {
      icon: MessageSquare,
      title: "Peer Support",
      description: "Get help from fellow learners and share your knowledge"
    },
    {
      icon: Calendar,
      title: "Mentor Office Hours",
      description: "Join regular sessions with expert mentors"
    },
    {
      icon: BookOpen,
      title: "Study Groups",
      description: "Connect with others learning similar topics"
    },
    {
      icon: Heart,
      title: "Safe Space",
      description: "Moderated environment focused on learning and growth"
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
            Join Our Learning Community
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with fellow learners, get support from mentors, and grow together in a safe, 
            inclusive environment dedicated to education.
          </p>
        </div>

        {/* Main CTA */}
        <Card className="mb-12 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
          <CardContent className="p-8 text-center">
            <Users className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-2xl font-poppins font-bold text-foreground mb-4">
              Ready to Connect?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join hundreds of learners in our Discord community where you can ask questions, 
              share resources, participate in study groups, and attend mentor office hours.
            </p>
            <Button size="lg" className="mb-4">
              <ExternalLink className="h-5 w-5 mr-2" />
              Join Our Discord
            </Button>
            <p className="text-sm text-muted-foreground">
              Free to join • Invite expires in 7 days
            </p>
          </CardContent>
        </Card>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="hover-lift">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-poppins font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Community Guidelines */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              Community Guidelines
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {guidelines.map((guideline, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Badge variant="outline" className="mt-0.5 text-xs">
                    {index + 1}
                  </Badge>
                  <p className="text-sm text-muted-foreground flex-1">
                    {guideline}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Need help?</strong> Contact our moderators 
                directly in Discord or email us at community@schoolwithoutwalls.org
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Alternative Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>WhatsApp Groups</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-4">
                Join subject-specific WhatsApp groups for more focused discussions 
                and quick help with your studies.
              </p>
              <Button variant="outline" className="w-full">
                View WhatsApp Groups
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Local Meetups</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-4">
                Connect with learners in your area through organized study sessions 
                and educational events.
              </p>
              <Button variant="outline" className="w-full">
                Find Local Groups
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Community;