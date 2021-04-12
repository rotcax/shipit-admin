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
              message: 'Ingrese un campo valido',
            },
          ]}
        >
          <Input placeholder="Calle" />
        </Form.Item>
      </Col>

      <Col span={12}>
        <Form.Item
          name="number"
          label="Numero de calle"
          rules={[
            {
              required: true,
              message: 'Ingrese un campo valido',
            },
          ]}
        >
          <Input placeholder="Nro. Calle" />
        </Form.Item>
      </Col>

      <Col span={12}>
        <Form.Item
          name="commune_id"
          label="Comuna"
          rules={[{ required: true, message: 'El campo es requerido' }]}
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
          <Input placeholder="Referencia" />
        </Form.Item>
      </Col>

      <Col span={12}>
        <Form.Item
          name="full_name"
          label="Nombre completo"
          rules={[
            {
              required: true,
              message: 'Ingrese un campo valido',
            },
          ]}
        >
          <Input placeholder="Nombre completo" />
        </Form.Item>
      </Col>

      <Col span={12}>
        <Form.Item
          name="email"
          label="Email de contacto"
        >
          <Input placeholder="Email" />
        </Form.Item>
      </Col>

      <Col span={12}>
        <Form.Item
          name="phone"
          label="Telefono de contacto"
        >
          <Input placeholder="Telefono" />
        </Form.Item>
      </Col>
    </Row>
  )
}

export default DestinyForm
