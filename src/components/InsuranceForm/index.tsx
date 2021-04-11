import { Row, Col, Form, Input, Select } from 'antd'

const { Option } = Select

const InsuranceForm = () => {
  return (
    <Row gutter={24}>
      <Col span={12}>
        <Form.Item
          name="ticket_amount"
          label="Nro. Boleta de venta"
        >
          <Input placeholder="placeholder" />
        </Form.Item>
      </Col>

      <Col span={12}>
        <Form.Item
          name="ticket_number"
          label="Valor de los productos"
        >
          <Input placeholder="placeholder" />
        </Form.Item>
      </Col>

      <Col span={12}>
        <Form.Item
          name="detail"
          label="Detalles"
        >
          <Input placeholder="placeholder" />
        </Form.Item>
      </Col>

      <Col span={12}>
        <Form.Item
          name="extra"
          label="Seguro adicional?"
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
