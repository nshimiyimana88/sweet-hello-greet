import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, Award, Globe, Wheat, Factory } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-secondary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              <Factory className="w-4 h-4 mr-2" />
              Food Processing Excellence
            </Badge>
            <h1 className="text-5xl font-bold text-foreground mb-6">
              JONATHAN GROUP RWANDA Ltd
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              A registered food processing company transforming Rwanda's agricultural potential 
              through quality cereal processing, located in Kigali's Special Economic Zone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Our Products
              </Button>
              <Button variant="outline" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <MapPin className="w-12 h-12 mx-auto text-primary mb-4" />
                <CardTitle>Strategic Location</CardTitle>
                <CardDescription>
                  Based in Kigali Special Economic Zone, Masoro
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Globe className="w-12 h-12 mx-auto text-primary mb-4" />
                <CardTitle>National Reach</CardTitle>
                <CardDescription>
                  Wholesale points across all 30 districts of Rwanda
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Award className="w-12 h-12 mx-auto text-primary mb-4" />
                <CardTitle>International Standards</CardTitle>
                <CardDescription>
                  Quality products meeting global export requirements
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">About Jonathan Group Rwanda</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We are dedicated to adding value to local cereal production through advanced 
                  food processing technology. Our commitment to quality ensures that Rwandan 
                  cereals reach not only domestic markets but consumers across the globe.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  By sourcing raw materials directly from farmer cooperatives and federations 
                  across all districts, we create a sustainable supply chain that benefits 
                  local communities while delivering exceptional products.
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="font-semibold">Led by Jonathan NSENGIMANA</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  With experienced technical staff, engineers, technicians, and managers 
                  specializing in rice mill business development.
                </p>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wheat className="w-6 h-6 text-primary" />
                    Our Products
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <Badge variant="outline">Rice</Badge>
                      <span className="text-sm">Premium processed rice</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge variant="outline">Maize Flour</Badge>
                      <span className="text-sm">High-quality maize flour</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge variant="outline">Animal Feeds</Badge>
                      <span className="text-sm">Nutritious livestock feeds</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Values */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">Our Vision & Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    To drive food processing business to enviable heights while adding 
                    value to local cereal production and expanding across neighboring countries.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Our Values</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Client's best interests come first. Everything we do is guided by 
                    professional ethics and accountability to the highest standards.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
            <p className="text-muted-foreground mb-8">
              Ready to experience quality cereal products with international standards? 
              Contact us to learn more about our wholesale opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Contact Sales Team
              </Button>
              <Button variant="outline" size="lg">
                Request Quote
              </Button>
            </div>
            <div className="mt-8 text-sm text-muted-foreground">
              <p>📍 Kigali Special Economic Zone, Masoro, Rwanda</p>
              <p>🌍 Serving all 30 districts of Rwanda</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
