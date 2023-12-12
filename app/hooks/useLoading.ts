"use client";
import { useState, useEffect } from "react";

export default function useLoading(initialDelay = 0) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setInterval(() => {
      setIsLoading(false);
    }, initialDelay);
    return () => clearTimeout(timer);
  }, []);
  return isLoading;
}
