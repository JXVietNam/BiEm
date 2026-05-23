import { useState } from "react";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import {
  Eye,
  Copy,
  AlertTriangle,
  ArrowDown,
  ArrowUp,
  Send,
  Users,
  ShieldCheck,
  Settings,
  ChevronRight,
  Menu,
  Bell,
  User,
  X,
} from "lucide-react";
import BalanceChart from "../components/wallet/BalanceChart";

const txs = [
  ["down", "Nạp USDT", "19/05/2024 10:23:11", "+500.00 USDT", "text-green-400"],
  ["up", "Rút USDT", "18/05/2024 21:15:42", "-200.00 USDT", "text-red-400"],
  ["down", "Nạp USDT", "17/05/2024 15:44:09", "+300.00 USDT", "text-green-400"],
  ["up", "Rút USDT", "16/05/2024 11:02:33", "-150.00 USDT", "text-red-400"],
  ["down", "Nạp USDT", "15/05/2024 09:17:56", "+800.00 USDT", "text-green-400"],
];

export default function Dashboard() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#020817] text-white">
      {/* MOBILE SIDEBAR DRAWER */}
      {openMenu && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpenMenu(false)}
          />

          <div className="absolute left-0 top-0 h-full w-[82%] max-w-[340px] overflow-y-auto border-r border-white/10 bg-[#06101f] shadow-2xl">
            <button
              onClick={() => setOpenMenu(false)}
              className="absolute right-4 top-4 rounded-lg bg-white/10 p-2"
            >
              <X size={20} />
            </button>

            <Sidebar />
          </div>
        </div>
      )}

      <div className="flex min-h-screen">
        {/* DESKTOP SIDEBAR */}
        <div className="hidden lg:block">
          <Sidebar />
        </div>

        <main className="min-w-0 flex-1 pb-24 lg:pb-0">
          {/* DESKTOP HEADER */}
          <div className="hidden lg:block">
            <Header />
          </div>

          {/* MOBILE HEADER */}
          <div className="sticky top-0 z-40 flex h-20 items-center justify-between border-b border-white/10 bg-[#020817]/95 px-5 backdrop-blur lg:hidden">
            <div className="flex items-center gap-4">
              <button onClick={() => setOpenMenu(true)}>
                <Menu size={28} />
              </button>
              <h1 className="text-xl font-black">Tổng quan</h1>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative">
                <Bell size={24} />
                <span className="absolute -right-2 -top-2 grid h-5 w-5 place-items-center rounded-full bg-red-500 text-xs font-bold">
                  3
                </span>
              </div>

              <div className="grid h-9 w-9 place-items-center rounded-full bg-blue-700">
                <User size={20} />
              </div>
            </div>
          </div>

          <div className="grid gap-5 p-4 lg:grid-cols-[1fr_455px] lg:p-6">
            <section className="space-y-5">
              <div className="grid gap-5 xl:grid-cols-[1fr_300px]">
                {/* BALANCE CARD */}
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-700 via-blue-700 to-emerald-500 p-5 lg:p-7">
                  <div className="flex items-center gap-2 text-sm lg:text-lg">
                    Tổng số dư ước tính <Eye size={18} />
                  </div>

                  <div className="mt-7 text-3xl font-black lg:text-4xl">
                    1,250.25 USDT
                  </div>

                  <div className="mt-2 text-sm lg:text-lg">
                    ≈ 31,262,500 VND
                  </div>

                  <div className="mt-8 flex gap-3">
                    <button className="rounded-lg bg-blue-500 px-5 py-3 text-sm font-bold lg:px-7">
                      ↓ Nạp USDT
                    </button>
                    <button className="rounded-lg bg-emerald-500 px-5 py-3 text-sm font-bold lg:px-7">
                      ↑ Rút USDT
                    </button>
                  </div>

                  <div className="absolute right-5 top-24 grid h-24 w-24 place-items-center rounded-full bg-emerald-400 text-6xl font-black shadow-2xl lg:right-14 lg:top-20 lg:h-40 lg:w-40 lg:text-8xl">
                    ₮
                  </div>
                </div>

                {/* WALLET INFO */}
                <div className="rounded-2xl border border-white/10 bg-[#0b1526] p-5 lg:p-6">
                  <h2 className="text-lg font-bold lg:text-xl">Thông tin ví</h2>

                  {[
                    ["Loại ví", "USDT (TRC20)"],
                    ["Địa chỉ ví", "TYd1...e8K3"],
                    ["Số dư khả dụng", "1,250.25 USDT"],
                    ["Đang khóa", "0.00 USDT"],
                  ].map(([a, b]) => (
                    <div key={a} className="mt-5 flex justify-between gap-4 text-sm lg:text-base">
                      <span className="text-slate-300">{a}</span>
                      <b className="text-right">{b}</b>
                    </div>
                  ))}
                </div>
              </div>

              {/* MOBILE QR MOVE HERE */}
              <div className="rounded-2xl border border-white/10 bg-[#0b1526] p-5 lg:hidden">
                <h2 className="text-lg font-bold">Địa chỉ nhận USDT (TRC20)</h2>

                <div className="mx-auto mt-5 grid h-36 w-36 place-items-center rounded-lg bg-white text-black text-sm font-black">
                  QR CODE
                </div>

                <div className="mt-4 flex justify-between rounded-lg border border-white/10 px-4 py-3 text-xs">
                  TYd1e8K3:9jJc...zX4rF9mJ6 <Copy size={16} />
                </div>

                <div className="mt-4 flex gap-3 rounded-lg border border-yellow-500/30 bg-yellow-500/10 p-4 text-xs">
                  <AlertTriangle className="text-yellow-400" size={20} />
                  <span>
                    Chỉ gửi USDT (TRC20) đến địa chỉ này. Gửi sai mạng có thể mất tài sản.
                  </span>
                </div>
              </div>

              {/* ASSETS */}
              <div className="rounded-2xl border border-white/10 bg-[#0b1526] p-5 lg:p-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold lg:text-xl">Tài sản</h2>
                  <span className="text-sm text-blue-400 lg:hidden">Xem tất cả</span>
                </div>

                <div className="mt-6 grid grid-cols-[1.4fr_1fr_1fr] border-b border-white/10 pb-4 text-xs text-slate-400 lg:grid-cols-4 lg:text-base">
                  <span>Loại tài sản</span>
                  <span>Số dư</span>
                  <span>Giá trị</span>
                  <span className="hidden lg:block">Tỷ lệ</span>
                </div>

                <div className="grid grid-cols-[1.4fr_1fr_1fr] items-center py-5 text-sm lg:grid-cols-4 lg:text-base">
                  <div className="flex items-center gap-2">
                    <div className="grid h-8 w-8 place-items-center rounded-full bg-emerald-500 font-bold">
                      ₮
                    </div>
                    <b>USDT</b>
                    <span className="rounded bg-slate-700 px-2 py-1 text-[10px]">
                      TRC20
                    </span>
                  </div>
                  <span>1,250.25</span>
                  <span>31,262,500</span>
                  <span className="hidden lg:block">100%</span>
                </div>
              </div>

              <BalanceChart />

              {/* QUICK ACTIONS */}
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {[
                  [Send, "Chuyển tiền", "Gửi USDT đến ví khác"],
                  [Users, "Danh bạ", "Quản lý danh bạ ví"],
                  [ShieldCheck, "Bảo mật", "Bảo vệ tài khoản"],
                  [Settings, "Cài đặt", "Tùy chỉnh cài đặt"],
                ].map(([Icon, title, desc]: any) => (
                  <div
                    key={title}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#0b1526] p-4"
                  >
                    <div className="flex items-center gap-4">
                      <div className="grid h-12 w-12 place-items-center rounded-xl bg-blue-700">
                        <Icon />
                      </div>

                      <div>
                        <b>{title}</b>
                        <p className="text-sm text-slate-400">{desc}</p>
                      </div>
                    </div>

                    <ChevronRight />
                  </div>
                ))}
              </div>
            </section>

            {/* DESKTOP RIGHT SIDE */}
            <aside className="hidden space-y-5 lg:block">
              <div className="rounded-2xl border border-white/10 bg-[#0b1526] p-6">
                <h2 className="text-xl font-bold">Địa chỉ nhận USDT (TRC20)</h2>

                <div className="mx-auto mt-5 grid h-40 w-40 place-items-center rounded-lg bg-white text-black text-xl font-black">
                  QR CODE
                </div>

                <div className="mt-4 flex justify-between rounded-lg border border-white/10 px-4 py-3 text-sm">
                  TYd1e8K3:9jJc...zX4rF9mJ6 <Copy size={18} />
                </div>

                <div className="mt-4 flex gap-3 rounded-lg border border-yellow-500/30 bg-yellow-500/10 p-4 text-sm">
                  <AlertTriangle className="text-yellow-400" />
                  <span>
                    Chỉ gửi USDT (TRC20) đến địa chỉ này. Gửi sai mạng có thể mất tài sản.
                  </span>
                </div>
              </div>

              <TransactionBox />
            </aside>

            {/* MOBILE TRANSACTION */}
            <div className="lg:hidden">
              <TransactionBox />
            </div>
          </div>

          {/* MOBILE BOTTOM NAV */}
          <div className="fixed bottom-0 left-0 right-0 z-40 grid grid-cols-5 border-t border-white/10 bg-[#06101f]/95 px-2 py-2 backdrop-blur lg:hidden">
            {[
              ["⌂", "Tổng quan"],
              ["▣", "Ví của tôi"],
              ["⇄", "Giao dịch"],
              ["🔔", "Thông báo"],
              ["⚙", "Cài đặt"],
            ].map(([icon, label], index) => (
              <button
                key={label}
                className={`flex flex-col items-center gap-1 text-[11px] ${
                  index === 0 ? "text-blue-400" : "text-slate-300"
                }`}
              >
                <span className="text-xl">{icon}</span>
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
    <div className="rounded-2xl border border-white/10 bg-[#0b1526] p-5 lg:p-6">
      <div className="flex justify-between">
        <h2 className="text-lg font-bold lg:text-xl">Lịch sử giao dịch</h2>
        <span className="text-sm text-blue-400">Xem tất cả</span>
      </div>

      <div className="mt-5 space-y-5">
        {txs.map(([dir, title, date, amount, color]) => (
          <div
            key={date}
            className="flex justify-between gap-3 border-b border-white/10 pb-4"
          >
            <div className="flex gap-3">
              <div
                className={`grid h-10 w-10 shrink-0 place-items-center rounded-full ${
                  dir === "down"
                    ? "bg-emerald-500/20 text-emerald-400"
                    : "bg-red-500/20 text-red-400"
                }`}
              >
                {dir === "down" ? <ArrowDown /> : <ArrowUp />}
              </div>

              <div>
                <b className="text-sm lg:text-base">{title}</b>
                <p className="text-xs text-slate-400 lg:text-sm">{date}</p>
              </div>
            </div>

            <div className="text-right">
              <b className={`${color} text-sm lg:text-base`}>{amount}</b>
              <p className="text-xs text-emerald-400 lg:text-sm">Thành công</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}