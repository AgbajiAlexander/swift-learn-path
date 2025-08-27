import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Mail, Eye, Database, Users } from "lucide-react";

const Privacy = () => {
  const sections = [
    {
      icon: Eye,
      title: "Information We Collect",
      content: [
        "Personal information you provide when requesting mentorship (name, email, learning goals)",
        "Usage data to improve our platform and resources",
        "Communication preferences and feedback",
        "Technical information like IP addresses and browser data"
      ]
    },
    {
      icon: Database,
      title: "How We Use Your Information",
      content: [
        "Match you with appropriate mentors and learning resources",
        "Send educational updates and community notifications",
        "Improve our platform and develop new features",
        "Ensure platform security and prevent misuse"
      ]
    },
    {
      icon: Users,
      title: "Information Sharing",
      content: [
        "We only share information necessary for mentorship matching",
        "Mentors receive limited contact information with your consent",
        "We never sell or rent personal information to third parties",
        "Anonymous usage data may be shared for research purposes"
      ]
    },
    {
      icon: Shield,
      title: "Your Rights",
      content: [
        "Access, update, or delete your personal information",
        "Opt out of communications at any time",
        "Request a copy of data we hold about you",
        "Contact us with privacy concerns or questions"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect 
            your information when you use School Without Walls.
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            Last updated: December 2024
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-8 mb-12">
          {sections.map((section, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <section.icon className="h-5 w-5 mr-2 text-primary" />
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Mail className="h-5 w-5 mr-2 text-primary" />
              Contact Us
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              If you have questions about this privacy policy or our data practices, please contact us:
            </p>
            <div className="space-y-2 text-sm">
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:privacy@schoolwithoutwalls.org" className="text-primary hover:underline">
                  privacy@schoolwithoutwalls.org
                </a>
              </p>
              <p>
                <strong>Response time:</strong> We aim to respond within 5 business days
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Privacy;