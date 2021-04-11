import { Row, Col, Form, Input, Select } from 'antd'

const SizesForm = () => {
  return (
    <Row gutter={24}>
      <Col span={12}>
        <Form.Item
          name="height"
          label="Alto"
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
          name="width"
          label="Ancho"
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
          name="length"
          label="Largo"
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
          name="weight"
          label="Peso"
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
    </Row>
  )
}

export default SizesForm
