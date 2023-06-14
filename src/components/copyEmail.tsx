"use client";

import { useState } from "react";
import Icon from "@/components/icons";

export default function CopyEmail() {
  const [copyState, setCopyState] = useState(false);

  const handleCopyClick = async () => {
    await navigator.clipboard
      .writeText("ayushverma1194@gmail.com")
      .then(() => {
        setCopyState(true);
        setTimeout(() => {
          setCopyState(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <button
      onClick={handleCopyClick}
      className="gradient-bg-to-b flex items-center gap-3  rounded-md px-4 py-2"
      // className="gradient-bg-to-b rounded-md px-4 py-2"
    >
      <span>
        {copyState ? (
          <Icon name="Success" size="20" className="text-green-500" />
        ) : (
          <Icon name="Copy" />
        )}
      </span>
      E-Mail
    </button>
  );
}
