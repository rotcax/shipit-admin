import { FC, useState, createElement, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { Layout, Menu, Button, Tooltip } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  LogoutOutlined
 } from '@ant-design/icons'
import Head from 'next/head'
import styles from '@styles/Home.module.scss'

const { Header, Sider, Content } = Layout

const Home: FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const router = useRouter()
  const { auth: { isAuth } } = useSelector((state: any) => state)

  const toggle = () => setCollapsed(!collapsed)

  useEffect(() => {
    if(!isAuth) router.replace('/login')
  }, [isAuth])

  return (
    <>
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        !isAuth ? <p>Redirecting...</p> : (
          <Layout className={styles.container}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
              <div className={styles.logo} />
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" icon={<UserOutlined />}>
                  Inicio
                </Menu.Item>
                <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                  Destinos
                </Menu.Item>
                <Menu.Item key="3" icon={<UploadOutlined />}>
                  Cotizador
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout className={styles.site_layout}>
              <Header className={`${styles.site_layout_background} ${styles.header_container}`}>
                <div className={styles.trigger_container}>
                  {createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: styles.trigger,
                    onClick: toggle,
                  })}
                </div>
                <div className={styles.logout_button_container}>
                  <Tooltip title="Salir">
                    <Button shape="circle" icon={<LogoutOutlined />} />
                  </Tooltip>
                </div>
              </Header>
              <Content
                className={`${styles.site_layout_background} ${styles.site_layout_separation}`}
              >
                Content
              </Content>
            </Layout>
          </Layout>
        )
      }
    </>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}

export default Home
