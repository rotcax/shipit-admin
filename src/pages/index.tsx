import { FC } from 'react'
import { HomeLayout } from '@components'
import { FullscreenOutlined, UploadOutlined, DollarOutlined } from '@ant-design/icons'
import Head from 'next/head'
import Link from 'next/link'
import styles from '@styles/Home.module.scss'

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeLayout>
        <div className={styles.layout}>
          <div className={styles.container}>
            <div className={styles.sub_container}>
              <Link href="/communes">
                <div className={styles.card}>
                  <FullscreenOutlined className={styles.icon_size} />
                  <h2>Destinos</h2>
                </div>
              </Link>
              <Link href="/quotes">
                <div className={styles.card}>
                  <DollarOutlined className={styles.icon_size} />
                  <h2>Cotizador</h2>
                </div>
              </Link>
            </div>
            <div className={styles.sub_container}>
              <Link href="/shipments">
                <div className={styles.card}>
                  <UploadOutlined className={styles.icon_size} />
                  <h2>Crear Envio</h2>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </HomeLayout>
    </>
  )
}

export default Home
