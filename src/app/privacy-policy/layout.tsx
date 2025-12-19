import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how TANYA SMIT collects, uses, and protects your personal information. Our commitment to data protection and your privacy rights.",
  openGraph: {
    title: "Privacy Policy | TANYA SMIT",
    description:
      "Learn how TANYA SMIT collects, uses, and protects your personal information.",
  },
}

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

