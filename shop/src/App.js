import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createContext, useEffect, useState} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Route, Link, Routes, useNavigate } from 'react-router-dom';
import DetailPage from './pages/detail.js';
import shoeData from './data.js';
import axios from 'axios';
import Cart from './pages/Cart.js'
// import 배경 from './img/bg.png';

export let Contex1 = createContext();

function App() {

  let obj = {name : 'kim'}
  localStorage.setItem('data', JSON.stringify(obj))
  let 꺼낸거 = localStorage.getItem('data')
  let watch = []
  
  useEffect(()=>{
    localStorage.setItem('watched', JSON.stringify(watch))
  }, [])

  let [shoes, updateShoes] = useState(shoeData);
  let [재고] = useState([10,11,12]);

  let [getServer, updateGetServer] = useState(2);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail/0')}}>Pricing</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/about')}}>About</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/cart')}}>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={
          <>
            <div className='main-bg'></div>
            {/* <div style={{backgroundPosition: 'center', height : '600px', backgroundSize : 'cover', backgroundImage : 'url('+배경+')'}}></div> */}
            <div className="container">
              <div className="row">
                {
                  shoes.map(function(x){
                    return (
                      <div className="col-md-4" key={x} onClick={()=>{navigate('/detail/'+x.id)}}>
                        <img src={"https://codingapple1.github.io/shop/shoes"+(x.id+1)+".jpg"} width="80%" />
                        <h4>{x.title}</h4>
                        <p>{x.price}</p>
                      </div>
                    )
                  })
                }
              </div>
            </div> 
            <button onClick={()=>{
              if(getServer>3) {
                alert('no more products')
                return
              }
              axios.get('https://codingapple1.github.io/shop/data'+getServer+'.json')
              .then((result)=>{
                let copy = [...shoes, ...result.data]
                updateGetServer(getServer+1)
                updateShoes(copy)
              })
              .catch(()=>{console.log('404 not found')})
            }}>버튼</button>
          </>
        }/>
        <Route path='/detail/:id' element={
          <Contex1.Provider value={{재고}}>
            <DetailPage shoes={shoes}/>
          </Contex1.Provider>
        }/>
        <Route path='/about' element={<About/>}>
          <Route path='member' element={<div>멤버페이지</div>}/>
          <Route path='location' element={<About/>}/>
        </Route>

        <Route path='/cart' element={
          <Cart/>
        }/>

        <Route path="*" element={<div>404 NotFound</div>}/>
      </Routes>

    
      
    </div>
  );
}

function About(){
  return (
    <div>
      <h4>회사정보</h4>
      <Link to='/about/member'>member</Link>
      <> </>
      <Link to='./location'>location</Link> {/* 잘못될 수 있는 코드 */}
      <Outlet></Outlet> {/* nested route (그러니까 child directory)는 여기에 */}
    </div>
  )
}

export default App;
