import { Button } from "@/components/ui/button"
import { Rocket, Coffee, Github } from "lucide-react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white p-6">
      <div className="max-w-2xl text-center space-y-8">
        <div className="inline-block p-3 bg-blue-100 rounded-full text-blue-600 mb-4">
          <Rocket size={40} />
        </div>
        <h1 className="text-6xl font-black text-slate-900 tracking-tighter">
          Aizawa's <span className="text-blue-600">Lab</span>
        </h1>
        <p className="text-xl text-slate-500 max-w-lg mx-auto leading-relaxed">
          世界へようこそ。ここは私の新しい挑戦が始まる場所です。
          最新の技術スタックを使って、最高の体験を構築します。
        </p>
        <div className="flex gap-4 justify-center pt-4">
          <Button size="lg" className="rounded-full px-8">
            <Coffee className="mr-2 h-4 w-4" /> プロジェクトを見る
          </Button>
          <Button variant="outline" size="lg" className="rounded-full px-8">
            <Github className="mr-2 h-4 w-4" /> GitHub
          </Button>
        </div>
      </div>
    </main>
  )
}