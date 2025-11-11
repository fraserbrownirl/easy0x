import { Button } from "@/components/ui/button";
import chromeIcon from "@/assets/chrome-icon.svg";
import firefoxIcon from "@/assets/firefox-icon.svg";

interface DownloadButtonProps {
  browser: "chrome" | "firefox";
}

const DownloadButton = ({ browser }: DownloadButtonProps) => {
  const isChrome = browser === "chrome";
  const downloadUrl = isChrome 
    ? "https://chromewebstore.google.com/detail/rolod0x/dgagbbklcgogbaamlbmaaemljjfnminp"
    : "https://addons.mozilla.org/en-GB/firefox/addon/rolod0x/";
  
  return (
    <Button
      size="lg"
      className="group relative overflow-hidden bg-primary hover:bg-primary/90 hover:shadow-2xl transition-all duration-300 text-primary-foreground border-0 h-20 px-8 rounded-full text-xl font-semibold min-w-[320px]"
      onClick={() => window.open(downloadUrl, '_blank')}
    >
      <span className="relative z-10 flex items-center gap-4">
        <img 
          src={isChrome ? chromeIcon : firefoxIcon} 
          alt={isChrome ? "Chrome" : "Firefox"} 
          className="w-40 h-40"
        />
        <span className="font-semibold text-xl">Download for {isChrome ? "Chrome" : "Firefox"}</span>
      </span>
    </Button>
  );
};

export default DownloadButton;
