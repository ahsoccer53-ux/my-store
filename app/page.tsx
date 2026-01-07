import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Badge } from "@/components/ui/badge"
import { Search, Menu, ChevronRight } from "lucide-react"

export default function Home() {
  const news = [
    { id: 1, title: "【新作】2026年春のパステルコレクションが登場", category: "ニュース", date: "2時間前", img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45?q=80&w=1000" },
    { id: 2, title: "人気ブランド「ふわふわベイビー」期間限定ショップ開催", category: "イベント", date: "5時間前", img: "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?q=80&w=1000" },
    { id: 3, title: "SNSで話題！オーガニックコットンの肌着セット", category: "ファッション", date: "昨日", img: "https://images.unsplash.com/photo-1544126592-807daa215a75?q=80&w=1000" },
    { id: 4, title: "出産祝いに選びたい、北欧デザインのベビーギフト5選", category: "ライフスタイル", date: "2日前", img: "https://images.unsplash.com/photo-1546015720-b8b30df5aa27?q=80&w=1000" },
  ]

  return (
    <div className="bg-white min-h-screen font-sans text-slate-900">
      {/* ナビゲーション */}
      <header className="border-b sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Menu className="h-6 w-6 cursor-pointer" />
            <h1 className="text-2xl font-black tracking-tighter text-blue-500">BabyBaby</h1>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-bold uppercase tracking-widest">
            <span className="cursor-pointer border-b-2 border-blue-500">Fashion</span>
            <span className="cursor-pointer hover:text-blue-500 transition-colors">Lifestyle</span>
            <span className="cursor-pointer hover:text-blue-500 transition-colors">Beauty</span>
            <span className="cursor-pointer hover:text-blue-500 transition-colors">Event</span>
          </nav>
          <Search className="h-6 w-6 cursor-pointer" />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* メインセクション（Fashion Press風の大きなニュース） */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 relative group cursor-pointer overflow-hidden rounded-sm">
            <AspectRatio ratio={16 / 9}>
              <img src={news[0].img} alt="Main news" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
            </AspectRatio>
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
              <Badge className="bg-blue-500 mb-3 uppercase text-[10px] tracking-widest">{news[0].category}</Badge>
              <h2 className="text-3xl font-bold leading-tight">{news[0].title}</h2>
              <p className="mt-2 text-sm opacity-80">{news[0].date}</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] border-l-4 border-black pl-3 py-1">Top Stories</h3>
            {news.slice(1).map((item) => (
              <div key={item.id} className="flex gap-4 group cursor-pointer">
                <div className="w-24 shrink-0">
                  <AspectRatio ratio={1 / 1}>
                    <img src={item.img} className="object-cover rounded-sm" />
                  </AspectRatio>
                </div>
                <div>
                  <h4 className="text-sm font-bold leading-snug group-hover:text-blue-600 transition-colors">{item.title}</h4>
                  <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-tighter">{item.category} / {item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ニュースカテゴリの切り替え */}
        <div className="border-t pt-10">
          <Tabs defaultValue="latest" className="w-full">
            <div className="flex items-center justify-between mb-8 overflow-x-auto">
              <TabsList className="bg-transparent h-auto p-0 gap-8">
                <TabsTrigger value="latest" className="p-0 text-xl font-bold data-[state=active]:text-blue-500 data-[state=active]:shadow-none border-none">最新ニュース</TabsTrigger>
                <TabsTrigger value="popular" className="p-0 text-xl font-bold data-[state=active]:text-blue-500 data-[state=active]:shadow-none border-none">人気記事</TabsTrigger>
              </TabsList>
              <Button variant="ghost" className="text-xs font-bold uppercase tracking-widest">View All <ChevronRight className="ml-1 h-3 w-3" /></Button>
            </div>

            {/* 記事グリッド */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10">
              {[...news, ...news].map((item, idx) => (
                <div key={idx} className="group cursor-pointer">
                  <AspectRatio ratio={3 / 4} className="mb-3 overflow-hidden rounded-sm">
                    <img src={item.img} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                  </AspectRatio>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{item.category}</span>
                  <h5 className="text-sm font-bold mt-1 leading-snug group-hover:underline underline-offset-4">{item.title}</h5>
                </div>
              ))}
            </div>
          </Tabs>
        </div>
      </main>

      <footer className="mt-20 py-12 border-t bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-2xl font-black tracking-tighter text-blue-500 mb-6">BabyBaby</p>
          <div className="flex justify-center gap-6 text-[10px] font-bold uppercase tracking-widest text-slate-500">
            <span>About</span>
            <span>Privacy Policy</span>
            <span>Contact</span>
          </div>
          <p className="mt-8 text-[10px] text-slate-400">© 2026 BabyBaby (ベビベビ) - Baby Clothing News & Trends.</p>
        </div>
      </footer>
    </div>
  )
}