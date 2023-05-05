import Banner from './components/Banner/Banner';
import Sidebar from './components/Sidebar';

export const metadata = {
  title: 'HRIS',
};


export default function Home({ }) {
  return (
    <div className='grid grid-cols-12 sm:grid-cols-4 md:grid-cols-10 lg:grid-cols-12'>
      <div className=' col-span-3 sm:col-span-1 md:col-span-2   lg:col-span-2 '>
        <Sidebar />
      </div>
      <div className=' col-span-9 sm:col-span-3 md:col-span-8 lg:col-span-10 '>
        "Dashboard to be designed"
      </div>
    </div>
  )
}


