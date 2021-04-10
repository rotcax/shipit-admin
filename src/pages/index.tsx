import { FC, useState, createElement } from 'react'
import { Layout, Menu } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
 } from '@ant-design/icons'
import Head from 'next/head'
import styles from '@styles/Home.module.scss'

import { HOST_API_URI, HOST_PRICE_URI } from '@utils/path'

const { Header, Sider, Content } = Layout

const Home: FC = () => {
  const [collapsed, setCollapsed] = useState(false)

  const toggle = () => setCollapsed(!collapsed)

  return (
    <>
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
          <Header className={styles.site_layout_background} style={{ padding: 0 }}>
            {createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: styles.trigger,
              onClick: toggle,
            })}
          </Header>
          <Content
            className={`${styles.site_layout_background} ${styles.site_layout_separation}`}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </>
  )
}

export async function getServerSideProps(context) {
  console.log(HOST_PRICE_URI);

  return {
    props: {}, // will be passed to the page component as props
  }
}

export default Home
