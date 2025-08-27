import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Users, Shield, AlertTriangle, Scale } from "lucide-react";

const Terms = () => {
  const sections = [
    {
      icon: Users,
      title: "Acceptable Use",
      content: [
        "Use our platform for educational purposes only",
        "Be respectful and kind in all interactions with mentors and community members",
        "Do not share inappropriate, offensive, or harmful content",
        "Respect intellectual property rights of educational resources",
        "Do not attempt to misuse or hack our platform"
      ]
    },
    {
      icon: Shield,
      title: "Mentorship Guidelines",
      content: [
        "Mentorship is provided on a volunteer basis",
        "We screen mentors but cannot guarantee specific outcomes",
        "Maintain appropriate boundaries in mentor-mentee relationships",
        "Report any concerns about mentor conduct immediately",
        "Mentorship sessions may be recorded for quality and safety purposes"
      ]
    },
    {
      icon: FileText,
      title: "Content and Resources",
      content: [
        "Educational resources are curated from publicly available sources",
        "We provide links to external content but don't control those sites",
        "Resource availability may change without notice",
        "Always verify information from multiple sources for important decisions",
        "Respect copyright and fair use when sharing resources"
      ]
    },
    {
      icon: AlertTriangle,
      title: "Limitations",
      content: [
        "Our platform is provided 'as is' without warranties",
        "We cannot guarantee specific learning outcomes or success",
        "Service availability may be interrupted for maintenance",
        "We are not liable for decisions made based on platform content",
        "External links and resources are not under our control"
      ]
    },
    {
      icon: Scale,
      title: "Your Responsibilities",
      content: [
        "Provide accurate information when registering",
        "Keep your login credentials secure",
        "Notify us of any security breaches or concerns",
        "Use the platform in compliance with applicable laws",
        "Respect the privacy and safety of other users"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These terms govern your use of School Without Walls. By using our platform, 
            you agree to these terms and our commitment to safe, inclusive learning.
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            Last updated: December 2024
          </p>
        </div>

        {/* Acceptance */}
        <Card className="mb-8 bg-primary/5 border-primary/20">
          <CardContent className="p-6">
            <h2 className="font-poppins font-semibold text-foreground mb-3">
              Agreement to Terms
            </h2>
            <p className="text-muted-foreground">
              By accessing or using School Without Walls, you agree to be bound by these Terms of Service 
              and our Privacy Policy. If you do not agree to these terms, please do not use our platform.
            </p>
          </CardContent>
        </Card>

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

        {/* Changes and Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Changes to Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                We may update these terms from time to time. We'll notify users of significant 
                changes via email or platform notifications. Continued use constitutes acceptance 
                of updated terms.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Questions?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-2">
                Contact us about these terms:
              </p>
              <a 
                href="mailto:legal@schoolwithoutwalls.org" 
                className="text-primary hover:underline text-sm"
              >
                legal@schoolwithoutwalls.org
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Terms;