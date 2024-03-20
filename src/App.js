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
    img: "https://cdn-icons-png.flaticon.com/128/9496/9496176.png"
  },
  scissors: {
    name: "Scissors",
    img: "https://cdn-icons-png.flaticon.com/128/9534/9534501.png"
  },
  paper: {
    name: "Paper",
    img: "https://cdn-icons-png.flaticon.com/128/12355/12355903.png"
  }
}

function App() {
  const [userSelect, setUserSelect] = useState(null);           // 사용자 선택을 위한 useState
  const [computerSelect, setComputerSelect] = useState(null);   // 컴퓨터 선택을 위한 useState
  const [result, setResult] = useState("");                     // 승패 결과
  const [userScore, setUserScore] = useState(0);                // user 점수
  const [comScore, setComScore] = useState(0);                   // com 점수

  // user가 버튼을 클릭할 때,
  const play = (userChoice) => {
    console.log("선택됨 - ", userChoice);
    setUserSelect(choice[userChoice]);

    // computerChoice 랜덤하게 값 받아서 set
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);

    // 승패 판단
    setResult(judgement(choice[userChoice], computerChoice));

    count(judgement(choice[userChoice], computerChoice));

  }

  // 승패 판단 - 누나 ver(삼항연산자로 더 깔끔해짐!)
  const judgement = (user, computer) => {
    //console.log("user",user, "com",computer);

    if (user.name == computer.name) {
      return "tie";
    }
    else if (user.name == "Rock")
      return computer.name == "Scissors" ? "win" : "lose";
    else if (user.name == "Scissors")
      return computer.name == "Paper" ? "win" : "lose";
    else if (user.name == "Paper")
      return computer.name == "Rock" ? "win" : "lose";

  }

  // 승패 판단 - if로 경우 다 따지는 버전
  const judgement2 = (user, computer) => {
    console.log("user", user, "com", computer);

    // 비긴 경우
    if (user.name == computer.name) {
      console.log("tie");
    }

    // user가 가위로 이긴 경우
    if (user.name == "Scissors" && computer.name == "Paper") {
      console.log("user win");
    }
    else if (user.name == "Scissors" && computer.name == "Rock") {
      console.log("com win");
    }

    // user가 바위로 이긴 경우
    if (user.name == "Rock" && computer.name == "Scissors") {
      console.log("user win");
    }
    else if (user.name == "Rock" && computer.name == "Paper") {
      console.log("com win");
    }

    // user가 보로 이긴 경우
    if (user.name == "Paper" && computer.name == "Rock") {
      console.log("user win");
    }
    else if (user.name == "Paper" && computer.name == "Scissors") {
      console.log("com win");
    }
  }

  // random하게 고른 값을 반환 - computerChoice가 될 예정
  const randomChoice = () => {
    let itemArray = Object.keys(choice);  // choice 객체를 배열화 - 객체의 key 값만 뽑아서 array로 바꿔줌
    console.log("item array", itemArray);
    let randomItem = Math.floor(Math.random() * itemArray.length);  // 0~3 random 발생
    let final = itemArray[randomItem];    // random 하게 rock/paper/scissors 중 고름
    return choice[final];                 // 객체 반환
  }

  // 점수 계산
  const count = (result) => {
    // result에 따른 점수 계산
    if (result == "win") {
      setUserScore(userScore + 1);
    }
    else if (result == "lose") {
      setComScore(comScore + 1);
    }

    //console.log("result", result,"user:", userScore, "com:", comScore);
  }

  // 점수 reset
  const reset = () => {
    setUserScore(0);
    setComScore(0);

    // 화면 reset 도전!
    setUserSelect(null);
    setComputerSelect(null);
    setResult("");
  }

  return (
    <div>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Orbit&display=swap')
      </style>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap')
      </style>
      <div className='title'>
        <h1>가위! 바위! 보!</h1>
      </div>
      <div className='score'>
        <h1>{userScore} : {comScore}</h1>
      </div>
      <div className='main'>
        <Box title="YOU" item={userSelect} result={result} />
        <Box title="COMPUTER" item={computerSelect} result={result} />
      </div>
      <div className='main'>
        <button className='btn' onClick={() => play("scissors")}>가위</button>
        <button className='btn' onClick={() => play("rock")}>바위</button>
        <button className='btn' onClick={() => play("paper")}>보</button>
      </div>
      <div className='main'>
        <button className='btn2' onClick={() => reset()}>다시</button>
      </div>
      <div className='main'>
        <h3>규칙 : 이기면 +1, 비기면 +0</h3>
      </div>
    </div>
  );
}

export default App;