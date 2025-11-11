import DownloadButton from "@/components/DownloadButton";
import SocialButton from "@/components/SocialButton";
import FeatureCard from "@/components/FeatureCard";
import heroBanner from "@/assets/hero-banner.jpeg";
import addressBook from "@/assets/usecase-addressbook.jpeg";
import beforeImage from "@/assets/before.png";
import afterImage from "@/assets/after.png";
import logo from "@/assets/logo.png";
import chromeIcon from "@/assets/chrome-icon.svg";
import firefoxIcon from "@/assets/firefox-icon.svg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="easyOx logo" className="w-12 h-12" />
            <div className="text-3xl font-bold">
              <span className="text-foreground">easy</span>
              <span className="text-primary">0x</span>
              <span className="text-foreground">.com</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a 
              href="https://chromewebstore.google.com/detail/rolod0x/dgagbbklcgogbaamlbmaaemljjfnminp"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img src={chromeIcon} alt="Chrome" className="w-8 h-8" />
            </a>
            <a 
              href="https://addons.mozilla.org/en-GB/firefox/addon/rolod0x/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img src={firefoxIcon} alt="Firefox" className="w-8 h-8" />
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="text-foreground">Blockchain Addresses to </span>
            <span className="text-primary">Names</span>
          </h1>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            <img 
              src={heroBanner} 
              alt="easyOx makes blockchain addresses human-readable - comparing simple names with complex hex addresses"
              className="w-full h-auto"
            />
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
            Improve naming in seconds with <span className="text-primary font-semibold">Easy's</span> browser extension
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
            <FeatureCard title="">
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold">
                  <span className="text-foreground">Find anyone's address</span>{" "}
                  <span className="text-primary">in seconds</span>
                </h3>
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
            <FeatureCard title="">
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold mb-8">
                  <span className="text-foreground">Right-click to rename addresses</span>{" "}
                  <span className="text-accent">on sites</span>
                </h3>
                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-muted-foreground font-semibold text-lg">
                      <span className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">1</span>
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
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-primary font-semibold text-lg">
                      <span className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center">2</span>
                      <span>After</span>
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
          <div className="flex items-center justify-center gap-4">
            <img src={logo} alt="easyOx logo" className="w-16 h-16" />
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-foreground">Introduce </span>
              <span className="text-primary">Easy</span>
              <span className="text-foreground"> to your friends</span>
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <SocialButton platform="x" />
            <SocialButton platform="bluesky" />
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
