import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface SocialButtonProps {
  platform: "x" | "bluesky";
}

const SocialButton = ({ platform }: SocialButtonProps) => {
  const isX = platform === "x";
  const url = isX ? "https://x.com/rolod0x" : "https://bsky.app/profile/rolod0x.bsky.social";
  
  return (
    <Button
      size="lg"
      className="group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:shadow-xl transition-all duration-300 text-primary-foreground border-0"
      onClick={() => window.open(url, '_blank')}
    >
      <span className="relative z-10 flex items-center gap-2">
        {isX ? (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        ) : (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
          </svg>
        )}
        <span>{isX ? "Share on X" : "Share on Bluesky"}</span>
        <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </span>
    </Button>
  );
};

export default SocialButton;
