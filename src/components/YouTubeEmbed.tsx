type YouTubeEmbedProps = {
  videoId: string;
  title: string;
  className?: string;
};

/** Responsive 16:9 YouTube embed (privacy-enhanced host). */
export default function YouTubeEmbed({ videoId, title, className = "" }: YouTubeEmbedProps) {
  const src = `https://www.youtube-nocookie.com/embed/${videoId}?rel=0`;
  const watchUrl = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <figure className={className}>
      <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black shadow-[0_18px_40px_-22px_rgba(0,0,0,0.35)]">
        <iframe
          src={src}
          title={title}
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          loading="lazy"
        />
      </div>
      <figcaption className="mt-3 text-center text-xs text-white/40">
        <a
          href={watchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink hover:underline"
        >
          Watch on YouTube
        </a>
      </figcaption>
    </figure>
  );
}
