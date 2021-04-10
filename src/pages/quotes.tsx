import { FC } from 'react'
import { HomeLayout } from '@components'
import Head from 'next/head'
import styles from '@styles/Home.module.scss'

const Quotes: FC = () => {
  return (
    <>
      <Head>
        <title>Cotizador</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeLayout>
        <div>
          Quotes
        </div>
      </HomeLayout>
    </>
  )
}

export default Quotes
