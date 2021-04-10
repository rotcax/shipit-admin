import { FC } from 'react'
import { HomeLayout } from '@components'
import Head from 'next/head'
import styles from '@styles/Home.module.scss'

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeLayout>
        <div style={{ height: '100vh' }}>
          Home
        </div>
      </HomeLayout>
    </>
  )
}

export default Home
