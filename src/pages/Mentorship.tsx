import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Users, Heart, MessageSquare, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Mentorship = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    role: "",
    interests: [] as string[],
    goals: "",
    availability: "",
    contactPreference: "",
    consent: false,
    volunteerMentor: false
  });
  const { toast } = useToast();

  const interests = ["STEM", "Coding", "Literacy", "Numeracy", "Life Skills"];

  const toggleInterest = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.email || !formData.role || !formData.consent) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      window.location.href = "/success/mentorship";
    }, 500);
    
    toast({
      title: "Request submitted successfully!",
      description: "We'll review and reach out within a few days."
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-secondary" />
          </div>
          <h1 className="text-3xl font-poppins font-bold text-foreground mb-4">
            Thanks for reaching out!
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Your mentorship request is in. We'll review your information and get back to you shortly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <a href="/resources">Browse Resources</a>
            </Button>
            <Button asChild variant="outline">
              <a href="/community">Join the Community</a>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
            Connect with a Mentor
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tell us your goals. We'll match you with a mentor or share resources tailored to you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  Mentorship Request Form
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Basic Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData(prev => ({...prev, fullName: e.target.value}))}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
                        required
                      />
                    </div>
                  </div>

                  {/* Role */}
                  <div>
                    <Label>I am a *</Label>
                    <RadioGroup
                      value={formData.role}
                      onValueChange={(value) => setFormData(prev => ({...prev, role: value}))}
                      className="mt-2"
                    >
                      {["Learner", "Mentor", "Parent", "Educator"].map(role => (
                        <div key={role} className="flex items-center space-x-2">
                          <RadioGroupItem value={role} id={role} />
                          <Label htmlFor={role}>{role}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  {/* Areas of Interest */}
                  <div>
                    <Label>Areas of Interest</Label>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {interests.map(interest => (
                        <Badge
                          key={interest}
                          variant={formData.interests.includes(interest) ? "default" : "outline"}
                          className="cursor-pointer"
                          onClick={() => toggleInterest(interest)}
                        >
                          {interest}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Learning Goals */}
                  <div>
                    <Label htmlFor="goals">Learning Goals</Label>
                    <Textarea
                      id="goals"
                      placeholder="Tell us what you want to learn or achieve (2-3 sentences)"
                      value={formData.goals}
                      onChange={(e) => setFormData(prev => ({...prev, goals: e.target.value}))}
                      rows={3}
                    />
                  </div>

                  {/* Availability */}
                  <div>
                    <Label htmlFor="availability">Availability</Label>
                    <Input
                      id="availability"
                      type="text"
                      placeholder="e.g., Weekends 2-4pm WAT"
                      value={formData.availability}
                      onChange={(e) => setFormData(prev => ({...prev, availability: e.target.value}))}
                    />
                  </div>

                  {/* Contact Preference */}
                  <div>
                    <Label htmlFor="contactPreference">Preferred Contact Method</Label>
                    <Select
                      value={formData.contactPreference}
                      onValueChange={(value) => setFormData(prev => ({...prev, contactPreference: value}))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select preferred contact method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="email">Email</SelectItem>
                        <SelectItem value="whatsapp">WhatsApp</SelectItem>
                        <SelectItem value="phone">Phone</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Consent and Volunteer */}
                  <div className="space-y-4">
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="consent"
                        checked={formData.consent}
                        onCheckedChange={(checked) => 
                          setFormData(prev => ({...prev, consent: checked as boolean}))
                        }
                        required
                      />
                      <Label htmlFor="consent" className="text-sm leading-relaxed">
                        I agree to be contacted about mentorship and updates. *
                      </Label>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="volunteer"
                        checked={formData.volunteerMentor}
                        onCheckedChange={(checked) => 
                          setFormData(prev => ({...prev, volunteerMentor: checked as boolean}))
                        }
                      />
                      <Label htmlFor="volunteer" className="text-sm leading-relaxed">
                        I'm willing to volunteer as a mentor
                      </Label>
                    </div>
                  </div>

                  {/* Submit Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button type="submit" className="flex-1">
                      Request Mentorship
                    </Button>
                    <Button type="button" variant="outline" className="flex-1">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Contact Us
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Heart className="h-5 w-5 text-secondary mr-2" />
                  <h3 className="font-poppins font-semibold">Why Mentorship?</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Personalized learning guidance</li>
                  <li>• Career and educational support</li>
                  <li>• Access to expert knowledge</li>
                  <li>• Building lasting connections</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-poppins font-semibold mb-4">What to Expect</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div>
                    <strong className="text-foreground">1. Review</strong>
                    <p>We'll review your request within 2-3 days</p>
                  </div>
                  <div>
                    <strong className="text-foreground">2. Match</strong>
                    <p>Find the best mentor for your goals</p>
                  </div>
                  <div>
                    <strong className="text-foreground">3. Connect</strong>
                    <p>Introduction and first meeting setup</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentorship;