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
      className="group relative overflow-hidden bg-primary hover:bg-primary/90 hover:shadow-2xl transition-all duration-300 text-primary-foreground border-0 h-20 px-8 rounded-full text-xl font-semibold min-w-[320px]"
      onClick={() => window.open(url, '_blank')}
    >
      <span className="relative z-10 flex items-center gap-4">
        {isX ? (
          <svg className="w-20 h-20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        ) : (
          <img src={blueskyIcon} alt="Bluesky" className="w-8 h-8 brightness-0 invert" />
        )}
        <span>{isX ? "Share on Twitter" : "Share on Bluesky"}</span>
      </span>
    </Button>
  );
};

export default SocialButton;
