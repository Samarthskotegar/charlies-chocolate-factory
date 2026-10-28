const bubble = (top, left, size, delay) => ({ top, left, size, delay })

function Gobstopper() {
  return (
    <div className="relative h-40 w-40">
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            'conic-gradient(from 25deg, #5d2350, #d9a441 18%, #2f6f6a 34%, #a83a5c 52%, #7a4fa0 70%, #d9a441 86%, #5d2350)',
          boxShadow:
            'inset 0 -20px 40px rgba(0,0,0,.7), inset 0 14px 30px rgba(255,255,255,.28), 0 30px 44px -24px rgba(0,0,0,.95)',
        }}
      />
      <div
        className="absolute inset-[16%] rounded-full opacity-70"
        style={{
          background:
            'conic-gradient(from 130deg, rgba(255,255,255,.6), transparent 24%, rgba(0,0,0,.28) 56%, rgba(255,255,255,.4))',
          filter: 'blur(1px)',
        }}
      />
      <div className="absolute left-[22%] top-[13%] h-7 w-12 rounded-full bg-white/55 blur-[7px]" />
      <div className="absolute bottom-[14%] right-[16%] h-9 w-9 rounded-full bg-white/20 blur-md" />
    </div>
  )
}

function ChocolateBar() {
  return (
    <div className="relative h-44 w-[90px] -rotate-6">
      <div
        className="absolute inset-0 overflow-hidden rounded-[3px]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, rgba(0,0,0,.55) 0 2px, transparent 2px 25%), repeating-linear-gradient(0deg, rgba(255,255,255,.05) 0 1px, transparent 1px 12.5%), radial-gradient(130% 100% at 30% 0%, #54291a, #200f08 70%)',
          boxShadow:
            'inset 0 0 44px rgba(0,0,0,.9), 0 28px 44px -24px rgba(0,0,0,.95)',
        }}
      />
      <div
        className="absolute inset-y-0 left-0 w-[58%]"
        style={{
          background:
            'linear-gradient(115deg,#8a6a20,#f6e7ad 36%,#c9a43a 62%,#e8c86a 82%,#8a6a20)',
          clipPath:
            'polygon(0 0,100% 0,72% 20%,100% 38%,70% 56%,100% 74%,68% 90%,100% 100%,0 100%)',
          boxShadow: 'inset -10px 0 24px rgba(0,0,0,.35)',
        }}
      />
      <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white/15 to-transparent" />
    </div>
  )
}

function HairToffee() {
  const strands = [-32, -18, -4, 10, 24, 38]
  return (
    <div className="relative h-44 w-44">
      {strands.map((rotation, index) => (
        <span
          key={rotation}
          className="absolute left-1/2 top-1/2 h-[142px] w-[22px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            rotate: `${rotation}deg`,
            background:
              'linear-gradient(90deg,#6d370e,#d99b4d 42%,#f8ddab 54%,#b06a1f 78%,#5c2d0c)',
            boxShadow:
              'inset 0 0 12px rgba(0,0,0,.35), 0 16px 26px -18px rgba(0,0,0,.9)',
            opacity: 0.95 - index * 0.05,
          }}
        />
      ))}
    </div>
  )
}

function FizzyBottle() {
  const bubbles = [bubble('58%', '24%', 6, 0), bubble('72%', '62%', 5, 1), bubble('44%', '52%', 4, 2), bubble('82%', '38%', 7, 3)]
  return (
    <div className="relative h-44 w-24">
      <div className="absolute left-1/2 top-0 h-9 w-7 -translate-x-1/2 border border-white/25 bg-white/10" />
      <div className="absolute left-1/2 top-1 h-3 w-8 -translate-x-1/2 rounded-[2px] bg-gold/70" />
      <div
        className="absolute inset-x-0 bottom-0 top-8 overflow-hidden rounded-[12px_12px_30px_30px] border border-white/25"
        style={{
          background:
            'linear-gradient(180deg, rgba(255,255,255,.16), rgba(95,143,134,.4) 55%, rgba(24,48,44,.6))',
          boxShadow:
            'inset 0 0 34px rgba(255,255,255,.2), 0 26px 40px -24px rgba(0,0,0,.95)',
        }}
      >
        {bubbles.map((item, index) => (
          <span
            key={index}
            className="absolute rounded-full bg-white/40"
            style={{
              top: item.top,
              left: item.left,
              height: item.size,
              width: item.size,
              filter: 'blur(0.5px)',
            }}
          />
        ))}
      </div>
      <div className="absolute left-3 top-12 h-20 w-2.5 rounded-full bg-white/30 blur-[3px]" />
    </div>
  )
}

