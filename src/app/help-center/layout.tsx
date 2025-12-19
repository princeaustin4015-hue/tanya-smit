import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Help Center",
  description:
    "Get help with your account, games, tournaments, and more. Find answers to frequently asked questions and contact our support team.",
  openGraph: {
    title: "Help Center | TANYA SMIT",
    description:
      "Get help with your account, games, tournaments, and more. Find answers to frequently asked questions.",
  },
}

export default function HelpCenterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

