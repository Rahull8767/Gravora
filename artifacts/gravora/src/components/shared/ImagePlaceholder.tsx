import { Camera } from "lucide-react";

interface ImagePlaceholderProps {
  src?: string;
  alt?: string;
  className?: string;
  recommendedSize?: string;
  label?: string;
}

export function ImagePlaceholder({
  src,
  alt = "Product photo",
  className = "",
  recommendedSize = "800x800px",
  label = "ADD PRODUCT PHOTO HERE",
}: ImagePlaceholderProps) {
  // If src is provided and is not empty or a placeholder indicator
  const isPlaceholder = !src || src === "" || src.toLowerCase().includes("placeholder");

  if (!isPlaceholder) {
    return (
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover ${className}`}
        loading="lazy"
      />
    );
  }

  return (
    <div 
      className={`w-full h-full flex flex-col items-center justify-center border-2 border-dashed border-white/10 bg-zinc-950/50 p-6 text-center select-none min-h-[200px] ${className}`}
      data-testid="image-placeholder"
    >
      <Camera className="w-8 h-8 text-muted-foreground/30 mb-3" />
      <span className="text-xs font-mono text-muted-foreground/60 uppercase tracking-widest leading-normal">
        [ {label} ]
      </span>
      <span className="text-[10px] font-mono text-muted-foreground/40 mt-1">
        RECOMMENDED {recommendedSize}
      </span>
    </div>
  );
}
