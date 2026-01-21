"use client";

import { Check } from "lucide-react";
import { useState } from "react";

import { CopyIcon } from "./ui/copy";

interface CopyButtonProps {
  code: string;
}

export function CopyButton({ code }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute top-2 right-2 rounded-md p-1.5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100 hover:bg-muted hover:text-foreground"
      aria-label="Copy code"
    >
      {copied ? <Check className="size-4" /> : <CopyIcon size={16} />}
    </button>
  );
}
