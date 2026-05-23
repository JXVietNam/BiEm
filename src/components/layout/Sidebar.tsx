import {
  Home,
  Wallet,
  Download,
  Upload,
  History,
  Repeat2,
  Users,
  ShieldCheck,
  Settings,
  Code2,
  LogOut,
  User,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-[245px] border-r border-white/10 bg-[#06101f] p-4">
      <div className="flex items-center gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-500 font-black text-2xl">
          ₮
        </div>

        <b>USDT WALLET</b>
      </div>

      <nav className="mt-10 space-y-2">
        {[
          [Home, "Tổng quan", true],
          [Wallet, "Ví của tôi"],
          [Download, "Nạp USDT"],
          [Upload, "Rút USDT"],
          [History, "Lịch sử giao dịch"],
          [Repeat2, "Chuyển tiền"],
          [Users, "Danh bạ"],
          [ShieldCheck, "Bảo mật"],
          [Settings, "Cài đặt"],
          [Code2, "API"],
        ].map(([Icon, text, active]: any) => (
          <button
            key={text}
            className={`flex w-full items-center gap-4 rounded-xl px-4 py-3 text-left ${
              active
                ? "bg-blue-600/30 text-blue-400"
                : "text-slate-300 hover:bg-white/5"
            }`}
          >
            <Icon size={22} />
            {text}
          </button>
        ))}
      </nav>

      <div className="mt-10 rounded-xl border border-white/10 p-4">
        <div className="text-sm text-slate-300">
          Tài khoản của tôi
        </div>

        <div className="mt-4 flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-slate-700">
            <User size={22} />
          </div>

          <div>
            <b>demo.user</b>

            <div className="mt-1 rounded bg-emerald-500/20 px-2 py-1 text-xs text-emerald-400">
              Đã xác minh
            </div>
          </div>
        </div>

        <div className="mt-4 text-sm text-slate-300">
          UID: 1029384756
        </div>
      </div>

      <button className="mt-28 flex items-center gap-3 text-slate-300">
        <LogOut size={22} />
        Đăng xuất
      </button>
    </aside>
  );
}