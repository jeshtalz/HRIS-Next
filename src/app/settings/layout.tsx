import Sidebar from "../components/Sidebar/Sidebar";
import { Providers } from "../redux/provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className='grid grid-cols-12'>
      <Providers>
        <div className='col-span-2'>
          <Sidebar />
        </div>
        <div className=' col-span-10'>
          {children}
        </div>
      </Providers>
    </main>
  )
}
