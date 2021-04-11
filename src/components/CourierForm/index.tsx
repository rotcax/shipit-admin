import { useSelector } from 'react-redux'
import { Form, Select } from 'antd'

const { Option } = Select

const CourierForm = () => {
  const { couriers } = useSelector((state: any) => state.courier)

  return (
    <div style={{ display: 'flex', width: '100%' }}>
      <Form.Item
        style={{ width: '30%' }}
        name="client"
        label="Courier"
        rules={[{ required: true, message: 'Province is required' }]}
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
