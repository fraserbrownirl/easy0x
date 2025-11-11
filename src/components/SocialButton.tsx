import { Button } from "@/components/ui/button";
import blueskyIcon from "@/assets/bluesky-icon.webp";

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
          <img src={blueskyIcon} alt="Bluesky" className="w-5 h-5" />
        )}
        <span>{isX ? "Share on X" : "Share on Bluesky"}</span>
      </span>
    </Button>
  );
};

export default SocialButton;
