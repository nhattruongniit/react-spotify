import { FC, useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

type IProps = {
  selector?: string
}

const Portal: FC<IProps> = ({ children, selector = 'div'}) => {
  const [container] = useState(document.createElement(selector))

  useEffect(() => {
    document.body.appendChild(container)

    return () => {
      document.body.removeChild(container)
    }
  }, [container])

  return ReactDOM.createPortal(children, container)
}

export default Portal
