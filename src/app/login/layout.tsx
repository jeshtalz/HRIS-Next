"use client"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className='flex'>
      <div className='flex-1'>
        {children}
      </div>
    </main>
  )
}