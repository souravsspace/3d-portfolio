import type { Metadata } from "next"
import "@/styles/globals.css"
import { Toaster } from "react-hot-toast"

export const metadata: Metadata = {
   title: "Sourav's Portfolio",
   description: "A 3D portfolio built with React and Three.js",
}

export default function RootLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <html lang="en">
         <body className="relative">
            <Toaster />
            {children}
         </body>
      </html>
   )
}
