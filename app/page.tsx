import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-50 p-24">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
          Daiki's Lab
        </h1>
        <p className="text-xl text-slate-600 mb-8">
          Next.js と shadcn/ui を使ったモダンな開発環境へようこそ。
        </p>
        <div className="flex gap-4 justify-center">
          {/* ボタンコンポーネントをまだ追加していない場合はエラーが出るので、まずは表示確認 */}
          <button className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-black/80 transition-colors">
            プロジェクトを見る
          </button>
        </div>
      </div>
    </main>
  )
}