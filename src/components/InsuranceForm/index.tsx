import { Row, Col, Form, Input, Select } from 'antd'

const { Option } = Select

const InsuranceForm = () => {
  return (
    <Row gutter={24}>
      <Col span={12}>
        <Form.Item
          name="ticket_amount"
          label="Nro. Boleta de venta"
          rules={[
            {
              required: true,
              pattern: new RegExp(/^\d+$/),
              message: 'Input something!',
            },
          ]}
        >
          <Input placeholder="placeholder" />
        </Form.Item>
      </Col>

      <Col span={12}>
        <Form.Item
          name="ticket_number"
          label="Valor de los productos"
          rules={[
            {
              required: true,
              pattern: new RegExp(/^\d+$/),
              message: 'Input something!',
            },
          ]}
        >
          <Input placeholder="placeholder" />
        </Form.Item>
      </Col>

      <Col span={12}>
        <Form.Item
          name="detail"
          label="Detalles"
          rules={[
            {
              required: true,
              message: 'Input something!',
            },
          ]}
        >
          <Input placeholder="placeholder" />
        </Form.Item>
      </Col>

      <Col span={12}>
        <Form.Item
          name="extra"
          label="Seguro adicional?"
          rules={[
            {
              required: true,
              message: 'Input something!',
            },
          ]}
        >
          <Select placeholder="Extra">
            <Option value="false">No</Option>
            <Option value="true">Si</Option>
          </Select>
        </Form.Item>
      </Col>
    </Row>
  )
}

export default InsuranceForm
