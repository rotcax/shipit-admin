import { FC } from 'react'
import { RowContentProps } from '@types'
import Image from 'next/image'
import styles from './styles.module.scss'

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

export default RowContent
