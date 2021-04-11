import { Row, Col, Form, Input, Select } from 'antd'

const SellerForm = () => {
  return (
    <Row gutter={24}>
      <Col span={12}>
        <Form.Item
          name="name"
          label="Nombre del e-commerce"
        >
          <Input placeholder="placeholder" />
        </Form.Item>
      </Col>

      <Col span={12}>
        <Form.Item
          name="seller_id"
          label="ID de la venta"
        >
          <Input placeholder="placeholder" />
        </Form.Item>
      </Col>
    </Row>
  )
}

export default SellerForm
