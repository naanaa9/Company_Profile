import { Card, CardContent } from "./ui/card";

export function AboutSection() {
  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4">About Our Company</h2>
          <p className="max-w-3xl mx-auto text-muted-foreground">
            Founded in 2015, Innovate Solutions Inc. has been at the forefront of technological 
            innovation, helping businesses navigate the complexities of digital transformation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-primary rounded-full"></div>
              </div>
              <h3 className="mb-3">Our Mission</h3>
              <p className="text-muted-foreground">
                To empower businesses with cutting-edge technology solutions that drive 
                innovation, efficiency, and sustainable growth.
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-primary rounded-full"></div>
              </div>
              <h3 className="mb-3">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the global leader in transformative technology solutions, 
                shaping the future of business operations worldwide.
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-primary rounded-full"></div>
              </div>
              <h3 className="mb-3">Our Values</h3>
              <p className="text-muted-foreground">
                Innovation, integrity, collaboration, and customer-centricity guide 
                every decision we make and solution we deliver.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}