import { useSelector } from 'react-redux'
import { Row, Col, Form, Input, Select } from 'antd'

const { Option } = Select

const DestinyForm = () => {
  const {
    commune: { communes }
  } = useSelector((state: any) => state)

  return (
    <Row gutter={24}>
      <Col span={12}>
        <Form.Item
          name="street"
          label="Calle"
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
          name="number"
          label="Numero de calle"
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
          name="commune_id"
          label="Comuna"
          rules={[{ required: true, message: 'Province is required' }]}
        >
          <Select placeholder="Destino">
            {
              communes.map((commune, index) => (
                <Option key={index} value={commune.id}>{commune.name}</Option>
              ))
            }
          </Select>
        </Form.Item>
      </Col>

      <Col span={12}>
        <Form.Item
          name="complement"
          label="Referencia"
        >
          <Input placeholder="placeholder" />
        </Form.Item>
      </Col>

      <Col span={12}>
        <Form.Item
          name="full_name"
          label="Nombre completo"
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
          name="email"
          label="Email de contacto"
        >
          <Input placeholder="placeholder" />
        </Form.Item>
      </Col>

      <Col span={12}>
        <Form.Item
          name="phone"
          label="Telefono de contacto"
        >
          <Input placeholder="placeholder" />
        </Form.Item>
      </Col>
    </Row>
  )
}

export default DestinyForm
