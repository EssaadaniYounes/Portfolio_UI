import { ThemeToggler } from "../partials/theme-toggler";

export function Navbar() {
  return (
    <div className="w-full flex items-center justify-end py-4 px-12">
      <ThemeToggler />
    </div>
  );
}
