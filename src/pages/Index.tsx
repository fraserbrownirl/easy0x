import { ArrowRight } from "lucide-react";
import DownloadButton from "@/components/DownloadButton";
import FeatureCard from "@/components/FeatureCard";
import heroBanner from "@/assets/hero-banner.jpeg";
import addressBook from "@/assets/usecase-addressbook.jpeg";
import beforeImage from "@/assets/before.png";
import afterImage from "@/assets/after.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="text-3xl font-bold">
            <span className="text-foreground">easy</span>
            <span className="text-primary">0x</span>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <img 
              src={heroBanner} 
              alt="easyOx makes blockchain addresses human-readable - comparing simple names with complex hex addresses"
              className="w-full h-auto"
            />
          </div>
          <div className="text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Make Blockchain Addresses <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Human-Readable</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stop struggling with long hexadecimal addresses. easyOx transforms them into memorable names you can actually remember.
            </p>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Browser Extensions
          </h2>
          <p className="text-lg text-muted-foreground">
            Get started in seconds with our browser extension
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <DownloadButton browser="chrome" />
            <DownloadButton browser="firefox" />
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Use Case 1 */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            <FeatureCard title="Find anyone's address in seconds">
              <div className="space-y-6">
                <p className="text-muted-foreground text-lg">
                  Our built-in address book lets you search for contacts using simple, memorable names instead of copying and pasting long hex strings.
                </p>
                <div className="rounded-xl overflow-hidden border border-border shadow-lg">
                  <img 
                    src={addressBook} 
                    alt="easyOx Address Book showing search functionality for finding blockchain addresses by name"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </FeatureCard>
          </div>

          {/* Use Case 2 */}
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700">
            <FeatureCard title="Right-click to rename addresses on sites">
              <div className="space-y-6">
                <p className="text-muted-foreground text-lg">
                  Transform any blockchain address on any website with a simple right-click. Never lose track of important wallets again.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-muted-foreground font-semibold">
                      <span className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-sm">1</span>
                      <span>Before</span>
                    </div>
                    <div className="rounded-lg overflow-hidden border border-border shadow-md">
                      <img 
                        src={beforeImage} 
                        alt="Before: Etherscan showing complex hexadecimal wallet addresses that are hard to remember"
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-primary font-semibold">
                      <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">2</span>
                      <span>After</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                    <div className="rounded-lg overflow-hidden border border-primary/50 shadow-lg ring-2 ring-primary/20">
                      <img 
                        src={afterImage} 
                        alt="After: Etherscan showing renamed addresses with memorable labels like 'some wallet' and 'governance contract'"
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </FeatureCard>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-12 border border-primary/20">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Ready to simplify your blockchain experience?
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of users who've made the switch to easy0x
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <DownloadButton browser="chrome" />
            <DownloadButton browser="firefox" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 easyOx. Making blockchain addresses easy to remember.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
