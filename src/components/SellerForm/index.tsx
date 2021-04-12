import { Form, Input, Select } from 'antd'
import styles from './styles.module.scss'

const { Option } = Select

const SellerForm = () => {
  return (
    <div className={styles.container}>
      <Form.Item
        className={styles.item_one}
        name="name"
        label="Nombre del e-commerce"
      >
        <Select placeholder="e-commerce">
          <Option value="woocommerce">Woocommerce</Option>
          <Option value="shopify">Shopify</Option>
          <Option value="magento">Magento</Option>
        </Select>
      </Form.Item>

      <Form.Item
        className={styles.item_two}
        name="seller_id"
        label="ID de la venta"
      >
        <Input placeholder="ID" />
      </Form.Item>
    </div>
  )
}

export default SellerForm
