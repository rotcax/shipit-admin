import { FC, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Form, Input, Button, Card } from 'antd'
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
  const {
    auth: { email, hasRemember, isAuth },
    intermitence: { currentPath }
   } = useSelector((state: any) => state)

  const dispatch = useDispatch()
  const router = useRouter()

  useEffect(() => {
    if(isAuth) router.push(currentPath)
  }, [isAuth])

  const onFinish = (values: any) => {
    dispatch(login(values))
  }

  return (
    <>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {
        isAuth ? <p>Redirecting...</p> : (
          <div className={styles.container}>
            <div className={`site-card-border-less-wrapper ${styles.card_container}`}>
              <Card title="Login" bordered={true}>
                <Form
                  {...layout}
                  name="basic"
                  initialValues={{ remember: hasRemember, email }}
                  onFinish={onFinish}
                >
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Debe ingresar un campo valido' }]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    label="Contraseña"
                    name="password"
                    rules={[{ required: true, message: 'Debe ingresar un campo valido' }]}
                  >
                    <Input.Password />
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
        )
      }
    </>
  )
}

export default Login
