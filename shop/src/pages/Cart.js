import Table from 'react-bootstrap/Table'
import { useDispatch, useSelector } from 'react-redux'
import { changeAge, changeName, decCnt, incCnt } from '../store'

function Cart() {

  let state = useSelector((state)=> state)
  let data = state.cartData
  let dispatch = useDispatch()

  return (
    <div>

      <h6>{state.user.name}의 장바누니</h6>
      <button onClick={()=>{
        dispatch(changeAge(100))
      }}>{state.user.age}</button>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map(function(x){
              return (
                <tr key={x.id}>
                  <td>{x.id}</td>
                  <td>{x.name}</td>
                  <td>{x.count}</td>
                  <td><button onClick={()=>{
                    dispatch(incCnt(x.id))
                  }}>+</button>
                  <button onClick={()=>{
                    dispatch(decCnt(x.id))
                  }}>-</button></td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </div>
  )
}

export default Cart