function LickableWallpaper() {
  return (
    <div
      className="relative h-40 w-40 -rotate-3 overflow-hidden rounded-[2px] border-2 border-gold/45"
      style={{
        backgroundColor: '#8d2f3f',
        backgroundImage:
          'radial-gradient(circle at 50% 50%, rgba(212,175,55,.5) 0 2px, transparent 2.5px), linear-gradient(45deg, rgba(0,0,0,.2) 25%, transparent 25% 75%, rgba(0,0,0,.2) 75%), linear-gradient(45deg, rgba(255,255,255,.06) 25%, transparent 25% 75%, rgba(255,255,255,.06) 75%)',
        backgroundSize: '26px 26px, 26px 26px, 26px 26px',
        boxShadow: 'inset 0 0 46px rgba(0,0,0,.55), 0 28px 40px -24px rgba(0,0,0,.9)',
      }}
    >
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(circle at 50% 34%, rgba(255,220,220,.25), transparent 62%)' }}
      />
    </div>
  )
}

function DinnerGum() {
  return (
    <div
      className="relative h-32 w-32 rotate-6 overflow-hidden rounded-[8px]"
      style={{
        background:
          'linear-gradient(180deg,#c2452f 0 33%, #8a5a3c 33% 66%, #4a3c86 66% 100%)',
        boxShadow:
          'inset 0 2px 0 rgba(255,255,255,.4), inset 0 0 34px rgba(0,0,0,.55), 0 26px 38px -24px rgba(0,0,0,.95)',
      }}
    >
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(115deg, rgba(255,255,255,.35), transparent 42%)' }}
      />
      <div className="absolute inset-x-4 top-1/3 h-px bg-white/25" />
      <div className="absolute inset-x-4 top-2/3 h-px bg-white/25" />
    </div>
  )
}

function Fudge() {
  return (
    <div className="relative h-40 w-40">
      <div
        className="absolute inset-x-1 bottom-1 h-28 rounded-[10px]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 22% 34%, rgba(255,249,240,.45) 0 1px, transparent 1.6px), radial-gradient(circle at 68% 62%, rgba(255,249,240,.3) 0 1px, transparent 1.6px), linear-gradient(180deg,#8a5f3c,#3a1e10 62%,#23120a)',
          backgroundSize: '19px 19px, 27px 27px, 100% 100%',
          boxShadow:
            'inset 0 3px 0 rgba(255,255,255,.22), inset 0 0 40px rgba(0,0,0,.5), 0 30px 44px -26px rgba(0,0,0,.95)',
        }}
      />
      <div
        className="absolute inset-x-6 bottom-8 h-10 rounded-full opacity-60"
        style={{ background: 'radial-gradient(60% 100% at 30% 0%, rgba(255,210,150,.4), transparent)' }}
      />
    </div>
  )
}

const visuals = {
  gobstopper: Gobstopper,
  bar: ChocolateBar,
  toffee: HairToffee,
  bottle: FizzyBottle,
  wallpaper: LickableWallpaper,
  gum: DinnerGum,
  fudge: Fudge,
}

export default function Confection({ product, className = '' }) {
  const Visual = visuals[product.visual] ?? Gobstopper
  return (
    <div className={`flex items-center justify-center ${className}`} aria-hidden="true">
      <Visual />
    </div>
  )
}
