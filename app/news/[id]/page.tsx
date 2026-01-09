import { client } from "@/lib/microcms";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ChevronLeft, Heart, Share2 } from "lucide-react";
import MoshimoScript from "@/components/MoshimoScript";

export const revalidate = 0;

export default async function NewsDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const post = await client.get({
    endpoint: "saite",
    contentId: id,
  });

  const categoryName = Array.isArray(post.category) 
    ? post.category[0] 
    : (post.category || "NEWS");

  return (
    <div className="bg-[#fffafa] min-h-screen text-rose-400 pb-20 font-sans">
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
        <Badge className="bg-pink-100 text-pink-400 mb-6 uppercase text-[9px] tracking-widest px-4 py-1 rounded-full border-none font-bold">
          {categoryName}
        </Badge>
        
        <h1 className="text-2xl md:text-4xl font-bold leading-tight text-rose-500 mb-8">
          {post.title}
        </h1>
        
        {post.image?.url && (
          <div className="mb-10 rounded-[2.5rem] overflow-hidden shadow-sm border-4 border-white">
            <AspectRatio ratio={16 / 9}>
              <img src={post.image.url} alt="" className="object-cover w-full h-full" />
            </AspectRatio>
          </div>
        )}

        {/* 1. 通常の記事本文 */}
        <div 
          className="prose prose-pink max-w-none font-bold leading-loose text-rose-400/80 mb-12"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />

        {/* 2. 【重要】ここを修正しました！ */}
        {post.moshimo_id && (
          <div className="mt-10 p-4 bg-white rounded-[2rem] border-2 border-pink-50 shadow-sm overflow-hidden">
            {/* ↓ dangerouslySetInnerHTML を使うことで、コードを「実行」させます */}
            <div dangerouslySetInnerHTML={{ __html: post.moshimo_id }} />
          </div>
        )}
      </main>

      <MoshimoScript />
    </div>
  );
}