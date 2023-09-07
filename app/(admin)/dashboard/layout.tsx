export const metadata = {
  title: "Blog Dashboard",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        {children}
        </body>
    </html>
  )
}
