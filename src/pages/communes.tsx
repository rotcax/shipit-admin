import { FC, useState } from 'react'
import { useSelector } from 'react-redux'
import { Table, Input, Space, Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { HomeLayout, RowContent } from '@components'
import { ColumsProps } from '@types'
import Highlighter from 'react-highlight-words'
import Head from 'next/head'
import styles from '@styles/Communes.module.scss'

const Communes: FC = () => {
  const [searchText, setSearchText] = useState('')
  const [searchedColumn, setSearchedColumn] = useState('')

  const { commune: { communes } } = useSelector((state: any) => state)

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm()

    setSearchText(selectedKeys[0])
    setSearchedColumn(dataIndex)
  }

  const handleReset = clearFilters => {
    clearFilters()
    setSearchText('')
  }

  const getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div className={styles.space}>
        <Input
          placeholder={`Que desea buscar?`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          className={styles.input}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            className={styles.button}
          >
            Buscar
          </Button>
          <Button onClick={() => handleReset(clearFilters)} size="small" className={styles.button}>
            Resetear
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    render: text =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  })

  const columns: Array<ColumsProps> = [
    {
      title: 'Nombre de la comuna',
      dataIndex: 'name',
      key: 'name',
      ...getColumnSearchProps('name'),
    },
    {
      title: 'Nombre de la region',
      dataIndex: ['region', 'name'],
      key: 'region_name'
    }
  ]

  return (
    <>
      <Head>
        <title>Destinos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeLayout>
        <div className={styles.container}>
          <Table
            rowKey={record => record.id}
            columns={columns}
            pagination={{ defaultPageSize: 15 }}
            expandable={{
              expandedRowRender: record => <RowContent record={record} />,
              rowExpandable: record => record.name !== 'Not Expandable'
            }}
            dataSource={communes}
          />
        </div>
      </HomeLayout>
    </>
  )
}

export default Communes
