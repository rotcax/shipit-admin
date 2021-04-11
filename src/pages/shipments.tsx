import { FC, useState } from 'react'
import { HomeLayout } from '@components'
import { createRate } from '@store/actions'
import { useDispatch } from 'react-redux'
import Head from 'next/head'
import styles from '@styles/Quotes.module.scss'

const Shipments: FC = () => {
  return (
    <>
      <Head>
        <title>Envios</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeLayout>
        <div style={{ height: '100vh' }}>

        </div>
      </HomeLayout>
    </>
  )
}

export default Shipments
