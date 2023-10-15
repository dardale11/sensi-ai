import { FC } from 'react'
import './Alert.css'

interface Props {
  cancel: () => void
}

const Alert: FC<Props> = ({ cancel }) => {
  return (
    <div className='alert-container'>
      <h1 className='alert-message'>Pulse Is High!</h1>
      <button className='alert-button' onClick={() => cancel()}>ok</button>
    </div>
  )
}

export default Alert