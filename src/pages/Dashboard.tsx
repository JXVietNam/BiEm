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
  return (
    <div className="min-h-screen w-full overflow-x-auto bg-[#020817] text-white">
      <div className="flex min-h-screen min-w-[1500px]">
        <Sidebar />

        <main className="flex-1">
          <Header />

          <div className="grid grid-cols-[1fr_455px] gap-5 p-6">
            <section className="space-y-5">
              <div className="grid grid-cols-[1fr_300px] gap-5">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-700 via-blue-700 to-emerald-500 p-7">
                  <div className="flex items-center gap-3 text-lg">
                    Tổng số dư ước tính <Eye size={18} />
                  </div>

                  <div className="mt-8 text-4xl font-black">1,250.25 USDT</div>
                  <div className="mt-3 text-lg">≈ 31,262,500 VND</div>

                  <div className="mt-10 flex gap-4">
                    <button className="rounded-lg bg-blue-500 px-7 py-3 font-bold">
                      ↓ Nạp USDT
                    </button>
                    <button className="rounded-lg bg-emerald-500 px-7 py-3 font-bold">
                      ↑ Rút USDT
                    </button>
                  </div>

                  <div className="absolute right-14 top-20 grid h-40 w-40 place-items-center rounded-full bg-emerald-400 text-8xl font-black shadow-2xl">
                    ₮
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-[#0b1526] p-6">
                  <h2 className="text-xl font-bold">Thông tin ví</h2>

                  {[
                    ["Loại ví", "USDT (TRC20)"],
                    ["Địa chỉ ví", "TYd1...e8K3"],
                    ["Số dư khả dụng", "1,250.25 USDT"],
                    ["Đang khóa", "0.00 USDT"],
                  ].map(([a, b]) => (
                    <div key={a} className="mt-6 flex justify-between">
                      <span className="text-slate-300">{a}</span>
                      <b>{b}</b>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#0b1526] p-6">
                <h2 className="text-xl font-bold">Tài sản</h2>

                <div className="mt-6 grid grid-cols-4 border-b border-white/10 pb-4 text-slate-400">
                  <span>Loại tài sản</span>
                  <span>Số dư</span>
                  <span>Giá trị (VND)</span>
                  <span>Tỷ lệ</span>
                </div>

                <div className="grid grid-cols-4 items-center py-5">
                  <div className="flex items-center gap-3">
                    <div className="grid h-9 w-9 place-items-center rounded-full bg-emerald-500 font-bold">
                      ₮
                    </div>
                    <b>USDT</b>
                    <span className="rounded bg-slate-700 px-2 py-1 text-xs">
                      TRC20
                    </span>
                  </div>
                  <span>1,250.25</span>
                  <span>31,262,500</span>
                  <span>100%</span>
                </div>
              </div>

              <BalanceChart />

              <div className="grid grid-cols-4 gap-4">
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

            <aside className="space-y-5">
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

              <div className="rounded-2xl border border-white/10 bg-[#0b1526] p-6">
                <div className="flex justify-between">
                  <h2 className="text-xl font-bold">Lịch sử giao dịch</h2>
                  <span className="text-blue-400">Xem tất cả</span>
                </div>

                <div className="mt-5 space-y-5">
                  {txs.map(([dir, title, date, amount, color]) => (
                    <div key={date} className="flex justify-between border-b border-white/10 pb-4">
                      <div className="flex gap-3">
                        <div
                          className={`grid h-10 w-10 place-items-center rounded-full ${
                            dir === "down"
                              ? "bg-emerald-500/20 text-emerald-400"
                              : "bg-red-500/20 text-red-400"
                          }`}
                        >
                          {dir === "down" ? <ArrowDown /> : <ArrowUp />}
                        </div>

                        <div>
                          <b>{title}</b>
                          <p className="text-sm text-slate-400">{date}</p>
                        </div>
                      </div>

                      <div className="text-right">
                        <b className={color}>{amount}</b>
                        <p className="text-sm text-emerald-400">Thành công</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}