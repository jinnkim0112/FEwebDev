import './App.css';
import { useState } from 'react';

function App() {
  let postName = '강남 우동 맛집';              // 이 부분은 바뀌어도 html 자동변경 안됨
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '라면 추천']); // 이 부분은 바뀌면 html 자동 재렌더링
  let [따봉, 따봉변경] = useState(0);
  

  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그임</h4>
      </div>

      <button onClick = {()=>{ // function 자동으로 만드는 함수
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
      </div>

      <div className='list'>
        <h4>{ 글제목[1] }</h4>
        <p>날짜</p>
      </div>

      <Modal/>

    </div>
  );
}

function Modal(){ // 대문자여야함
  return(
    <div className='model'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
