'use client'
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Clipboard, Check } from "lucide-react";

export default function ClipboardCopy({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
    catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <span className="text-md border rounded-md px-4 py-1">{text}</span>
      <Button
        onClick={handleCopy}
        className="flex items-center px-2 py-1"
      >
        {copied ? (
          <>
            <Check className="h-4 w-4 text-green-500" />
            <span>Copied</span>
          </>
        ) : (
          <>
            <Clipboard className="h-4 w-4" />
            <span>Copy</span>
          </>
        )}
      </Button>
    </div>
  );
}
