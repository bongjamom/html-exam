import "./App.css";
import { BannerLowerBlock } from "./BannerLowerBlock";
import "./style.css";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(10);
  return (
    <>
      <Header />
      <main>
        <Content number={number} />
        <Aside
          increase={() => {
            setNumber(number + 1);
          }}
        />
      </main>
      <Footer />
    </>
  );
}

let Aside = function (props) {
  console.log("call aside");
  return (
    <aside>
      <button>로그인</button>
      <br />
      <a href="#">회원가입</a>
      <a href="#">ID/PW찾기</a>
      <br />
      <input
        type="button"
        value="+1"
        onClick={() => {
          props.increase();
        }}
      />
    </aside>
  );
};

let BoardItemBlock = (props) => {
  console.log("call BoardItemBlock");
  return (
    <div className="board-item">
      <img src="https://via.placeholder.com/80" alt="섬네일" />
      <div>
        <h3>글 제목</h3>
        <p>글 내용 {props.number}</p>
      </div>
    </div>
  );
};
let BoardListBlock = (props) => {
  console.log("call BoardListBlock");
  return (
    <div className="board-list">
      <BoardItemBlock number={props.number} />
      <BoardItemBlock number={props.number} />
      <BoardItemBlock number={props.number} />
      <BoardItemBlock number={props.number} />
    </div>
  );
};

let Content = (props) => {
  console.log("call Content");
  return (
    <div>
      <div>
        <img src="https://via.placeholder.com/600x120" alt="메인 배너" />
        <h3>텍스트 제목</h3>
        <p>텍스트 내용</p>
      </div>
      <BoardListBlock number={props.number} />
      <div>
        <h2>이 황금시대 ...</h2>
      </div>
      <h2>우리 청춘</h2>
      <BannerLowerBlock />
      <BannerLowerBlock />
      <BannerLowerBlock />
    </div>
  );
};

function Header() {
  return (
    <header>
      <div>
        <img src="https://via.placeholder.com/300x60" alt="logo" />
      </div>
      <div>
        <a href="#">홈</a>
        <a href="#">게시판</a>
      </div>
    </header>
  );
}

function Footer() {
  return <footer>copyright 2023/05/12 TJ</footer>;
}
export default App;
