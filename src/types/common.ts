import { ReactElement } from 'react'

export type CredentialsProps = {
  email: string
  password: string
  remember: boolean
}

export type HomeLayoutProps = {
  children: ReactElement
}
