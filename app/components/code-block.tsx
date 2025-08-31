
"use client";

import { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-tomorrow.css';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export function CodeBlock({ code, language = 'javascript' }: CodeBlockProps) {
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <div className="relative">
      <pre className="!bg-gray-900 !text-gray-100 rounded-lg overflow-x-auto">
        <code className={`language-${language}`}>
          {code}
        </code>
      </pre>
    </div>
  );
}
