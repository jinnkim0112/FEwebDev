import './App.css';
import React, { useState } from 'react';

function App() {
  let postName = '강남 우동 맛집';              // 이 부분은 바뀌어도 html 자동변경 안됨
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '라면 추천', '파이썬 강의']); // 이 부분은 바뀌면 html 자동 재렌더링
  let [따봉, 따봉변경] = useState(0);


  let [따봉들, 따봉들변경] = useState([...글제목].map(function(){return 0;}));
  let [modal, setModal] = useState(-1);
  let [입력값, 입력값변경] = useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그임</h4>
      </div>

      {/* <button onClick = {()=>{ // function 자동으로 만드는 함수
        let copy = [...글제목];
        copy.sort();
        글제목변경(copy);       // 얘를 통해 글제목 변경 가능
      }}>가나다순정렬</button>
      <button onClick = {()=>{
        let copy = [...글제목];
        copy[0] = '여자 코트 추천';
        글제목변경(copy);
      }}>글제목변경</button>

      <div className='list'>
        <h4 style = {{textAlign : 'center'}}>{ postName }</h4>
        <p style={{fontSize : '10px', textAlign : 'right', paddingRight : '20px'}}>날짜는 여기감</p>
      </div>

      <div className='list'>
        <h4>{ 글제목[0] }<span onClick={ () => { 따봉변경(따봉 + 1) } }>👍</span>{ 따봉 }</h4>
        <p>날짜</p>
      </div> */}

      

      {
        글제목.map(function(x, i){
          return (
          <div className='list' key={i}>
            <h4>
              <span onClick={()=>{setModal(modal === i ? -1 : i)}}>{ x }</span>
              <span onClick={()=>{
                let copy = [...따봉들];
                copy[i] = 따봉들[i]+1;
              따봉들변경(copy)
              }}>
                👍
              </span>
              { 따봉들[i] }
              </h4>
            <p>날짜</p>
            <button onClick={() => {
              let copy = [...글제목];
              copy.splice(i, 1);
              글제목변경(copy)
            }}>del</button>
          </div>
        )
        })
      }


      {
        modal !== -1 ? <Modal 글제목={글제목} modal={modal} 글제목변경={글제목변경}/> : null
      }

      <input onChange={(e)=>{
        입력값변경(e.target.value)
      }}/>
      <button onClick={() => {
        let copy = [...글제목];
        copy.unshift(입력값);
        글제목변경(copy)
      }}>만들기</button>

      <Modal2></Modal2>
    </div>
  );
}

class Modal2 extends React.Component {
  constructor(){
    super();
    this.state = {
      name : 'kim',
      age : 20
    };
  }
  render(){
    return(
      <div> 안녕 {this.state.age}
        <button onClick={()=>{
          this.setState({age : 21})
        }}>버튼</button>
      </div>
    )
  }
}

function Modal(props){ // 대문자여야함
  return(
    <div className='model'>
      <h4>{props.글제목[props.modal]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={()=>{let copy = [...props.글제목];
        copy[0] = '여자 코트 추천';
        props.글제목변경(copy)}}>글수정</button>
    </div>
  )
}

export default App;
