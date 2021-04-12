import { useSelector } from 'react-redux'
import { Form, Select } from 'antd'
import styles from './styles.module.scss'

const { Option } = Select

const CourierForm = () => {
  const { couriers } = useSelector((state: any) => state.courier)

  return (
    <div className={styles.container}>
      <Form.Item
        className={styles.space}
        name="client"
        label="Courier"
        rules={[{ required: true, message: 'El campo es requerido' }]}
      >
        <Select placeholder="Courier">
          {
            couriers.map((courier, index) => (
              <Option key={index} value={courier.name}>{courier.name}</Option>
            ))
          }
        </Select>
      </Form.Item>
    </div>
  )
}

export default CourierForm
