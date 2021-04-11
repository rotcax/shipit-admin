import { FC } from 'react'
import { HomeLayout, ShipmentContent } from '@components'
import Head from 'next/head'

const Shipments: FC = () => {
  return (
    <>
      <Head>
        <title>Envios</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeLayout>
        <ShipmentContent />
      </HomeLayout>
    </>
  )
}

export default Shipments
