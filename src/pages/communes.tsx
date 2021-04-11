import { FC } from 'react'
import { useSelector } from 'react-redux'
import { Table } from 'antd';
import { HomeLayout } from '@components'
import Head from 'next/head'
import styles from '@styles/Home.module.scss'
import Image from 'next/image'

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

const RowContent = ({ record, couriers }) => {
  console.log(record.couriers_availables);
  console.log(couriers);

  return (
    <div>
      <p style={{ fontWeight: 'bold' }}>Couriers disponibles</p>
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
        <Image
          src={'https://couriers.s3-us-west-2.amazonaws.com/shippify.png'}
          alt={'Shippify'}
          width={100}
          height={50}
        />
        <Image
          src={'https://s3-us-west-2.amazonaws.com/couriers-shipit/chilexpress.png'}
          alt={'Shippify'}
          width={100}
          height={50}
        />
        <Image
          src={'https://s3-us-west-2.amazonaws.com/couriers-shipit/starken.png'}
          alt={'Shippify'}
          width={100}
          height={50}
        />
        <Image
          src={'https://s3-us-west-2.amazonaws.com/couriers-shipit/99minutos.png'}
          alt={'Shippify'}
          width={100}
          height={50}
        />
        <Image
          src={'https://s3-us-west-2.amazonaws.com/couriers-shipit/chileparcels.png'}
          alt={'Shippify'}
          width={100}
          height={50}
        />
        <Image
          src={'https://couriers.s3-us-west-2.amazonaws.com/motopartner.png'}
          alt={'Shippify'}
          width={100}
          height={50}
        />
        <Image
          src={'https://s3-us-west-2.amazonaws.com/couriers-shipit/bluexpress.png'}
          alt={'Shippify'}
          width={100}
          height={50}
        />
      </div>
    </div>
  )
}

const Communes: FC = () => {
  const {
    commune: { communes },
    courier: { couriers }
  } = useSelector((state: any) => state)

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
              expandedRowRender: record => <RowContent record={record} couriers={couriers} />,
              rowExpandable: record => record.name !== 'Not Expandable',
            }}
            dataSource={communes}
          />
        </div>
      </HomeLayout>
    </>
  )
}

export default Communes
