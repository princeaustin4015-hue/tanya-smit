import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with TANYA SMIT. Contact our support team for assistance, questions, or feedback. We're here to help!",
  openGraph: {
    title: "Contact Us | TANYA SMIT",
    description:
      "Get in touch with TANYA SMIT. Contact our support team for assistance, questions, or feedback.",
  },
}

export default function ContactUsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

