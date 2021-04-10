import { FC, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Form, Input, Button, Checkbox, Card } from 'antd'
import { useRouter } from 'next/router'
import { login } from '@store/actions'
import Head from 'next/head'
import styles from '@styles/Login.module.scss'

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 16 },
}

const tailLayout = {
  wrapperCol: { offset: 5, span: 16 },
}

const Login: FC = () => {
  const { email, hasRemember, isAuth } = useSelector((state: any) => state.auth)
  const dispatch = useDispatch()
  const router = useRouter()

  const onFinish = (values: any) => {
    dispatch(login(values))
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  useEffect(() => {
    if(isAuth) router.replace('/')
  }, [isAuth])

  return (
    <>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <div className={`site-card-border-less-wrapper ${styles.card_container}`}>
          <Card title="Login" bordered={true}>
            <Form
              {...layout}
              name="basic"
              initialValues={{ remember: hasRemember, username: email }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="Username"
                name="email"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </div>
      </div>
    </>
  )
}

export default Login
