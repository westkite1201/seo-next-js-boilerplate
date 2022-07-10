import { useNaviState } from 'store/navi/hooks'
import { AppDispatch } from 'store'
import { setPath } from 'store/navi/actions'
import { useDispatch, useSelector } from 'react-redux'

declare global {
  interface Window {
    web3: any
  }
}

const IndexPage = ({ theme }) => {
  const dispatch = useDispatch<AppDispatch>()

  return <div></div>
}

export default IndexPage
