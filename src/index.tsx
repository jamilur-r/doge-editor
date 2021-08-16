import * as React from 'react'
import styles from './styles.module.css'
import { Image } from 'react-feather'

interface Props {
  data: any
  setData: any
}

export const DogeEditor = ({ data, setData }: Props) => {
  const [capturedData, setCapturedData] = React.useState<string>()
  const [type, setType] = React.useState('p')

  const renderBody = (item: any): any => {
    switch (item.type) {
      case 'h1':
        return <h1>{item.content}</h1>
      case 'h2':
        return <h2>{item.content}</h2>
      case 'image':
        return (
          <p style={{ color: '#e7e722' }}>Image will placed here later on</p>
        )
      default:
        return <p>{item.content}</p>
    }
  }

  const renderInput = () => {
    switch (type) {
      case 'h1':
        return (
          <input
            className={styles.inputHead}
            value={capturedData}
            onChange={(e) => setCapturedData(e.target.value)}
          />
        )
      case 'h2':
        return (
          <input
            className={styles.inputHead}
            value={capturedData}
            onChange={(e) => setCapturedData(e.target.value)}
          />
        )
      case 'image':
        return (
          <div
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <label className={styles.file}>
              <input
                type='file'
                id='file'
                aria-label='File browser example'
                value={capturedData}
                onChange={(e) => setCapturedData(e.target.value)}
              />
              <span className={styles.fileCustom}></span>
            </label>
          </div>
        )
      default:
        return (
          <textarea
            className={styles.inputPara}
            value={capturedData}
            onChange={(e) => setCapturedData(e.target.value)}
          ></textarea>
        )
    }
  }

  return (
    <div className={styles.container}>
      {data.map((item: any) => (
        <div className={styles.body}>{renderBody(item)}</div>
      ))}
      <div className={styles.inputSection}>
        <div className={styles.inputSectionButtons}>
          <p className={styles.inputType}>{type}</p>
          <button
            className={styles.inputButton}
            onClick={() =>
              {
                setData([...data, { type: type, content: capturedData }])
                setCapturedData("")
              }
            }
          >
            Save
          </button>
        </div>
        {renderInput()}
      </div>
      <div className={styles.buttonArray}>
        <div className={styles.button} onClick={() => setType('h1')}>
          H1
        </div>
        <div className={styles.button} onClick={() => setType('h2')}>
          H2
        </div>
        <div className={styles.button} onClick={() => setType('p')}>
          P
        </div>
        <div className={styles.button} onClick={() => setType('image')}>
          <Image size={18} />
        </div>
      </div>
    </div>
  )
}
