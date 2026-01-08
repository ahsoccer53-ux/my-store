import { client } from "@/lib/microcms";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ChevronLeft, Heart, Share2 } from "lucide-react";
import Script from "next/script";

export const revalidate = 0;

type Props = {
  params: Promise<{ id: string }>;
};

export default async function NewsDetail({ params }: Props) {
  const { id } = await params;

  const post = await client.get({
    endpoint: "saite",
    contentId: id,
  });

  // カテゴリ判定用
  const categoryName = Array.isArray(post.category) 
    ? post.category[0] 
    : (post.category || "NEWS");

  return (
    <div className="bg-[#fffafa] min-h-screen text-rose-400 pb-20 font-sans">
      {/* ヘッダー：トップページとトーンを統一 */}
      <header className="border-b border-pink-100 h-14 md:h-16 flex items-center px-4 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="max-w-3xl mx-auto w-full flex justify-between items-center">
          <Link href="/" className="flex items-center text-[10px] font-black text-pink-400 tracking-widest hover:text-pink-500 transition-colors">
            <ChevronLeft className="h-4 w-4 mr-1" /> BACK TO HOME
          </Link>
          <div className="flex gap-4">
            <Heart className="h-5 w-5 text-pink-300" />
            <Share2 className="h-5 w-5 text-pink-300" />
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        {/* カテゴリバッジ */}
        <Badge className="bg-pink-100 text-pink-400 mb-4 md:mb-6 uppercase text-[9px] tracking-widest px-4 py-1 border-none font-bold rounded-full">
          {categoryName}
        </Badge>
        
        <h1 className="text-2xl md:text-4xl font-bold leading-tight text-rose-500 mb-8">
          {post.title}
        </h1>
        
        {/* メイン画像：角丸を大きくして可愛く */}
        {post.image?.url && (
          <div className="mb-10 rounded-[2.5rem] overflow-hidden shadow-sm border-4 border-white">
            <AspectRatio ratio={16 / 9}>
              <img src={post.image.url} alt="" className="object-cover w-full h-full" />
            </AspectRatio>
          </div>
        )}

        {/* 記事本文：microCMSのHTMLをそのまま表示 */}
        {/* dangerouslySetInnerHTML を使っているので、記事内に貼ったアフィリエイトタグもここで動きます */}
        <div 
          className="prose prose-pink max-w-none font-bold leading-loose text-rose-400/80 
          prose-headings:text-rose-500 prose-a:text-pink-500 prose-img:rounded-3xl prose-strong:text-rose-600"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />

        {/* 記事下の装飾的な区切り */}
        <div className="mt-16 pt-8 border-t border-pink-100 flex flex-col items-center">
          <div className="text-pink-200 text-[10px] font-black tracking-[0.3em] uppercase mb-4">Thank you for reading</div>
          <div className="flex gap-2">
             {[1,2,3].map(i => <div key={i} className="w-2 h-2 rounded-full bg-pink-100" />)}
          </div>
        </div>
      </main>

      {/* もしもアフィリエイトなどの外部スクリプトを安全に実行するためのコンポーネント */}
      <Script 
        src="//dn.msmstatic.com/site/cardlink/bundle.js?20220329" 
        strategy="afterInteractive"
      />
    </div>
  );
}