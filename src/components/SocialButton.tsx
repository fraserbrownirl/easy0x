import { Button } from "@/components/ui/button";
import blueskyIcon from "@/assets/bluesky-icon.webp";
import xLogo from "@/assets/x-logo.webp";

interface SocialButtonProps {
  platform: "x" | "bluesky";
}

const SocialButton = ({ platform }: SocialButtonProps) => {
  const isX = platform === "x";
  const url = isX ? "https://x.com/rolod0x" : "https://bsky.app/profile/rolod0x.bsky.social";
  
  return (
    <Button
      size="lg"
      className="group relative overflow-hidden bg-primary hover:bg-primary/90 hover:shadow-2xl transition-all duration-300 text-primary-foreground border-0 h-20 px-8 rounded-full text-xl font-semibold min-w-[320px]"
      onClick={() => window.open(url, '_blank')}
    >
      <span className="relative z-10 flex items-center gap-4">
        {isX ? (
          <img src={xLogo} alt="X/Twitter" className="w-16 h-16 brightness-0 invert" />
        ) : (
          <img src={blueskyIcon} alt="Bluesky" className="w-8 h-8 brightness-0 invert" />
        )}
        <span>{isX ? "Share on Twitter" : "Share on Bluesky"}</span>
      </span>
    </Button>
  );
};

export default SocialButton;
