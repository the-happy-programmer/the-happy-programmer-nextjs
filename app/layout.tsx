import { Providers } from '@/components/Providers'
import '@/styles/global.css'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Providers>
        <body>
          <main>{children}</main>
        </body>
      </Providers>
    </html>
  )
}
