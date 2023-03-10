import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

import Button1 from '../components/Button1'

export default function Home() {
  return (
    <>
      <Head>
        <title>Перевір свої знання з літератури!</title>
        <meta name='description' content='Перевір свої знання з літератури!' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='flex flex-col justify-center items-center min-h-screen'>
        <h1 className='font-bold text-5xl text-center text-white mb-8 max-xs:text-2xl'>Перевір свої знання з літератури!</h1>
        <Button1 text='Почати!' link='/questions/random' />
      </main>
    </>
  )
}
