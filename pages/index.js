import Head from 'next/head'
import Image from 'next/image'
import logo from '../images/logo.png'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=''>

      {/* sidebar   */}
      <Sidebar/>

      {/* Feed */}

      {/* Widget */}


      </main>

      
    </div>
  )
}
