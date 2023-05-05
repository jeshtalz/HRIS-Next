import Sidebar from "../components/Sidebar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className='grid grid-cols-12'>
      <div className='col-span-2'>
        <Sidebar />
      </div>
      <div className=' col-span-10'>
        {children}
      </div>
    </main>
  )
}
