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
            <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768v16.463c0 .689.139 1.861.902 2.204.659.299 1.664.62 4.3-1.24C7.954 19.253 10.913 15.314 12 13.2zm6.798-7.995C21.434.944 22.439 1.266 23.098 1.565c.763.343.902 1.515.902 2.203v16.463c0 .689-.139 1.861-.902 2.204-.659.299-1.664.62-4.3-1.24C16.046 19.253 13.087 15.314 12 13.2c1.087-2.114 4.046-6.053 6.798-7.995z"/>
          </svg>
        )}
        <span>{isX ? "Share on X" : "Share on Bluesky"}</span>
        <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </span>
    </Button>
  );
};

export default SocialButton;
