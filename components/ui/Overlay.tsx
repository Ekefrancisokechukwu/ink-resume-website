"use client";

import React from "react";

type OverlayProps = {
  isOpen?: boolean;
};

export const Overlay = ({ isOpen }: OverlayProps) => {
  React.useEffect(() => {}, [isOpen]);

  return (
    <div className="fixed z-40 w-full h-screen top-0 left-0 bg-black/40 backdrop-blur-[1px]" />
  );
};
