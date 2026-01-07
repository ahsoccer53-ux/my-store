import { client } from "@/lib/microcms"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Badge } from "@/components/ui/badge"
import { Search, Menu, ChevronRight, Heart } from "lucide-react"
import Link from "next/link"

export const revalidate = 0;

export default async function Home() {
  const data = await client.get({ endpoint: "saite" })
  const news = data.contents || []
  const topNews = news.length > 0 ? news[0] : null;

  return (
    // 全体のテキストカラーを濃いピンク（rose-400）に固定
    <div className="bg-[#fffafa] min-h-screen font-sans text-rose-400 overflow-x-hidden">
      <header className="border-b border-pink-100 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-4 h-14 md:h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 md:gap-6">
            <Menu className="h-5 w-5 cursor-pointer text-pink-300" />
            <h1 className="text-xl md:text-2xl font-black tracking-tighter text-pink-500">BabyBaby</h1>
          </div>
          <nav className="hidden lg:flex gap-8 text-[11px] font-bold uppercase tracking-[0.2em]">
            <span className="cursor-pointer text-pink-500 border-b-2 border-pink-200 pb-1">Fashion</span>
            <span className="cursor-pointer text-pink-300 hover:text-pink-500 transition-colors">Lifestyle</span>
            <span className="cursor-pointer text-pink-300 hover:text-pink-500 transition-colors">Gift</span>
          </nav>
          <div className="flex items-center gap-3 md:gap-4">
             <Heart className="h-5 w-5 text-pink-300 fill-pink-100" />
             <Search className="h-5 w-5 text-pink-200" />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 md:py-8">
        {topNews ? (
          <>
            <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8 md:gap-10 mb-12 md:mb-16">
              <Link 
                href={`/news/${topNews.id}`} 
                className="lg:col-span-2 relative group cursor-pointer overflow-hidden rounded-[2.5rem] shadow-sm block border-4 border-white"
              >
                <AspectRatio ratio={16 / 9}>
                  <img 
                    src={topNews.image?.url || ""} 
                    alt={topNews.title || ""} 
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-1000" 
                  />
                </AspectRatio>
                {/* 影を完全になくし、白〜淡いピンクのグラデーションに */}
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8 bg-gradient-to-t from-white/95 via-white/80 to-transparent">
                  <Badge className="bg-pink-100 text-pink-400 mb-2 md:mb-3 uppercase text-[9px] md:text-[10px] tracking-widest px-3 py-1 border-none font-bold rounded-full">
                    {Array.isArray(topNews.category) ? topNews.category[0] : topNews.category || "NEWS"}
                  </Badge>
                  {/* メインタイトルを濃いピンクに変更 */}
                  <h2 className="text-xl md:text-3xl font-bold leading-tight text-rose-500">
                    {topNews.title}
                  </h2>
                </div>
              </Link>
              
              <div className="space-y-6 md:space-y-8">
                <h3 className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-pink-200 border-b border-pink-100 pb-2">New Stories</h3>
                {news.slice(1, 4).map((item: any) => (
                  <Link 
                    href={`/news/${item.id}`} 
                    key={item.id} 
                    className="flex gap-4 md:gap-5 group cursor-pointer pb-2 block"
                  >
                    <div className="w-24 md:w-28 shrink-0 overflow-hidden rounded-2xl border-2 border-white shadow-sm">
                      <AspectRatio ratio={1 / 1}>
                        <img src={item.image?.url || ""} className="object-cover group-hover:scale-110 transition-transform duration-500" />
                      </AspectRatio>
                    </div>
                    <div className="flex flex-col justify-center">
                      {/* 横の記事リストのタイトルをピンクに */}
                      <h4 className="text-sm md:text-[15px] font-bold leading-snug text-rose-400 group-hover:text-pink-500 transition-colors">{item.title}</h4>
                      <p className="text-[9px] text-pink-200 mt-1 font-bold uppercase tracking-widest">
                        {Array.isArray(item.category) ? item.category[0] : item.category || "NEWS"}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-6">
              <div className="flex items-center justify-center mb-12">
                <div className="h-[2px] bg-pink-50 flex-grow max-w-[50px]"></div>
                <h2 className="px-6 text-pink-300 font-black tracking-[0.3em] text-sm">LATEST ITEMS</h2>
                <div className="h-[2px] bg-pink-50 flex-grow max-w-[50px]"></div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
                {news.map((item: any) => (
                  <Link 
                    href={`/news/${item.id}`} 
                    key={item.id} 
                    className="group cursor-pointer block text-center"
                  >
                    <AspectRatio ratio={1 / 1} className="mb-4 overflow-hidden rounded-[3rem] border-4 border-white shadow-md shadow-pink-100/50">
                      <img src={item.image?.url || ""} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" />
                    </AspectRatio>
                    <span className="text-[9px] font-bold text-pink-200 uppercase tracking-[0.15em]">
                      {Array.isArray(item.category) ? item.category[0] : item.category || "NEWS"}
                    </span>
                    {/* 一覧の各タイトルをピンクに */}
                    <h5 className="text-xs md:text-sm font-bold mt-2 text-rose-400 group-hover:text-pink-500">{item.title}</h5>
                  </Link>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-20 text-pink-100 font-bold italic">
            Fetching baby news...
          </div>
        )}
      </main>

      <footer className="mt-20 py-20 bg-white text-center rounded-t-[3rem] border-t border-pink-50">
        <p className="text-2xl font-black tracking-tighter text-pink-200 mb-6 italic">BabyBaby</p>
        <p className="text-[10px] text-pink-300 font-bold tracking-widest">
          © 2026 BabyBaby ・ SOFT & CUTE MAGAZINE
        </p>
      </footer>
    </div>
  )
}