import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { initializeOrder } from "../../actions/orderActions"

const Order = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.login)
  useEffect(()=>{
    dispatch(initializeOrder(user.id))
  },[dispatch, user])
}

export default Order