// 1. 文の最初に microcms の接続を読み込む
import { client } from "@/lib/microcms"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Badge } from "@/components/ui/badge"
import { Search, Menu, ChevronRight, Heart } from "lucide-react"
// ★ここに追加！これだけで「常に最新」を見にいくようになります
export const revalidate = 0;
// microCMSから届くデータの形を定義
type NewsItem = {
  id: string
  title: string
  category: string[]
  date: string
  image: {
    url: string
  }
}

// 2. 関数を async (非同期) に変更する
export default async function Home() {
  
  // 3. 手書きの news = [...] を消して、microCMSから取得する命令に変える
  const data = await client.get({ endpoint: "saite" })
  const news: NewsItem[] = data.contents

  return (
    <div className="bg-white min-h-screen font-sans text-slate-900 overflow-x-hidden">
      {/* ナビゲーション */}
      <header className="border-b sticky top-0 bg-white/95 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-4 h-14 md:h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 md:gap-6">
            <Menu className="h-5 w-5 cursor-pointer text-slate-600" />
            <h1 className="text-xl md:text-2xl font-black tracking-tighter text-blue-600">BabyBaby</h1>
          </div>
          <nav className="hidden lg:flex gap-8 text-[11px] font-black uppercase tracking-[0.2em] text-slate-500">
            <span className="cursor-pointer text-blue-600 border-b-2 border-blue-600 pb-1">Fashion</span>
            <span className="cursor-pointer hover:text-blue-600 transition-colors">Lifestyle</span>
            <span className="cursor-pointer hover:text-blue-600 transition-colors">Gift</span>
          </nav>
          <div className="flex items-center gap-3 md:gap-4">
             <Heart className="h-5 w-5 text-slate-400" />
             <Search className="h-5 w-5 text-slate-600" />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 md:py-8">
        {/* 記事があるかチェック */}
        {news.length > 0 ? (
          <>
            {/* メインセクション */}
            <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8 md:gap-10 mb-12 md:mb-16">
              <div className="lg:col-span-2 relative group cursor-pointer overflow-hidden rounded-md shadow-lg">
                <AspectRatio ratio={16 / 9}>
                  {/* imgタグのsrcをmicroCMSのURLに変更 */}
                  <img src={news[0].image.url} alt={news[0].title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-1000" />
                </AspectRatio>
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-10 bg-gradient-to-t from-black/90 via-black/40 to-transparent text-white">
                  <Badge className="bg-blue-600 mb-2 md:mb-4 uppercase text-[9px] md:text-[10px] tracking-widest px-2 py-0.5 border-none font-bold">
                    {news[0].category[0] || "NEWS"}
                  </Badge>
                  <h2 className="text-xl md:text-4xl font-bold leading-tight tracking-tight drop-shadow-md">{news[0].title}</h2>
                  <p className="mt-2 md:mt-3 text-[10px] md:text-sm font-medium opacity-80">
                    {new Date(news[0].date).toLocaleDateString()}
                  </p>
                </div>
              </div>
              
              <div className="space-y-6 md:space-y-8">
                <h3 className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] border-b border-black pb-2">Top Stories</h3>
                {news.slice(1, 4).map((item) => (
                  <div key={item.id} className="flex gap-4 md:gap-5 group cursor-pointer border-b border-slate-50 pb-4">
                    <div className="w-24 md:w-28 shrink-0 overflow-hidden rounded-sm">
                      <AspectRatio ratio={1 / 1}>
                        <img src={item.image.url} className="object-cover group-hover:scale-110 transition-transform duration-500" />
                      </AspectRatio>
                    </div>
                    <div className="flex flex-col justify-center">
                      <h4 className="text-sm md:text-[15px] font-bold leading-snug group-hover:text-blue-600 transition-colors">{item.title}</h4>
                      <p className="text-[9px] md:text-[10px] text-slate-400 mt-1 md:mt-2 font-bold uppercase tracking-widest">
                        {item.category[0]} ・ {new Date(item.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ニュースリスト */}
            <div className="pt-6 md:pt-10">
              <Tabs defaultValue="latest" className="w-full">
                <div className="flex items-center justify-between mb-6 md:mb-10 border-b-2 border-slate-100">
                  <TabsList className="bg-transparent h-auto p-0 gap-5 md:gap-10">
                    <TabsTrigger value="latest" className="p-0 pb-3 text-lg md:text-2xl font-black data-[state=active]:text-blue-600 data-[state=active]:border-b-2 border-blue-600 rounded-none shadow-none border-none">LATEST</TabsTrigger>
                  </TabsList>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-8 md:gap-y-12">
                  {news.map((item) => (
                    <div key={item.id} className="group cursor-pointer">
                      <AspectRatio ratio={3 / 4} className="mb-3 md:mb-4 overflow-hidden rounded-sm shadow-md">
                        <img src={item.image.url} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" />
                      </AspectRatio>
                      <span className="text-[8px] md:text-[10px] font-black text-blue-500 uppercase tracking-widest">{item.category[0]}</span>
                      <h5 className="text-xs md:text-[15px] font-bold mt-1 md:mt-2 leading-snug group-hover:text-blue-600">{item.title}</h5>
                    </div>
                  ))}
                </div>
              </Tabs>
            </div>
          </>
        ) : (
          <div className="text-center py-20 text-slate-400 font-bold">
            microCMSで記事を投稿するとここに表示されます
          </div>
        )}
      </main>

      <footer className="mt-20 py-12 md:py-20 border-t bg-slate-900 text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-2xl md:text-4xl font-black tracking-tighter text-blue-500 mb-6 md:mb-8">BabyBaby</p>
          <p className="text-[9px] md:text-[10px] text-slate-500 font-medium tracking-widest leading-loose">
            © 2026 BabyBaby ・ ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </div>
  )
}