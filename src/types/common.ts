import { ReactElement } from 'react'

export type CredentialsProps = {
  email: string
  password: string
  remember: boolean
}

export type HomeLayoutProps = {
  children: ReactElement
}

export type ColumsProps = {
  title: string
  dataIndex: string | Array<string>
  key: string
}

export type RowContentProps = {
  record: any
}
