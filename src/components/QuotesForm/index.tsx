import { useSelector } from 'react-redux'
import { Row, Col, Form, Input, Select } from 'antd'

const { Option } = Select

const QuotesForm = () => {
  const { communes } = useSelector((state: any) => state.commune)

  return (
    <Row gutter={24}>
      <Col span={8}>
        <Form.Item
          name="height"
          label="Alto"
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

      <Col span={8}>
        <Form.Item
          name="width"
          label="Ancho"
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

      <Col span={8}>
        <Form.Item
          name="length"
          label="Largo"
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

      <Col span={8}>
        <Form.Item
          name="weight"
          label="Peso"
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

      <Col span={8}>
        <Form.Item
          name="destiny_id"
          label="Destino"
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
    </Row>
  )
}

export default QuotesForm
