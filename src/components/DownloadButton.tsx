import { Button } from "@/components/ui/button";

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
        {isChrome ? (
          <svg className="w-40 h-40" viewBox="0 0 96 96" fill="none">
            <circle cx="48" cy="48" r="48" fill="white"/>
            <circle cx="48" cy="48" r="44" fill="#4285F4"/>
            <circle cx="48" cy="48" r="36" fill="white"/>
            <circle cx="48" cy="48" r="16" fill="#4285F4"/>
            <path d="M48 4C24.5 4 4 24.5 4 48h44V4z" fill="#EA4335"/>
            <path d="M4 48c0 23.5 20.5 44 44 44l22-38.1H4z" fill="#34A853"/>
            <path d="M92 48c0-23.5-20.5-44-44-44l-22 38.1H92z" fill="#FBBC04"/>
          </svg>
        ) : (
          <svg className="w-40 h-40" viewBox="0 0 96 96" fill="none">
            <defs>
              <radialGradient id="firefox-gradient" cx="50%" cy="30%">
                <stop offset="0%" stopColor="#FFEA00"/>
                <stop offset="20%" stopColor="#FF9500"/>
                <stop offset="50%" stopColor="#FF5E00"/>
                <stop offset="100%" stopColor="#C92000"/>
              </radialGradient>
              <radialGradient id="firefox-body" cx="50%" cy="50%">
                <stop offset="0%" stopColor="#9059FF"/>
                <stop offset="100%" stopColor="#6B3EFF"/>
              </radialGradient>
            </defs>
            <circle cx="48" cy="48" r="48" fill="url(#firefox-gradient)"/>
            <ellipse cx="48" cy="42" rx="32" ry="28" fill="url(#firefox-body)"/>
            <ellipse cx="48" cy="38" rx="28" ry="24" fill="#FF9500"/>
            <path d="M48 28c-11 0-20 9-20 20h40c0-11-9-20-20-20z" fill="#FFCA28"/>
            <circle cx="48" cy="48" r="44" fill="none" stroke="#C92000" strokeWidth="2"/>
          </svg>
        )}
        <span className="font-semibold text-xl">Download for {isChrome ? "Chrome" : "Firefox"}</span>
      </span>
    </Button>
  );
};

export default DownloadButton;
