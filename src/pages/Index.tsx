import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MapPin, Users, Award, Globe, Wheat, Factory, Target, Eye, Building2, Truck, Scale, Calendar } from "lucide-react";

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

      {/* Rice Mill Process Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Rice Mill Plant & Food Processing</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                JONATHAN GROUP RWANDA Ltd is a rice mill plant that transforms paddy into premium rice 
                by removing rice husk and bran, ensuring quality through advanced processing and packaging.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Industry Overview</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  In Rwanda, the food processing industry is at a nascent stage, presenting immense opportunities. 
                  While the global food processing industry is worth billions, processed foods in Rwanda are mainly 
                  imported, despite being integral to modern meals.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our vision is to establish a well-managed food processing business that can grow into a 
                  conglomerate, addressing the growing demand for processed foods like instant noodles, 
                  pasta, and other convenient food items.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Building2 className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">Green Business Opportunity</h4>
                      <p className="text-sm text-muted-foreground">
                        Cereals food processing is a green business in Africa with many opportunities 
                        for innovative value addition to local cereals.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Globe className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold">Global Market Potential</h4>
                      <p className="text-sm text-muted-foreground">
                        70% of our rice, maize flour, and animal feeds can be sold not just 
                        regionally but across the globe.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Factory className="w-6 h-6 text-primary" />
                    Processing Excellence
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Quality Control</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Every product undergoes extensive internal checks through our world-class 
                        quality control department to meet all regulatory standards.
                      </p>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h4 className="font-semibold mb-2">Raw Materials</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        We source premium paddy and cereals from farmer cooperatives across 
                        all districts of Rwanda, ensuring consistent quality.
                      </p>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h4 className="font-semibold mb-2">Processing Capacity</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Rice: 312 tons/month</li>
                        <li>• Maize Flour: 208 tons/month</li>
                        <li>• Animal Feeds: 312 tons/month</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Vision & Mission</h2>
              <p className="text-lg text-muted-foreground">
                Building Rwanda's premier food processing company with global standards
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="w-6 h-6 text-primary" />
                    Vision Statement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    We are passionate about creating a successful food processing business that competes 
                    with established companies. Our goal is to be ranked among the top 5 food processing 
                    companies in Rwanda within five years, driven by dedication and innovative excellence.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-6 h-6 text-primary" />
                    Mission Statement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    To establish a stellar company offering customers products of exceptional quality. 
                    We aim to build a lasting brand known for delivering premium products that pass 
                    all regulatory standards through our world-class quality control procedures.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Business Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  JONATHAN GROUP RWANDA Ltd is a food processing company focused on adding value to cereals 
                  (rice, maize, soya, etc.) produced in Rwanda. Located in Kigali Economic Zone, we serve 
                  the global market, especially Rwanda, Eastern Africa, Africa, and Europe.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our factory also produces animal feeds from cereal processing remains, providing nutrition 
                  for fish, cows, pigs, and other livestock, serving farmers in Rwanda and beyond.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products & Services */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Products & Services</h2>
              <p className="text-lg text-muted-foreground">
                Premium quality cereals and feeds processed with international standards
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wheat className="w-6 h-6 text-primary" />
                    Rice Products
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Premium rice produced from Rwandan farmers' cooperatives, offering long, 
                    middle, and short grain varieties.
                  </p>
                  <div className="space-y-2">
                    <Badge variant="outline">Long Grain Rice</Badge>
                    <Badge variant="outline">Middle Grain Rice</Badge>
                    <Badge variant="outline">Short Grain Rice</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">
                    Packaged in sacs of different sizes for wholesale and retail distribution.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Scale className="w-6 h-6 text-primary" />
                    Maize Flour
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    High-quality maize flour processed from maize grain sourced from 
                    cooperatives across different districts.
                  </p>
                  <div className="space-y-2">
                    <Badge variant="outline">Premium Grade</Badge>
                    <Badge variant="outline">Standard Grade</Badge>
                    <Badge variant="outline">Commercial Grade</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">
                    Available in various package sizes to meet different market needs.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-6 h-6 text-primary" />
                    Animal Feeds
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Nutritious animal feeds produced from cereal processing remains, 
                    enhanced with additional ingredients.
                  </p>
                  <div className="space-y-2">
                    <Badge variant="outline">Cattle Feed</Badge>
                    <Badge variant="outline">Pig Feed</Badge>
                    <Badge variant="outline">Chicken Feed</Badge>
                    <Badge variant="outline">Fish Feed</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">
                    Sold to farmers for livestock nutrition across Rwanda and beyond.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Business Operations */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Business Operations</h2>
              <p className="text-lg text-muted-foreground">
                Strategic operations designed for efficiency and market penetration
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Truck className="w-6 h-6 text-primary" />
                    Pricing & Distribution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Rice Pricing</h4>
                      <p className="text-muted-foreground text-sm mb-2">
                        Factory selling price: 1,000 RWF per kg (10% reduction from retail to account for distributor margin)
                      </p>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h4 className="font-semibold mb-2">Distribution Network</h4>
                      <p className="text-muted-foreground text-sm">
                        Company-run selling points across all 30 districts of Rwanda, 
                        where wholesalers and retailers can purchase stocks.
                      </p>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h4 className="font-semibold mb-2">Market Pricing</h4>
                      <p className="text-muted-foreground text-sm">
                        Maize flour and animal feed prices determined by market trends at production time.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-6 h-6 text-primary" />
                    Production Program
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Monthly Capacity</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Rice: 312 tons/month</li>
                        <li>• Maize Flour: 208 tons/month</li>
                        <li>• Animal Feeds: 312 tons/month</li>
                      </ul>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h4 className="font-semibold mb-2">Annual Capacity</h4>
                      <p className="text-muted-foreground text-sm mb-2">
                        7,488 tons at full capacity in 2 shifts after the second year of operation.
                      </p>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h4 className="font-semibold mb-2">Growth Plan</h4>
                      <p className="text-muted-foreground text-sm">
                        Start at 80% capacity, increase by 10% annually, reaching 100% by year two.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Company Leadership */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">Leadership & Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-6 h-6 text-primary" />
                    Leadership
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    <strong>Jonathan NSENGIMANA</strong> - Founder & CEO
                  </p>
                  <p className="text-muted-foreground">
                    Leading with experienced technical staff, engineers, technicians, and managers 
                    specializing in rice mill business development to build a competent workforce.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Our Values</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Client's best interests always come first. Everything we do is guided by 
                    professional ethics and accountability to the highest standards, ensuring 
                    we meet our client's needs precisely and completely.
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
