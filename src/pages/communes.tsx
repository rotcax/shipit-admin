import { FC } from 'react'
import { useSelector } from 'react-redux'
import { Table } from 'antd'
import { HomeLayout } from '@components'
import { ColumsProps, RowContentProps } from '@types'
import Head from 'next/head'
import Image from 'next/image'
import styles from '@styles/Communes.module.scss'

const columns: Array<ColumsProps> = [
  {
    title: 'Nombre de la comuna',
    dataIndex: 'name'
  },
  {
    title: 'Nombre de la region',
    dataIndex: ['region', 'name'],
  }
]

const RowContent: FC<RowContentProps> = ({ record }) => {
  const currentCouriers = record.currentCouriers

  return (
    <div>
      <p className={styles.title}>Couriers disponibles</p>
      <div className={styles.courier_container}>
        {
          currentCouriers.length ? (
            currentCouriers.map((commune, index) => (
              <Image
                key={index}
                src={commune.image_original_url}
                alt={commune.name}
                width={100}
                height={50}
              />
            ))
          ) : (
            <div>
              No exiten Couriers disponibles
            </div>
          )
        }
      </div>
    </div>
  )
}

const Communes: FC = () => {
  const { commune: { communes } } = useSelector((state: any) => state)

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
            columns={columns}
            pagination={{ defaultPageSize: 15 }}
            expandable={{
              expandedRowRender: record => <RowContent record={record} />,
              rowExpandable: record => record.name !== 'Not Expandable'
            }}
            dataSource={communes}
          />
        </div>
      </HomeLayout>
    </>
  )
}

export default Communes
