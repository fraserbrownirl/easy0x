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
            <span className="text-foreground font-semibold text-lg hidden md:flex items-center gap-2">
              <span>Browser extensions</span>
              <svg 
                className="w-5 h-5 animate-fade-in-out" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" className="stroke-primary"/>
                <path d="M12 5l7 7-7 7" className="stroke-foreground"/>
              </svg>
            </span>
            <a 
              href="https://chromewebstore.google.com/detail/rolod0x/dgagbbklcgogbaamlbmaaemljjfnminp"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-all duration-200 hover:scale-110"
            >
              <img src={chromeIcon} alt="Chrome" className="w-6 h-6 md:w-8 md:h-8" />
            </a>
            <a 
              href="https://addons.mozilla.org/en-GB/firefox/addon/rolod0x/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-all duration-200 hover:scale-110"
            >
              <img src={firefoxIcon} alt="Firefox" className="w-6 h-6 md:w-8 md:h-8" />
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
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
              {/* Product & Usage */}
              <div>
                <h3 className="font-bold text-foreground mb-4">Product & Usage</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="https://rolod0x.io/" className="text-muted-foreground hover:text-primary transition-colors">
                      Overview / Home
                    </a>
                  </li>
                  <li>
                    <a href="https://rolod0x.io/docs/install.html" className="text-muted-foreground hover:text-primary transition-colors">
                      Installation Guide
                    </a>
                  </li>
                  <li>
                    <a href="https://rolod0x.io/docs/user-manual.html" className="text-muted-foreground hover:text-primary transition-colors">
                      User Manual
                    </a>
                  </li>
                  <li>
                    <a href="https://rolod0x.io/docs/FAQ.html" className="text-muted-foreground hover:text-primary transition-colors">
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>

              {/* Development & Code */}
              <div>
                <h3 className="font-bold text-foreground mb-4">Development & Code</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="https://github.com/rolod0x/rolod0x" className="text-muted-foreground hover:text-primary transition-colors">
                      GitHub Repository
                    </a>
                  </li>
                  <li>
                    <a href="https://rolod0x.io/docs/dev-guide.html" className="text-muted-foreground hover:text-primary transition-colors">
                      Developer Guide
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/rolod0x/rolod0x/projects/1" className="text-muted-foreground hover:text-primary transition-colors">
                      Project Roadmap
                    </a>
                  </li>
                </ul>
              </div>

              {/* Legal & Transparency */}
              <div>
                <h3 className="font-bold text-foreground mb-4">Legal & Transparency</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="https://rolod0x.io/docs/privacy-policy.md" className="text-muted-foreground hover:text-primary transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="https://rolod0x.io/docs/security-analysis.html" className="text-muted-foreground hover:text-primary transition-colors">
                      Security Analysis
                    </a>
                  </li>
                  <li>
                    <a href="https://rolod0x.io/LICENSE.txt" className="text-muted-foreground hover:text-primary transition-colors">
                      Project License
                    </a>
                  </li>
                </ul>
              </div>

              {/* Support & Contributions */}
              <div>
                <h3 className="font-bold text-foreground mb-4">Support & Contributions</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="https://rolod0x.io/docs/support.html" className="text-muted-foreground hover:text-primary transition-colors">
                      Support Page
                    </a>
                  </li>
                  <li>
                    <a href="https://giveth.io/project/rolod0x" className="text-muted-foreground hover:text-primary transition-colors">
                      Donate via Giveth
                    </a>
                  </li>
                  <li>
                    <a href="https://explorer.gitcoin.co/#/round/42161/25/89" className="text-muted-foreground hover:text-primary transition-colors">
                      Donate via Gitcoin Grants
                    </a>
                  </li>
                  <li>
                    <a href="bitcoin:bc1quuspvrjepx63k5hpydwqkf6nmtt9eqm86y8w8a" className="text-muted-foreground hover:text-primary transition-colors break-all">
                      Bitcoin Donation Address
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground">
              <p>
                &copy; 2024 easyOx. Contributed with ❤️ for Public Goods by{" "}
                <a 
                  href="https://adamspiers.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  adamspiers.com
                </a>
                {" | "}reimagined at{" "}
                <a 
                  href="https://fundingthecommons.io" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Funding the Commons
                </a>
                {" "}residency, BA.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
