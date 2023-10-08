"use client";

import { Crisp } from "crisp-sdk-web";

import React, { useEffect } from "react";

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("426d867d-f225-40a0-83bb-fda420ca6b8b");
  }, []);

  return null;
};

export default CrispChat;
