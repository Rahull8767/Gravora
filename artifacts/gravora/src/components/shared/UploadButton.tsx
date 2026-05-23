import { useState, useRef } from "react";
import { Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function UploadButton({ className, variant = "default" }: { className?: string, variant?: "default" | "outline" | "ghost" }) {
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className={className}>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept="image/*,.pdf,.ai,.eps,.svg"
        data-testid="input-upload-idea"
      />
      {file ? (
        <div className="flex items-center gap-3 px-4 py-2 border border-primary/30 bg-primary/5 rounded-none text-sm animate-in fade-in zoom-in duration-300">
          <span className="truncate max-w-[150px] md:max-w-[200px] text-primary">{file.name}</span>
          <button 
            onClick={handleClear}
            className="text-muted-foreground hover:text-foreground transition-colors"
            data-testid="button-clear-file"
          >
            <X size={16} />
          </button>
        </div>
      ) : (
        <Button 
          variant={variant} 
          onClick={() => fileInputRef.current?.click()}
          className="rounded-none gap-2 w-full sm:w-auto font-sans tracking-wide"
          data-testid="button-upload-idea"
        >
          <Upload size={18} />
          Upload Your Idea
        </Button>
      )}
    </div>
  );
}