import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Route, Link, Routes, useNavigate } from 'react-router-dom';
import DetailPage from './pages/detail.js';
import shoeData from './data.js';
// import 배경 from './img/bg.png';

function App() {

  let [shoes] = useState(shoeData);
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
                    <div className="col-md-4">
                      <img src={"https://codingapple1.github.io/shop/shoes"+(x.id+1)+".jpg"} width="80%" />
                      <h4>{x.title}</h4>
                      <p>{x.price}</p>
                    </div>
                  )
                })
              }
            </div>
          </div> 
          </>
        }/>
        <Route path='/detail/:id' element={<DetailPage shoes={shoes}/>}/>
        <Route path='/about' element={<About/>}>
          <Route path='member' element={<div>멤버페이지</div>}/>
          <Route path='location' element={<About/>}/>
        </Route>


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
