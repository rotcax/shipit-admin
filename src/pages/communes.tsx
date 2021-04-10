import { FC } from 'react'
import { HomeLayout } from '@components'
import Head from 'next/head'
import styles from '@styles/Home.module.scss'

const Communes: FC = () => {
  return (
    <>
      <Head>
        <title>Destinos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeLayout>
        <div>
          Communes
        </div>
      </HomeLayout>
    </>
  )
}

export default Communes
