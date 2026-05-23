import { useState } from "react";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import {
  Eye,
  Copy,
  ArrowDown,
  ArrowUp,
  Send,
  Download,
  CreditCard,
  Repeat2,
  Bell,
  User,
  Menu,
  X,
  Home,
  Globe,
  Settings,
  Compass,
  Wallet,
  ChevronRight,
  QrCode,
} from "lucide-react";

const tokens = [
  { name: "USDT", chain: "TRC20", price: "$1.00", change: "+0.01%", amount: "734.87", value: "$734.87", icon: "₮", bg: "bg-emerald-500" },
  { name: "BTC", chain: "Bitcoin", price: "$67,813.48", change: "+1.73%", amount: "0.0073", value: "$494.03", icon: "₿", bg: "bg-orange-500" },
  { name: "ETH", chain: "Ethereum", price: "$3,812.96", change: "+2.21%", amount: "0.0047", value: "$17.92", icon: "♦", bg: "bg-slate-700" },
  { name: "BNB", chain: "BEP20", price: "$597.40", change: "-0.27%", amount: "0.0068", value: "$4.06", icon: "◆", bg: "bg-yellow-400" },
  { name: "TRX", chain: "TRC20", price: "$0.1234", change: "+0.35%", amount: "18.7", value: "$2.30", icon: "T", bg: "bg-red-500" },
];

const txs = [
  ["down", "Receive USDT", "19/05/2024 10:23", "+500.00 USDT", "text-emerald-500"],
  ["up", "Send USDT", "18/05/2024 21:15", "-200.00 USDT", "text-red-500"],
  ["down", "Receive USDT", "17/05/2024 15:44", "+300.00 USDT", "text-emerald-500"],
];

