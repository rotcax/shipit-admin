import { Form, Input, Select } from 'antd'

const { Option } = Select

const SellerForm = () => {
  return (
    <div style={{ display: 'flex', width: '100%' }}>
      <Form.Item
        style={{ width: '40%', marginRight: 30 }}
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
        style={{ width: '40%' }}
        name="seller_id"
        label="ID de la venta"
      >
        <Input placeholder="ID" />
      </Form.Item>
    </div>
  )
}

export default SellerForm
