import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Rules & Fair Play",
  description:
    "Learn about our code of conduct, community guidelines, tournament rules, and fair play standards. Our commitment to maintaining a fair, respectful, and enjoyable gaming environment.",
  openGraph: {
    title: "Rules & Fair Play | TANYA SMIT",
    description:
      "Learn about our code of conduct, community guidelines, tournament rules, and fair play standards.",
  },
}

export default function RulesAndFairPlayLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

