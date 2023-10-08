"use client";

import React, { useEffect, useState } from "react";
import ProModel from "./pro-model";

const ModelProvider = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <ProModel />
    </>
  );
};

export default ModelProvider;
