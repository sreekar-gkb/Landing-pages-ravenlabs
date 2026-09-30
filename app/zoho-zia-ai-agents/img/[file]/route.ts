// Serves this campaign's images as real files (prerendered at build, cached by Vercel's CDN).
import { ASSETS } from '../../_lp/assets';
export const dynamic = 'force-static';
export function generateStaticParams() { return Object.keys(ASSETS).map((file) => ({ file })); }
export async function GET(_req: Request, { params }: { params: { file: string } }) {
  const a = ASSETS[params.file];
  if (!a) return new Response('Not found', { status: 404 });
  return new Response(Buffer.from(a.b64, 'base64'), { headers: { 'Content-Type': a.type, 'Cache-Control': 'public, max-age=31536000, immutable' } });
}
