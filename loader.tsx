"use client"

export default function myImageLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
    if(src.startsWith("https://images.pexels.com") || src.startsWith("https://i.ibb.co")) return src
    return `https://localhost:3000/${src}?w=${width}&q=${quality || 75}`;
}
