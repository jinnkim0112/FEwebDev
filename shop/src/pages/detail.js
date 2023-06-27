import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Nav from 'react-bootstrap/Nav';

import {Contex1} from '../App.js';

// let YellowBtn = styled.button`
//   background : ${ props=>props.bg};
//   color : ${ props=>props.bg == 'blue' ? 'white' : 'black' };
//   padding : 10px
// `

function DetailPage(props) {

  let {재고} = useContext(Contex1) // 보통 사용 안함

  let [count, setCount] = useState(true);
  let [update, chgUpdate] = useState(0);
  let [tab, chgTab] = useState(0);
  // let [getInput, chgInput] = useState('');
  let {id} = useParams();
  let shoe = props.shoes.find(x=>x.id==id);
  let [fade, setfade] = useState('')
  
  // mount, update시 일어나는 함수, html 렌더링 후에 사용된다.
  // 즉, html 로딩 한 뒤 해야 하는 연산이 많으면 여기에 넣는 것이 좋음
  // -> 어려운 연산, 서버에서 데이터 가져오는 작업, 타이머 연산
  useEffect(()=>{
    let a = setTimeout(()=>{setCount(false)}, 2000);
    let b = setTimeout(()=>{setfade('end')}, 100)

    // return의 함수(clean up function이라 부름)는 위 코드 실행 이전, unmount시 시행됨
    // 보통 서버 데이터 요청 멈출 때 사용, 여기서는 이걸 사용해서 update시 기존 타이머 제거
    return ()=>{
      clearTimeout(a) // 타이머 제거 함수
      clearTimeout(b);
      setfade('')
    }
  }, []) // 괄호 안이 바뀔 때만 바뀔때만 실행됨(즉, update시 실행x 가능)

  if(0 <= id < props.shoes.length) {
    return (
      <div className={'container start '+ fade}>
        {/* <YellowBtn onClick={()=>{chgUpdate(update+1)}}>{update}</YellowBtn> */}
        {
          count ? <div className="alert alert-warning">2초 이내 구매시 할인</div> : null
        }
        
        <div className="row">
          <div className="col-md-6">
            <img src={"https://codingapple1.github.io/shop/shoes"+(shoe.id+1)+".jpg"} width="100%" />
          </div>

          {/* {
            isNaN(+getInput) ? <div className="alert alert-warning">경고 : 숫자만 입력하세요</div> : null
          }
          <input onChange={(i)=>{chgInput(i.target.value)}}></input> */}

          <div className="col-md-6">
            <h4 className="pt-5">{shoe.title}</h4>
            <p>{shoe.content}</p>
            <p>{shoe.price}원</p>
            <button className="btn btn-danger">주문하기</button> 
          </div>
        </div>

        <Nav variant="tabs"  defaultActiveKey="link0">
          <Nav.Item>
            <Nav.Link onClick={()=>chgTab(0)}>버튼0</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={()=>chgTab(1)}>버튼1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={()=>chgTab(2)}>버튼2</Nav.Link>
          </Nav.Item>
        </Nav>
        <TabContent tab={tab} shoe={shoe}></TabContent>

      </div> 
    )
  }
  return (
    <div>wrong page</div>
  )
}

function TabContent({tab, shoe}){

  let [fade, setfade] = useState('')

  useEffect(()=>{
    let a = setTimeout(()=>{setfade('end')}, 100)
    return ()=>{
      clearTimeout(a);
      setfade('')
    }
  }, [tab])

  return <div className={'start '+ fade}>
    {[
    <div>{shoe.title}</div>,
    <div>내용1</div>,
    <div>내용2</div>
  ][tab]}</div>
}

export default DetailPage;