export default function Dashboard() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#f7f9fc] text-[#101828]">
      {openMenu && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpenMenu(false)} />
          <div className="absolute left-0 top-0 h-full w-[82%] max-w-[340px] overflow-y-auto bg-white shadow-2xl">
            <button onClick={() => setOpenMenu(false)} className="absolute right-4 top-4 rounded-xl bg-slate-100 p-2">
              <X size={20} />
            </button>
            <Sidebar />
          </div>
        </div>
      )}

      <div className="flex min-h-screen">
        <div className="hidden lg:block">
          <Sidebar />
        </div>

        <main className="min-w-0 flex-1 pb-24 lg:pb-0">
          <div className="hidden lg:block">
            <Header />
          </div>

          <div className="mx-auto max-w-[1180px] px-4 py-4 lg:px-8 lg:py-6">
            <div className="mb-6 flex items-center justify-between lg:hidden">
              <button onClick={() => setOpenMenu(true)} className="rounded-full p-2">
                <Menu size={24} />
              </button>

              <div className="flex items-center gap-1 text-lg font-black">
                Main Wallet
                <ChevronRight size={18} className="rotate-90" />
              </div>

              <button className="relative rounded-full p-2">
                <Bell size={23} />
                <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-blue-600" />
              </button>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1fr_390px]">
              <section className="space-y-5">
                <div className="rounded-[28px] bg-white p-6 text-center shadow-sm ring-1 ring-slate-200">
                  <div className="flex items-center justify-center gap-2 text-sm font-semibold text-slate-500">
                    Total Balance <Eye size={16} />
                  </div>

                  <div className="mt-3 text-4xl font-black tracking-tight lg:text-5xl">
                    $1,228.20
                  </div>

                  <div className="mt-2 text-sm font-semibold text-emerald-500">
                    +$18.24 today
                  </div>

                  <div className="mt-7 grid grid-cols-4 gap-4">
                    {[
                      [Send, "Send"],
                      [Download, "Receive"],
                      [CreditCard, "Buy"],
                      [Repeat2, "Swap"],
                    ].map(([Icon, label]: any) => (
                      <button key={label} className="flex flex-col items-center gap-2">
                        <div className="grid h-14 w-14 place-items-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/25">
                          <Icon size={23} />
                        </div>
                        <span className="text-sm font-semibold text-slate-700">{label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="rounded-[28px] bg-white shadow-sm ring-1 ring-slate-200">
                  <div className="grid grid-cols-2 border-b border-slate-200 text-center text-sm font-bold">
                    <button className="border-b-2 border-blue-600 py-4 text-blue-600">Crypto</button>
                    <button className="py-4 text-slate-400">NFTs</button>
                  </div>

                  <div className="divide-y divide-slate-100">
                    {tokens.map((t) => (
                      <div key={t.name} className="flex items-center justify-between px-5 py-4">
                        <div className="flex items-center gap-3">
                          <div className={`grid h-11 w-11 place-items-center rounded-full ${t.bg} text-lg font-black text-white`}>
                            {t.icon}
                          </div>
                          <div>
                            <div className="font-black">{t.name}</div>
                            <div className="text-xs text-slate-500">
                              {t.price} <span className={t.change.includes("-") ? "text-red-500" : "text-emerald-500"}>{t.change}</span>
                            </div>
                          </div>
                        </div>

                        <div className="text-right">
                          <div className="font-black">{t.amount}</div>
                          <div className="text-xs text-slate-500">{t.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <TransactionBox />
              </section>

              <aside className="space-y-5">
                <div className="rounded-[28px] bg-white p-5 shadow-sm ring-1 ring-slate-200">
                  <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-lg font-black">Receive</h2>
                    <QrCode size={21} className="text-blue-600" />
                  </div>

                  <div className="rounded-2xl border border-slate-200 p-4">
                    <div className="flex items-center gap-3">
                      <div className="grid h-11 w-11 place-items-center rounded-full bg-emerald-500 text-xl font-black text-white">
                        ₮
                      </div>
                      <div>
                        <div className="font-black">USDT</div>
                        <div className="text-xs text-slate-500">TRC20</div>
                      </div>
                    </div>

                    <div className="mx-auto mt-5 grid h-44 w-44 place-items-center rounded-2xl bg-slate-100 text-sm font-black text-slate-500">
                      QR CODE
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between rounded-2xl bg-slate-100 px-4 py-3 text-xs font-semibold text-slate-600">
                    TYd1e8K3:9jJc...zX4rF9mJ6
                    <Copy size={17} className="text-blue-600" />
                  </div>

                  <p className="mt-4 rounded-2xl bg-blue-50 p-3 text-xs text-slate-600">
                    Send only USDT TRC20 to this address. Sending other coins may result in permanent loss.
                  </p>
                </div>

                <div className="rounded-[28px] bg-white p-5 shadow-sm ring-1 ring-slate-200">
                  <h2 className="mb-4 text-lg font-black">Settings</h2>

                  {[
                    [User, "My Wallet"],
                    [Wallet, "Security"],
                    [Globe, "Networks"],
                    [Settings, "Preferences"],
                  ].map(([Icon, label]: any) => (
                    <button key={label} className="flex w-full items-center justify-between border-b border-slate-100 py-4 last:border-0">
                      <div className="flex items-center gap-3">
                        <div className="grid h-10 w-10 place-items-center rounded-full bg-slate-100 text-slate-500">
                          <Icon size={19} />
                        </div>
                        <span className="font-bold">{label}</span>
                      </div>
                      <ChevronRight size={18} className="text-slate-400" />
                    </button>
                  ))}
                </div>
              </aside>
            </div>
          </div>

          <div className="fixed bottom-0 left-0 right-0 z-40 grid grid-cols-5 border-t border-slate-200 bg-white px-2 py-2 shadow-[0_-8px_30px_rgba(15,23,42,0.08)] lg:hidden">
            {[
              [Home, "Home"],
              [Repeat2, "Swap"],
              [Compass, "Discover"],
              [Globe, "Browser"],
              [Settings, "Settings"],
            ].map(([Icon, label]: any, index) => (
              <button key={label} className={`flex flex-col items-center gap-1 text-[11px] font-semibold ${index === 0 ? "text-blue-600" : "text-slate-400"}`}>
                <Icon size={21} />
                {label}
              </button>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

function TransactionBox() {
  return (
    <div className="rounded-[28px] bg-white p-5 shadow-sm ring-1 ring-slate-200">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-black">Recent Activity</h2>
        <span className="text-sm font-bold text-blue-600">View all</span>
      </div>

      <div className="mt-4 space-y-4">
        {txs.map(([dir, title, date, amount, color]) => (
          <div key={date} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`grid h-11 w-11 place-items-center rounded-full ${dir === "down" ? "bg-emerald-50 text-emerald-500" : "bg-red-50 text-red-500"}`}>
                {dir === "down" ? <ArrowDown size={20} /> : <ArrowUp size={20} />}
              </div>

              <div>
                <div className="font-black">{title}</div>
                <div className="text-xs text-slate-500">{date}</div>
              </div>
            </div>

            <div className="text-right">
              <div className={`${color} text-sm font-black`}>{amount}</div>
              <div className="text-xs text-emerald-500">Success</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}