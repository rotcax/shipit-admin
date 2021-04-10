import { FC, useState, createElement, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Layout, Menu, Button, Tooltip } from 'antd'
import { useRouter } from 'next/router'
import { logout } from '@store/actions'
import { HomeLayoutProps } from '@types'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  LogoutOutlined
 } from '@ant-design/icons'
import styles from './styles.module.scss'

const { Header, Sider, Content } = Layout

const HomeLayout: FC<HomeLayoutProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false)
  const { auth: { accessToken } } = useSelector((state: any) => state)

  const dispatch = useDispatch()
  const router = useRouter()

  useEffect(() => {
    if(!accessToken) router.replace('/login')
  }, [accessToken])

  const toggle = () => setCollapsed(!collapsed)
  const logoutApp = () => dispatch(logout())

  return (
    <>
      {
        !accessToken ? < p>Redirecting...</p> : (
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
                    <Button shape="circle" icon={<LogoutOutlined />} onClick={logoutApp} />
                  </Tooltip>
                </div>
              </Header>
              <Content
                className={`${styles.site_layout_background} ${styles.site_layout_separation}`}
              >
              {children}
              </Content>
            </Layout>
          </Layout>
        )
      }
    </>
  )
}

export default HomeLayout
