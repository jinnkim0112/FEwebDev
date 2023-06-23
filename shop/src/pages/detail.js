import { useParams } from "react-router-dom";

function DetailPage(props) {

  let {id} = useParams();

  let [shoe] = props.shoes.filter(x=>x.id==id);
  console.log(shoe);

  if(0 <= id < props.shoes.length) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={"https://codingapple1.github.io/shop/shoes"+(shoe.id+1)+".jpg"} width="100%" />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{shoe.title}</h4>
            <p>{shoe.content}</p>
            <p>{shoe.price}원</p>
            <button className="btn btn-danger">주문하기</button> 
          </div>
        </div>
      </div> 
    )
  }
  return (
    <div>wrong page</div>
  )
}

export default DetailPage;