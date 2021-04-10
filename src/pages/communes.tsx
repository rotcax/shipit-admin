import { FC } from 'react'
import { useSelector } from 'react-redux'
import { Table } from 'antd';
import { HomeLayout } from '@components'
import Head from 'next/head'
import styles from '@styles/Home.module.scss'

const columns = [
  {
    title: 'Nombre de la comuna',
    dataIndex: 'name'
  },
  {
    title: 'Nombre de la region',
    dataIndex: ['region', 'name'],
  }
]

const Communes: FC = () => {
  const { communes } = useSelector((state: any) => state.commune)

  return (
    <>
      <Head>
        <title>Destinos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeLayout>
        <div>
          <Table
            rowKey={record => record.id}
            dataSource={communes}
            columns={columns}
            pagination={{ defaultPageSize: 15 }}
          />
        </div>
      </HomeLayout>
    </>
  )
}

export default Communes
