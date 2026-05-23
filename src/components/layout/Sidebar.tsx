import {
  Home,
  Repeat2,
  Compass,
  Globe,
  Settings,
  Bell,
  ChevronRight,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-[260px] flex-col border-r border-slate-200 bg-white px-5 py-6">
      {/* LOGO */}
      <div className="flex items-center gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-600 text-2xl font-black text-white shadow-lg shadow-blue-600/25">
          ₮
        </div>

        <div>
          <div className="text-lg font-black text-[#111827]">
            Main Wallet
          </div>

          <div className="text-sm text-slate-500">
            Multi-Coin Wallet
          </div>
        </div>
      </div>

      {/* MENU */}
      <nav className="mt-10 space-y-2">
        {[
          [Home, "Home", true],
          [Repeat2, "Swap"],
          [Compass, "Discover"],
          [Globe, "Browser"],
          [Bell, "Notifications"],
          [Settings, "Settings"],
        ].map(([Icon, text, active]: any) => (
          <button
            key={text}
            className={`flex w-full items-center justify-between rounded-2xl px-4 py-4 transition-all ${
              active
                ? "bg-blue-50 text-blue-600"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            <div className="flex items-center gap-4">
              <Icon size={22} />
              <span className="font-semibold">{text}</span>
            </div>

            <ChevronRight size={18} />
          </button>
        ))}
      </nav>

      {/* WALLET CARD */}
      <div className="mt-8 rounded-[28px] bg-gradient-to-br from-blue-600 to-blue-500 p-5 text-white shadow-xl shadow-blue-600/20">
        <div className="text-sm opacity-80">
          Total Balance
        </div>

        <div className="mt-2 text-3xl font-black">
          $1,228.20
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div>
            <div className="text-xs opacity-70">
              Wallet ID
            </div>

            <div className="mt-1 font-bold">
              #102938
            </div>
          </div>

          <div className="rounded-full bg-white/20 px-3 py-2 text-sm font-bold">
            Active
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="mt-auto border-t border-slate-200 pt-5">
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-full bg-slate-100 font-black text-slate-700">
            U
          </div>

          <div>
            <div className="font-bold text-[#111827]">
              demo.user
            </div>

            <div className="text-sm text-slate-500">
              Verified Wallet
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}