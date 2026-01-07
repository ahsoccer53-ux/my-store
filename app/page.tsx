import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Badge } from "@/components/ui/badge"
import { Search, Menu, ChevronRight, Heart } from "lucide-react"

export default function Home() {
  const news = [
    { id: 1, title: "【新作】2026年春の「布団ちゃん」コラボが登場！", category: "HOT NEWS", date: "たった今", img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45?q=80&w=1000" },
    { id: 2, title: "人気ブランド「ふわふわベイビー」期間限定ショップ開催中", category: "EVENT", date: "5時間前", img: "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?q=80&w=1000" },
    { id: 3, title: "SNSで話題！オーガニックコットンの究極肌着セット", category: "FASHION", date: "昨日", img: "https://images.unsplash.com/photo-1544126592-807daa215a75?q=80&w=1000" },
    { id: 4, title: "出産祝いに選びたい、北欧デザインのギフトセレクト", category: "LIFESTYLE", date: "2日前", img: "https://images.unsplash.com/photo-1546015720-b8b30df5aa27?q=80&w=1000" },
  ]

  return (
    <div className="bg-white min-h-screen font-sans text-slate-900">
      {/* ナビゲーション */}
      <header className="border-b sticky top-0 bg-white/90 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Menu className="h-6 w-6 cursor-pointer text-slate-600" />
            <div className="flex flex-col">
              <h1 className="text-2xl font-black tracking-tighter text-blue-600 leading-none">BabyBaby</h1>
              <span className="text-[9px] font-bold text-slate-400 tracking-widest mt-1">FOR NEXT GENERATION</span>
            </div>
          </div>
          <nav className="hidden md:flex gap-8 text-[11px] font-black uppercase tracking-[0.2em] text-slate-500">
            <span className="cursor-pointer text-blue-600 border-b-2 border-blue-600 pb-1">Fashion</span>
            <span className="cursor-pointer hover:text-blue-600 transition-colors">Lifestyle</span>
            <span className="cursor-pointer hover:text-blue-600 transition-colors">Gift</span>
            <span className="cursor-pointer hover:text-blue-600 transition-colors">Shop</span>
          </nav>
          <div className="flex items-center gap-4">
             <Heart className="h-5 w-5 text-slate-400 cursor-pointer hover:text-red-400" />
             <Search className="h-6 w-6 cursor-pointer text-slate-600" />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* メインセクション */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
          <div className="lg:col-span-2 relative group cursor-pointer overflow-hidden rounded-md shadow-xl">
            <AspectRatio ratio={16 / 9}>
              <img src={news[0].img} alt="Main" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-1000" />
            </AspectRatio>
            <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-black/90 via-black/40 to-transparent text-white">
              <Badge className="bg-blue-600 mb-4 uppercase text-[10px] tracking-[0.2em] px-3 py-1 border-none font-bold italic">{news[0].category}</Badge>
              <h2 className="text-4xl font-bold leading-tight tracking-tight drop-shadow-lg">{news[0].title}</h2>
              <p className="mt-3 text-sm font-medium opacity-80 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-white/50"></span> {news[0].date}
              </p>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-center justify-between border-b border-black pb-2">
              <h3 className="text-sm font-black uppercase tracking-[0.3em]">Top Stories</h3>
              <ChevronRight className="h-4 w-4" />
            </div>
            {news.slice(1).map((item) => (
              <div key={item.id} className="flex gap-5 group cursor-pointer border-b border-slate-100 pb-4">
                <div className="w-28 shrink-0 overflow-hidden rounded-sm shadow-sm">
                  <AspectRatio ratio={1 / 1}>
                    <img src={item.img} className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  </AspectRatio>
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="text-[15px] font-bold leading-snug group-hover:text-blue-600 transition-colors">{item.title}</h4>
                  <p className="text-[10px] text-slate-400 mt-2 font-bold uppercase tracking-widest">{item.category} ・ {item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ニュースリスト */}
        <div className="pt-10">
          <Tabs defaultValue="latest" className="w-full">
            <div className="flex items-center justify-between mb-12 border-b-2 border-slate-100">
              <TabsList className="bg-transparent h-auto p-0 gap-10">
                <TabsTrigger value="latest" className="p-0 pb-4 text-2xl font-black data-[state=active]:text-blue-600 data-[state=active]:border-b-2 border-blue-600 rounded-none shadow-none border-none">LATEST</TabsTrigger>
                <TabsTrigger value="popular" className="p-0 pb-4 text-2xl font-black data-[state=active]:text-blue-600 data-[state=active]:border-b-2 border-blue-600 rounded-none shadow-none border-none">RANKING</TabsTrigger>
              </TabsList>
              <Button variant="ghost" className="text-xs font-black uppercase tracking-[0.2em] hover:bg-transparent hover:text-blue-600">Explore All <ChevronRight className="ml-1 h-3 w-3" /></Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
              {[...news, ...news].map((item, idx) => (
                <div key={idx} className="group cursor-pointer">
                  <AspectRatio ratio={3 / 4} className="mb-4 overflow-hidden rounded-sm shadow-md">
                    <img src={item.img} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" />
                  </AspectRatio>
                  <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest">{item.category}</span>
                  <h5 className="text-[15px] font-bold mt-2 leading-snug group-hover:underline underline-offset-8 decoration-2 decoration-blue-200">{item.title}</h5>
                </div>
              ))}
            </div>
          </Tabs>
        </div>
      </main>

      <footer className="mt-32 py-20 border-t bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-4xl font-black tracking-tighter text-blue-500 mb-8">BabyBaby</p>
          <div className="flex justify-center gap-10 text-[11px] font-bold uppercase tracking-[0.3em] mb-12 text-slate-400">
            <span className="hover:text-white cursor-pointer transition-colors">About</span>
            <span className="hover:text-white cursor-pointer transition-colors">Privacy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Contact</span>
          </div>
          <p className="text-[10px] text-slate-500 font-medium tracking-widest leading-loose">
            © 2026 BabyBaby (ベビベビ) <br className="md:hidden" /> ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </div>
  )
}