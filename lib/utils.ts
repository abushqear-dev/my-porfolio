import { PortableTextBlock } from "sanity";

export function estimateReadingTime(
  blocks: PortableTextBlock[] | undefined,
): number {
  if (!blocks || !Array.isArray(blocks)) {
    return 1;
  }

  const text = blocks.reduce((acc, block) => {
    if (block._type === "block" && block.children) {
      const blockText = (block.children as any[])
        .map((child) => child.text)
        .join(" ");
      return acc + " " + blockText;
    }
    return acc;
  }, "");

  const words = text.split(/\s+/).filter(Boolean).length;
  const wordsPerMinute = 200;
  const wordTime = words / wordsPerMinute;

  // Standard estimation: 12 seconds for the first image, 11 for the second, 
  // down to 3 seconds for the 10th and subsequent images.
  const imageCount = blocks.filter(block => block._type === "image").length;
  let imageTime = 0;
  for (let i = 0; i < imageCount; i++) {
    imageTime += Math.max(3, 12 - i) / 60;
  }

  return Math.ceil(wordTime + imageTime);
}
