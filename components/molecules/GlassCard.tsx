interface GlassCardProps {
  title: string;
  content: string;
  buttonColor: string;
  linkTxt: string;
  linkUrl: string;
  iconLetter: string;
  link2Txt?: string;
  link2Url?: string;
}

const GlassCard = ({ title, content, buttonColor, linkTxt, linkUrl, iconLetter, link2Txt, link2Url }: GlassCardProps) => {
  return (
    <article className="group/card relative z-1 isolate w-full max-w-95 rounded-[28px] [transform:perspective(1200px)_rotateX(2deg)_rotateY(-2deg)] transition-transform duration-600 ease-[cubic-bezier(0.34,1.2,0.64,1)] hover:[transform:perspective(1200px)_rotateX(0deg)_rotateY(0deg)_translateY(-4px)] motion-reduce:transition-none motion-reduce:hover:[transform:perspective(1200px)_rotateX(2deg)_rotateY(-2deg)] before:absolute before:-inset-[3px] before:-z-1 before:rounded-[30px] before:blur-[1px] before:opacity-50 before:transition-opacity before:duration-400 before:content-[''] before:[background:linear-gradient(135deg,oklch(0.95 0.015 295 / 0.55)_0%,oklch(0.68_0.12_0/0.4)_30%,oklch(0.72_0.15_290/0.4)_60%,oklch(0.87_0.11_90/0.55)_100%)] hover:before:opacity-85 after:absolute after:-inset-[30px] after:-z-2 after:rounded-[55px] after:blur-[30px] after:pointer-events-none after:content-[''] after:[background:radial-gradient(ellipse,oklch(0.87_0.08_290/0.14)_0%,transparent_65%)]">

        <div aria-hidden="true" className="absolute inset-0 z-1 rounded-[28px] pointer-events-none border border-white/15 [background:linear-gradient(160deg,oklch(1_0_0/0.1)_0%,oklch(1_0_0/0.02)_40%,oklch(1_0_0/0.06)_100%)] [backdrop-filter:blur(24px)_saturate(1.5)_brightness(1.05)] [-webkit-backdrop-filter:blur(24px)_saturate(1.5)_brightness(1.05)] shadow-[inset_0_1px_0_oklch(1_0_0/0.22),inset_0_-1px_0_oklch(0_0_0/0.14),0_30px_60px_-20px_oklch(0_0_0/0.55)]"></div>
        <div aria-hidden="true" className="absolute inset-0 z-2 rounded-[28px] pointer-events-none [background:radial-gradient(ellipse_at_30%_15%,oklch(0.87_0.11_90/0.14)_0%,transparent_55%),radial-gradient(ellipse_at_80%_90%,oklch(0.68_0.12_0/0.1)_0%,transparent_55%)]"></div>

        <div className="relative z-3 px-5.5 pt-5.5 pb-5 text-white/95">

          <header className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div aria-hidden="true" className="relative size-18 mb-3.5">
              <span className="absolute -inset-1.5 rounded-full blur-sm animate-twc17-pulse motion-reduce:animate-none [background:radial-gradient(circle,oklch(0.87_0.11_90/0.4)_0%,transparent_65%)]"></span>
              <div className="relative flex items-center justify-center size-18 rounded-full [background:radial-gradient(circle_at_30%_25%,oklch(1_0_0/0.35)_0%,transparent_50%),linear-gradient(135deg,#f5d97b_0%,#d4a574_60%,#8b5a3c_100%)] shadow-[inset_0_2px_0_oklch(1_0_0/0.5),inset_0_-2px_0_oklch(0.35_0.06_50/0.4),0_8px_20px_-4px_oklch(0.78_0.08_70/0.5),0_0_0_1px_oklch(1_0_0/0.12)]">
                <span className="font-fibonacci text-7xl">{ iconLetter }</span>
              </div>
            </div>
            <h3 className="m-0 mb-2 text-[22px]/[1.2] font-bold tracking-[-0.03em] text-white [background-image:linear-gradient(180deg,#ffffff_0%,oklch(0.87_0.11_90/0.85)_130%)] bg-clip-text text-transparent forced-colors:text-[CanvasText] forced-colors:[-webkit-text-fill-color:CanvasText]">{ title }</h3>
            </div>
          </header>



          <div className="flex flex-wrap items-center gap-1.5 mb-3">
            <span className="inline-flex items-center gap-1 px-2 py-[3px] rounded-full font-twc17-mono text-[9px] font-extrabold tracking-[0.16em] uppercase text-twc17-gilt bg-white/10 border border-white/15">
              <span aria-hidden="true" className="size-[5px] rounded-full bg-twc17-gilt shadow-[0_0_6px_oklch(0.87_0.11_90)] animate-twc17-blink motion-reduce:animate-none"></span>
              LIVE
            </span>
            <span className="inline-flex items-center px-2 py-[3px] rounded-full font-twc17-mono text-[9px] font-extrabold tracking-[0.16em] uppercase text-twc17-gilt/90 bg-twc17-gilt/10 border border-twc17-gilt/25">PREMIUM &middot; v2.6</span>
          </div>


        {/*<p className="m-0 mb-4.5 text-[13px]/[1.55] tracking-[-0.005em] text-white/70">Custom dashboards, predictive alerts, and voice-driven exports. Deploy across your entire stack in under a minute.</p>*/}
        {content}

          {/*<dl className="grid grid-cols-3 gap-1 m-0 mb-4.5 px-1 py-3 rounded-2xl bg-white/4 border border-white/8">
            <div className="flex flex-col items-center gap-0.5">
              <dt className="m-0 font-twc17-mono text-[8.5px] font-bold tracking-[0.14em] uppercase text-white/50">Latency</dt>
              <dd className="m-0 text-sm font-extrabold tracking-[-0.02em] text-twc17-gilt/95 [font-variant-numeric:tabular-nums]">&lt;12ms</dd>
            </div>
            <div className="flex flex-col items-center gap-0.5 border-l border-white/10">
              <dt className="m-0 font-twc17-mono text-[8.5px] font-bold tracking-[0.14em] uppercase text-white/50">Signals</dt>
              <dd className="m-0 text-sm font-extrabold tracking-[-0.02em] text-twc17-gilt/95 [font-variant-numeric:tabular-nums]">2.4M/s</dd>
            </div>
            <div className="flex flex-col items-center gap-0.5 border-l border-white/10">
              <dt className="m-0 font-twc17-mono text-[8.5px] font-bold tracking-[0.14em] uppercase text-white/50">Uptime</dt>
              <dd className="m-0 text-sm font-extrabold tracking-[-0.02em] text-twc17-gilt/95 [font-variant-numeric:tabular-nums]">99.99</dd>
            </div>
          </dl>*/}

          <div className="grid grid-cols-[1fr_auto] gap-1.5 mb-4">
          <a href={ linkUrl } className="group/cta inline-flex items-center justify-center gap-1.5 min-h-11 px-4 rounded-2xl no-underline text-[13px] font-bold tracking-[-0.01em] text-twc17-ctaink [background:linear-gradient(180deg,#fef3c7_0%,#f5d97b_50%,#d4a574_100%)] shadow-[inset_0_1px_0_oklch(1_0_0/0.6),inset_0_-1px_0_oklch(0.35_0.06_50/0.4),0_4px_12px_oklch(0.87_0.11_90/0.4),0_0_0_1px_oklch(0.87_0.11_90/0.3)] transition-[transform,box-shadow] duration-200 hover:-translate-y-px hover:shadow-[inset_0_1px_0_oklch(1_0_0/0.7),inset_0_-1px_0_oklch(0.35_0.06_50/0.4),0_6px_18px_oklch(0.87_0.11_90/0.6),0_0_0_1px_oklch(0.87_0.11_90/0.5)] focus-visible:outline-2 focus-visible:outline-twc17-gilt focus-visible:outline-offset-2 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
            <span>{ linkTxt }</span>
              <span aria-hidden="true" className="inline-flex items-center transition-transform duration-200 group-hover/cta:translate-x-[3px] motion-reduce:transition-none motion-reduce:group-hover/cta:translate-x-0">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </span>
            </a>
          { link2Txt ? <a
            href={ link2Url }
            className="inline-flex
              items-center
              justify-center
              min-h-11
              px-3.5
              rounded-2xl
              no-underline
              text-[13px]
              font-semibold
              tracking-[-0.01em]
              text-white
              bg-white/8
              border
              border-white/15
              transition-[background]
              duration-200
              hover:bg-white/15
              focus-visible:outline-2
              focus-visible:outline-twc17-gilt
              focus-visible:outline-offset-2">
            { link2Txt }
          </a> : null}
          </div>

          <footer className="flex items-center gap-2 pt-3.5 border-t border-white/8">

          </footer>
        </div>
      </article>
  );
};

export default GlassCard;
