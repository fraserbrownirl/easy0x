import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface DownloadButtonProps {
  browser: "chrome" | "firefox";
}

const DownloadButton = ({ browser }: DownloadButtonProps) => {
  const isChrome = browser === "chrome";
  
  return (
    <Button
      size="lg"
      className="group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:shadow-xl transition-all duration-300 text-primary-foreground border-0"
    >
      <span className="relative z-10 flex items-center gap-3">
        {isChrome ? (
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill="#4285F4"/>
            <circle cx="12" cy="12" r="7" fill="white"/>
            <circle cx="12" cy="12" r="4.5" fill="#4285F4"/>
            <path d="M12 2C6.477 2 2 6.477 2 12h10V2z" fill="#EA4335"/>
            <path d="M2 12c0 5.523 4.477 10 10 10l5-8.66H2z" fill="#34A853"/>
            <path d="M22 12c0-5.523-4.477-10-10-10l-5 8.66H22z" fill="#FBBC04"/>
          </svg>
        ) : (
          <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill="url(#firefox-gradient)"/>
            <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z" fill="url(#firefox-gradient2)"/>
            <path d="M12 4c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8z" fill="#FF9500"/>
            <ellipse cx="12" cy="10" rx="6" ry="5" fill="#FF5722"/>
            <path d="M12 8c-2.21 0-4 1.79-4 4h8c0-2.21-1.79-4-4-4z" fill="#FFC107"/>
            <defs>
              <linearGradient id="firefox-gradient" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF9500"/>
                <stop offset="1" stopColor="#FF5722"/>
              </linearGradient>
              <linearGradient id="firefox-gradient2" x1="2" y1="12" x2="22" y2="12" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF5722"/>
                <stop offset="1" stopColor="#C2185B"/>
              </linearGradient>
            </defs>
          </svg>
        )}
        <span className="font-semibold">Download for {isChrome ? "Chrome" : "Firefox"}</span>
        <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
      </span>
    </Button>
  );
};

export default DownloadButton;
