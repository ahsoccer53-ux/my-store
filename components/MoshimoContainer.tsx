'use client'

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Script from "next/script";

export default function MoshimoContainer({ html }: { html: string }) {
  const divRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!divRef.current) return;

    // 1. スクリプトの再実行（これは必須）
    const scripts = divRef.current.querySelectorAll('script');
    scripts.forEach((oldScript) => {
      if (oldScript.getAttribute('data-executed')) return;
      const newScript = document.createElement('script');
      newScript.textContent = oldScript.textContent;
      oldScript.setAttribute('data-executed', 'true');
      document.body.appendChild(newScript);
    });

    // 2. 最速でカード化を試みる
    const trigger = () => {
      if (typeof (window as any).msmaflink === 'function') {
        (window as any).msmaflink();
        return true;
      }
      return false;
    };

    // 3. 複数のタイミングでしつこく実行する（0ms, 100ms, 300ms, 600ms...）
    const delayTimes = [0, 100, 300, 600, 1000, 2000];
    const timers = delayTimes.map(ms => setTimeout(trigger, ms));

    return () => timers.forEach(t => clearTimeout(t));
  }, [html, pathname]);

  return (
    <>
      <div 
        ref={divRef}
        // 真っ白な枠が目立たないよう、カードが出るまで少し高さを抑えるか、透明にしておくと綺麗です
        className="mt-10 p-4 bg-white rounded-[2rem] border-2 border-pink-50 shadow-sm overflow-hidden min-h-[150px]"
        suppressHydrationWarning={true} 
        dangerouslySetInnerHTML={{ __html: html }} 
      />

      <Script
        src="//dn.msmstatic.com/site/cardlink/bundle.js?20220329"
        strategy="afterInteractive" // これを afterInteractive に戻して安定させます
      />
    </>
  );
}