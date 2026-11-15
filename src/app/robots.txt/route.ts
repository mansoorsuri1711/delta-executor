import { SITE_ORIGIN } from "@/lib/siteConfig";

export const dynamic = "force-static";

export function GET() {
  const body = `# deltaexecutor.com.ph — allow search indexing
User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/

# Block common AI training crawlers (search bots still allowed above)
User-agent: GPTBot
Disallow: /

User-agent: Google-Extended
Disallow: /

User-agent: Amazonbot
Disallow: /

User-agent: Anthropic-AI
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: Bytespider
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: Applebot-Extended
Disallow: /

User-agent: meta-externalagent
Disallow: /

Sitemap: ${SITE_ORIGIN}/sitemap-index.xml
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=300, s-maxage=300",
    },
  });
}
