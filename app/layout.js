import './globals.css'

export const metadata = {
  title: 'JG University — Where Knowledge Meets Innovation',
  description: 'UGC-approved New Age Tech-Driven University in Ahmedabad offering MBA, BCA, B.Tech, B.Com and 50+ more programmes.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
