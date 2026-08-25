import { Analytics } from "@vercel/analytics/next";

export default function SharedLayout({ children }: { children: React.ReactNode }) {
  return <>{children}<Analytics /></>;
}
