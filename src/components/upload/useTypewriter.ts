import { useEffect, useState } from "react";

/**
 * Creates a typewriter effect
 * @param text
 * @returns {(string|(function(): void))[]}
 */
export function useTypewriter(text: string) {
  const [animated, setAnimated] = useState("");

  function advanceAnimation() {
    setAnimated((prev) => prev.concat(text.at(prev.length) as any));
  }

  useEffect(() => {
    if (text.length <= animated.length) return;
    setTimeout(() => advanceAnimation(), Math.floor(Math.random() * 22) - 2);
  }, [animated, text]);

  return [animated, () => setAnimated("")];
}
