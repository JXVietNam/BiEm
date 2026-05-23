import {
  Bell,
  Search,
  Plus,
  ChevronDown,
  User,
} from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200 bg-white/90 px-7 backdrop-blur">
      <div>
        <div className="flex items-center gap-2 text-2xl font-black text-[#111827]">
          Main Wallet
          <ChevronDown size={22} className="text-slate-400" />
        </div>

        <div className="mt-1 text-sm font-medium text-slate-500">
          Manage your crypto assets
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="hidden h-11 items-center gap-3 rounded-full bg-slate-100 px-4 text-sm font-semibold text-slate-500 lg:flex">
          <Search size={18} />
          Search
        </button>

        <button className="grid h-11 w-11 place-items-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/20">
          <Plus size={22} />
        </button>

        <button className="relative grid h-11 w-11 place-items-center rounded-full bg-slate-100 text-slate-600">
          <Bell size={21} />
          <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-blue-600" />
        </button>

        <button className="grid h-11 w-11 place-items-center rounded-full bg-slate-100 text-slate-600">
          <User size={21} />
        </button>
      </div>
    </header>
  );
}