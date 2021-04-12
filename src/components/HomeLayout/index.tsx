import { FC, useState, createElement, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Layout, Menu, Button, Tooltip } from 'antd'
import { useRouter } from 'next/router'
import { logout, saveCurrentPath } from '@store/actions'
import { HomeLayoutProps } from '@types'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  FullscreenOutlined,
  UploadOutlined,
  LogoutOutlined,
  DollarOutlined
} from '@ant-design/icons'
import Link from 'next/link'
import styles from './styles.module.scss'

const { Header, Sider, Content } = Layout

const HomeLayout: FC<HomeLayoutProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false)
  const { auth: { isAuth } } = useSelector((state: any) => state)

  const dispatch = useDispatch()
  const router = useRouter()

  useEffect(() => {
    dispatch(saveCurrentPath(router.pathname))

    if(!isAuth) router.push('/login')
  }, [isAuth])

  const toggle = () => setCollapsed(!collapsed)
  const logoutApp = () => dispatch(logout())

  return (
    <>
      {
        !isAuth ? < p>Redirecting...</p> : (
          <Layout className={styles.container}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
              <div className={styles.logo} />
              <Menu theme="dark" mode="inline" defaultSelectedKeys={[
                router.pathname == '/' ? '1'
                  : router.pathname == '/communes' ? '2'
                  : router.pathname == '/quotes' ? '3'
                  : '4'
              ]}>
                <Menu.Item key="1" icon={<UserOutlined />}>
                  <Link href="/">
                    Inicio
                  </Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<FullscreenOutlined />}>
                  <Link href="/communes">
                    Destinos
                  </Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<DollarOutlined />}>
                  <Link href="/quotes">
                    Cotizador
                  </Link>
                </Menu.Item>
                <Menu.Item key="4" icon={<UploadOutlined />}>
                  <Link href="/shipments">
                    Crear envio
                  </Link>
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
