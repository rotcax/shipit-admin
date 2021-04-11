import { FC, useState } from 'react'
import { HomeLayout } from '@components'
import Head from 'next/head'
import styles from '@styles/Quotes.module.scss'

import { Steps, Button, message } from 'antd';
const { Step } = Steps;

const steps = [
  {
    title: 'First',
    content: 'First-content',
  },
  {
    title: 'Second',
    content: 'Second-content',
  },
  {
    title: 'Last',
    content: 'Last-content',
  },
];

const Quotes: FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
      <Head>
        <title>Cotizador</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeLayout>
        <>
          <Steps current={current}>
            {steps.map(item => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
          <div className={styles.steps_content}>{steps[current].content}</div>
          <div className={styles.steps_action}>
            {current < steps.length - 1 && (
              <Button type="primary" onClick={() => next()}>
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button type="primary" onClick={() => message.success('Processing complete!')}>
                Done
              </Button>
            )}
            {current > 0 && (
              <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                Previous
              </Button>
            )}
          </div>
        </>
      </HomeLayout>
    </>
  )
}

export default Quotes
