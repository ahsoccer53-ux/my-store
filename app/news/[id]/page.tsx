import { client } from "@/lib/microcms";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export const revalidate = 0;

// Promiseとしてparamsを受け取る型定義
type Props = {
  params: Promise<{ id: string }>;
};

export default async function NewsDetail({ params }: Props) {
  // 1. 最新のNext.jsの仕様に合わせて params を await する
  const { id } = await params;

  // 2. microCMSからデータを取得
  const post = await client.get({
    endpoint: "saite",
    contentId: id,
  });

  return (
    <div className="bg-white min-h-screen text-slate-900 pb-20">
      <header className="border-b h-16 flex items-center px-4 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <Link href="/" className="flex items-center text-sm font-bold text-blue-600">
          <ChevronLeft className="h-4 w-4" /> BACK
        </Link>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-10">
        {/* 3. カテゴリの表示を安全にする (?. を使い、配列でなくても壊れないようにする) */}
        <p className="text-[10px] font-black text-blue-500 uppercase tracking-[0.2em] mb-4">
          {Array.isArray(post.category) ? post.category[0] : (post.category || "NEWS")}
        </p>
        
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
          {post.title}
        </h1>
        
        {/* 4. 画像の表示を安全にする */}
        {post.image?.url && (
          <div className="mb-10 rounded-lg overflow-hidden shadow-xl">
            <AspectRatio ratio={16 / 9}>
              <img src={post.image.url} alt="" className="object-cover w-full h-full" />
            </AspectRatio>
          </div>
        )}

        {/* 5. 本文を表示 */}
        <div 
          className="prose prose-blue max-w-none font-medium leading-relaxed text-slate-700"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />
      </main>
    </div>
  );
}