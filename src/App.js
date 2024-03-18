import { useState } from 'react';
import './App.css';
import Box from './component/Box';

// 1. 박스 2개 - title(you/computer), 사진, 결과
// 2. 버튼 3개 - 가위/바위/보
// 3. 버튼을 클릭 시 클릭한 값이 박스에 표시됨
// 4. 컴퓨터는 랜덤하게 값 선택
// 5. 3, 4번의 결과를 가지고 누가 이겼는지 승패 따지기
// 6. 승패 결과에 따른 박스 테두리 색 변경(이기면 초록 지면 빨강 비기면 검정)

const choice = {
  rock: {
    name: "Rock",
    img: "https://t3.ftcdn.net/jpg/04/42/06/24/360_F_442062431_Wc6nHEWjQuM0MU5K7gYWOFIYdEcKquTm.jpg"
  },
  scissors: {
    name: "Scissors",
    img: "https://media.istockphoto.com/id/1146263300/vector/scissors-vector-design-illustration-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=mwp4-CXaKtvIq9VLvJbFtt94KhWmBPXJC9fFgrcPi3k="
  },
  paper: {
    name: "Paper",
    img: "https://media.istockphoto.com/id/1354369215/vector/black-and-white-vector-illustration-of-a-childrens-activity-coloring-book-page-with-pictures.jpg?s=612x612&w=0&k=20&c=jNdKmA8WAuHi2p-83Mz0cZx7E-9_ZXc1zFYiFEl9jg8="
  }
}

function App() {
  const [userSelect, setUserSelect] = useState(null);

  const play = (userChoice) => {
    console.log("선택됨 - ", userChoice);
    setUserSelect(choice[userChoice]);
    
  }

  return (
    <div>
      <div className='main'>
        <Box title="YOU" item={userSelect}/>
        {/*<Box title="COMPUTER" />*/}
      </div>
      <div className='main'>
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
