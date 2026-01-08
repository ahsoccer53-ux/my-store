'use client'

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function MoshimoScript() {
  const pathname = usePathname();

  useEffect(() => {
    // 1. もしもアフィリエイトの本体（bundle.js）を読み込む
    const script = document.createElement('script');
    script.src = "//dn.msmstatic.com/site/cardlink/bundle.js?20220329";
    script.async = true;
    
    script.onload = () => {
      // 2. 本体が読み込まれたら、記事の中にある「msmaflink(...)」を探して実行する
      if ((window as any).msmaflink) {
        (window as any).msmaflink();
      }
    };

    document.body.appendChild(script);

    // 3. ページ遷移時に古いスクリプトが残らないように掃除
    return () => {
      document.body.removeChild(script);
    };
  }, [pathname]); // ページが変わるたびに実行

  return null; // 画面には何も表示しない（裏方担当）
}