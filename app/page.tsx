import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cookie, Coffee, Utensils, Instagram } from "lucide-react"

export default function Home() {
  const products = [
    { name: "手作りチョコチップクッキー", price: "¥250", icon: <Cookie className="h-8 w-8 text-amber-600" />, tag: "人気" },
    { name: "とろけるカスタードプリン", price: "¥380", icon: <Utensils className="h-8 w-8 text-yellow-500" />, tag: "新作" },
    { name: "濃厚ベイクドチーズケーキ", price: "¥450", icon: <Coffee className="h-8 w-8 text-orange-400" />, tag: "おすすめ" },
  ]

  return (
    <main className="min-h-screen bg-orange-50/50 text-stone-800">
      {/* ヘッダー・ヒーローセクション */}
      <section className="py-24 px-6 text-center bg-[url('https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=2000')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]"></div>
        <div className="relative">
          <Badge className="bg-orange-600 mb-4 px-4 py-1">お菓子工房 Daiki</Badge>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-stone-900 mb-6">
            小さな幸せを、<br />焼き立ての香りと共に。
          </h1>
          <p className="text-lg text-stone-600 max-w-xl mx-auto mb-10 leading-relaxed">
            厳選した素材を使い、一つひとつ丁寧に焼き上げました。<br />
            今日のおやつに、大切な人への贈り物に。
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-8 py-6 text-lg">
              メニューを見る
            </Button>
          </div>
        </div>
      </section>

      {/* メニューセクション */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 font-serif">Today's Sweets</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((item) => (
            <Card key={item.name} className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white/80 overflow-hidden">
              <div className="h-48 bg-orange-100 flex items-center justify-center border-b border-orange-50">
                {item.icon}
              </div>
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <Badge variant="outline" className="text-orange-600 border-orange-200">{item.tag}</Badge>
                  <span className="font-bold text-orange-700">{item.price}</span>
                </div>
                <CardTitle className="text-xl font-serif">{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-stone-500">
                  こだわりの素材本来の味を活かし、甘さ控えめに仕上げました。
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full text-orange-600 hover:text-orange-700 hover:bg-orange-50">
                  詳細を見る
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* フッター */}
      <footer className="py-12 bg-stone-900 text-stone-400 text-center px-6">
        <div className="flex justify-center gap-6 mb-6 text-white">
          <Instagram className="cursor-pointer hover:text-orange-400" />
          <Cookie className="cursor-pointer hover:text-orange-400" />
        </div>
        <p className="mb-2 italic font-serif">お菓子工房 Daiki</p>
        <p className="text-xs">〒000-0000 東京都〇〇区△△町 1-2-3</p>
        <p className="text-xs mt-4 opacity-50">© 2026 Daiki's Sweets Lab. All Rights Reserved.</p>
      </footer>
    </main>
  )
}