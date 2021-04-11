import { FC, useState } from 'react'
import { HomeLayout } from '@components'
import Head from 'next/head'
import styles from '@styles/Quotes.module.scss'

import { Steps, Button, message, Row, Col, Form, Input } from 'antd';
const { Step } = Steps;

const QuotesForm = () => (
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
  </Row>
)


const steps = [
  {
    title: 'First',
    content: <QuotesForm/>,
  },
  {
    title: 'Second',
    content: 'Second-content',
  },
  {
    title: 'Last',
    content: 'Last-content',
  },
];

const Quotes: FC = () => {
  const [current, setCurrent] = useState(0);
  const [form] = Form.useForm();

  const send = () => {
    form.submit();
  };

  const next = () => {
    setCurrent(current + 1);
  }

  const prev = () => {
    setCurrent(current - 1);
  };

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
    setCurrent(current + 1);
  };

  return (
    <>
      <Head>
        <title>Cotizador</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeLayout>
        <div style={{ height: '100vh' }}>
          <Steps current={current}>
            {steps.map(item => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
          <Form
            form={form}
            name="advanced_search"
            onFinish={onFinish}
          >
            <div className={styles.steps_content}>
              {steps[current].content}
            </div>
            <div className={styles.steps_action}>
              {current == 0 && (
                <Button type="primary" onClick={() => send()}>
                  Cotizar
                </Button>
              )}
              {current != 0 && current < steps.length - 1 && (
                <Button type="primary" onClick={() => next()}>
                  Next
                </Button>
              )}
              {current === steps.length - 1 && (
                <Button type="primary" onClick={() => message.success('Processing complete!')}>
                  Done
                </Button>
              )}
              {current > 0 && (
                <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                  Previous
                </Button>
              )}
            </div>
          </Form>
        </div>
      </HomeLayout>
    </>
  )
}

export default Quotes
