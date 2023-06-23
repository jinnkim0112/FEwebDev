This is for webdev

- git 하는 법
git add .
git commit -m 'message'
git push

- 리액트 프로젝트 생성
폴더 만들기
shift + 우클릭 여기서 powershell 열기
터미널에 npx create-react-app blog

- 미리보기
npm start

- CSS 도와주는 library
귀찮을 때 - bootstrap (react bootstrap)
이렇게 디자인하면 좋음 tailwind MUI

- 위 라이브러리 까는 법
홈페이지에 들어가서 하라는대로 하기 -> react bootstrap 홈페이지

- build하기
npm build
build 폴더 안의 내용을 jinnkim0112.github.io에 넣기, jinnkim0112.github.io로 들어가면 홈페이지 확인 가능.
아니면 그냥 아무 github repository에 들어가서 build 내용 집어넣기, jinnkim0112.github.io/경로이름 으로 가서 홈페이지 확인 가능

- 다른 파일 참조
data.js에 변수, 함수, 등등을 만들고 export default 변수이름;
사용되는 .js 파일에 import 이름 from './data.js'; 하고 usestate(이름); 해서 사용

- router
npm install react-router-dom@6

index.js에 <Apps/>를 <BrowserRouter><BrowserRouter/> 사이에 끼우기
(그러면 import { BrowserRouter } from "react-router-dom"; 라이브러리 자동 만들어질텐데 안되면 직접 하기)

App.js에 들어가서 쓸 위치에 <Routes><Route path='/' element={}/></Routes>를 집어넣고 path에 route 쓰고 싶은 path, element에 사용할 jsx 넣기(<></> 안에 넣어서 쓰기)