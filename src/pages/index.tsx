import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
 } from '@ant-design/icons';
import Head from 'next/head'
import styles from '@styles/Home.module.scss'

const { Header, Sider, Content } = Layout;

export default function Home() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout style={{ height: '100vh' }}>
        <Sider trigger={null} collapsible /*collapsed={this.state.collapsed}*/>
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
            {/* {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })} */}
          </Header>
          <Content
            className={styles.site_layout_background}
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </>
  )
}
