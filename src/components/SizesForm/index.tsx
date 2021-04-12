import { Row, Col, Form, Input } from 'antd'

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
              message: 'Ingrese un campo valido',
            },
          ]}
        >
          <Input placeholder="Alto" />
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
              message: 'Ingrese un campo valido',
            },
          ]}
        >
          <Input placeholder="Ancho" />
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
              message: 'Ingrese un campo valido',
            },
          ]}
        >
          <Input placeholder="Largo" />
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
              message: 'Ingrese un campo valido',
            },
          ]}
        >
          <Input placeholder="Peso" />
        </Form.Item>
      </Col>

      <Col span={12}>
        <Form.Item
          name="items"
          label="Cantidad"
          rules={[
            {
              required: true,
              pattern: new RegExp(/^\d+$/),
              message: 'Ingrese un campo valido',
            },
          ]}
        >
          <Input placeholder="Cantidad" />
        </Form.Item>
      </Col>
    </Row>
  )
}

export default SizesForm
