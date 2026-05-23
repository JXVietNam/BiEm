import {
  Menu,
  Bell,
  Globe2,
  User,
} from "lucide-react";

export default function Header() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-white/10 px-7">
      <div className="flex items-center gap-6">
        <Menu size={30} />

        <h1 className="text-2xl font-bold">
          Tổng quan
        </h1>
      </div>

      <div className="flex items-center gap-5">
        <Bell />
        <Globe2 />

        <span>VI⌄</span>

        <div className="grid h-11 w-11 place-items-center rounded-full bg-blue-700">
          <User />
        </div>
      </div>
    </header>
  );
}