import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Code2, BarChart3, MessageSquare, Rocket, Brain } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Brain className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold text-foreground">AI Agency</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-foreground/70 hover:text-foreground transition">Services</a>
            <a href="#workflow" className="text-foreground/70 hover:text-foreground transition">Workflow</a>
            <a href="#contact" className="text-foreground/70 hover:text-foreground transition">Contact</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Get Started</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 -z-10 opacity-40"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663386343479/PwcWd7EDHemeZMZiEXeBZh/hero_background-UFvsXYYWsE8aH3AFD2yQ9U.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/80 to-background" />

        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                <span className="text-sm font-medium text-primary">Next-Generation AI Solutions</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Transform Your Business with <span className="text-primary">AI-Powered</span> Web Solutions
              </h1>
              <p className="text-lg text-foreground/70 max-w-md">
                We build intelligent, scalable web applications that leverage cutting-edge AI to drive growth and efficiency for your business.
              </p>
              <div className="flex gap-4 pt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                  Get Started <ArrowRight className="w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-border hover:bg-card">
                  Learn More
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
                <div>
                  <div className="text-2xl font-bold text-primary">72%</div>
                  <p className="text-sm text-foreground/60">Profit Margin</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">7</div>
                  <p className="text-sm text-foreground/60">Service Lines</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <p className="text-sm text-foreground/60">Custom Solutions</p>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative h-96 rounded-2xl overflow-hidden border border-border bg-card/50 backdrop-blur">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663386343479/PwcWd7EDHemeZMZiEXeBZh/service_ai_integration-X4j6ey23u9nMS5qg2YiuEp.webp"
                  alt="AI Integration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-card/30 border-y border-border">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Comprehensive AI-powered web development solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group p-8 rounded-xl border border-border bg-background hover:bg-card/50 transition-all duration-300 hover:border-primary/50">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">AI-Driven Website Development</h3>
              <p className="text-foreground/70 mb-4">
                Building dynamic and intelligent websites with integrated AI functionalities from the ground up.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Service 2 */}
            <div className="group p-8 rounded-xl border border-border bg-background hover:bg-card/50 transition-all duration-300 hover:border-primary/50">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Intelligent UI/UX Design</h3>
              <p className="text-foreground/70 mb-4">
                Crafting user interfaces enhanced by AI for personalization, predictive interactions, and accessibility.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Service 3 */}
            <div className="group p-8 rounded-xl border border-border bg-background hover:bg-card/50 transition-all duration-300 hover:border-primary/50">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Custom AI Integrations</h3>
              <p className="text-foreground/70 mb-4">
                Integrating advanced AI models (LLMs, computer vision, NLP) into existing or new web applications.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Service 4 */}
            <div className="group p-8 rounded-xl border border-border bg-background hover:bg-card/50 transition-all duration-300 hover:border-primary/50">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">AI Chatbot Development</h3>
              <p className="text-foreground/70 mb-4">
                Creating intelligent conversational interfaces for customer support, lead generation, and engagement.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Service 5 */}
            <div className="group p-8 rounded-xl border border-border bg-background hover:bg-card/50 transition-all duration-300 hover:border-primary/50">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Data Analytics & Visualization</h3>
              <p className="text-foreground/70 mb-4">
                Developing dashboards and reporting tools that leverage AI for insightful data analysis and modeling.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Service 6 */}
            <div className="group p-8 rounded-xl border border-border bg-background hover:bg-card/50 transition-all duration-300 hover:border-primary/50">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition">
                <Rocket className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">AI Micro-SaaS Solutions</h3>
              <p className="text-foreground/70 mb-4">
                Developing niche AI-powered software-as-a-service products for specific industry needs.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section id="workflow" className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">AI-First Development Workflow</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Our streamlined process integrates AI at every stage for maximum efficiency and quality
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4 md:gap-2">
            {[
              { phase: "Requirements", icon: "📋", description: "AI analyzes requirements and generates specs" },
              { phase: "Design", icon: "🎨", description: "AI-powered design tools create prototypes" },
              { phase: "Development", icon: "💻", description: "AI code assistants accelerate development" },
              { phase: "Testing", icon: "✓", description: "AI testing frameworks ensure quality" },
              { phase: "Deployment", icon: "🚀", description: "Automated deployment and monitoring" },
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="p-6 rounded-xl border border-border bg-card/50 text-center">
                  <div className="text-3xl mb-2">{step.icon}</div>
                  <h4 className="font-bold text-foreground mb-2">{step.phase}</h4>
                  <p className="text-sm text-foreground/60">{step.description}</p>
                </div>
                {idx < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-primary/50" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card/30 border-y border-border">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">$455K</div>
              <p className="text-foreground/70">Projected Annual Revenue</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">72%</div>
              <p className="text-foreground/70">Average Profit Margin</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">7</div>
              <p className="text-foreground/70">Core Service Lines</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">SMBs</div>
              <p className="text-foreground/70">Target Market Focus</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center bg-card/50 border border-border rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Ready to Transform Your Business?</h2>
            <p className="text-lg text-foreground/70 mb-8">
              Let's discuss how AI-powered web solutions can drive growth and efficiency for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                Schedule a Consultation <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-border hover:bg-background">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-border bg-card/30 py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Brain className="w-6 h-6 text-primary" />
                <span className="font-bold text-foreground">AI Agency</span>
              </div>
              <p className="text-foreground/60 text-sm">
                Transforming businesses with AI-powered web solutions.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="#" className="hover:text-primary transition">Web Development</a></li>
                <li><a href="#" className="hover:text-primary transition">AI Integration</a></li>
                <li><a href="#" className="hover:text-primary transition">UI/UX Design</a></li>
                <li><a href="#" className="hover:text-primary transition">Chatbots</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="#" className="hover:text-primary transition">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li><a href="#" className="hover:text-primary transition">LinkedIn</a></li>
                <li><a href="#" className="hover:text-primary transition">Twitter</a></li>
                <li><a href="#" className="hover:text-primary transition">GitHub</a></li>
                <li><a href="#" className="hover:text-primary transition">Email</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-foreground/60">
            <p>&copy; 2026 AI-Powered Web Development Agency. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
