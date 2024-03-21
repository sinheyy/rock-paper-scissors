import React, { Component } from 'react'
import BoxClass from './component/BoxClass'

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
    },
    default: {
        name: "default",
        img: "https://cdn-icons-png.flaticon.com/128/25/25333.png"
    }
}

export default class AppClass extends Component {
    // constructor
    constructor(props) {
        super(props)
        this.state = {
            userSelect: choice.default,
            computerSelect: choice.default,
            result: "",
            userScore: 0,
            comScore: 0
        }
    }

    // user가 버튼을 클릭할 때,
    play = (userChoice) => {
        // computerChoice 랜덤하게 값 받아서 set
        let computerChoice = this.randomChoice();

        this.setState({
            userSelect: choice[userChoice],
            computerSelect: computerChoice,
            result: this.judgement(choice[userChoice], computerChoice)
        });

        this.count(this.judgement(choice[userChoice], computerChoice));

    }

    // 승패 판단
    judgement = (user, computer) => {

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

    // random하게 고른 값을 반환 - computerChoice가 될 예정
    randomChoice = () => {
        let itemArray = Object.keys(choice);  // choice 객체를 배열화 - 객체의 key 값만 뽑아서 array로 바꿔줌
        console.log("item array", itemArray);
        let randomItem = Math.floor(Math.random() * (itemArray.length - 1));  // 0~3 random 발생
        let final = itemArray[randomItem];    // random 하게 rock/paper/scissors 중 고름
        return choice[final];                 // 객체 반환
    }

    // 점수 계산
    count = (result) => {
        // result에 따른 점수 계산
        if (result == "win") {
            this.setState({
                userScore: this.state.userScore + 1
            });
        }
        else if (result == "lose") {
            this.setState({
                comScore: this.state.comScore + 1
            });
        }

    }

    // 점수 reset
    reset = () => {
        this.setState({
            userScore: 0,
            comScore: 0,
            userSelect: choice.default,
            computerSelect: choice.default,
            result: ""
        });

    }

    render() {
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
                    <h1>{this.state.userScore} : {this.state.comScore}</h1>
                </div>
                <div className='main'>
                    <BoxClass title="YOU" item={this.state.userSelect} result={this.state.result} />
                    <BoxClass title="COMPUTER" item={this.state.computerSelect} result={this.state.result} />
                </div>
                <div className='main'>
                    <button className='btn' onClick={() => this.play("scissors")}>가위</button>
                    <button className='btn' onClick={() => this.play("rock")}>바위</button>
                    <button className='btn' onClick={() => this.play("paper")}>보</button>
                </div>
                <div className='main'>
                    <button className='btn2' onClick={() => this.reset()}>다시</button>
                </div>
                <div className='main'>
                    <h3>규칙 : 이기면 +1, 비기면 +0</h3>
                </div>
            </div>
        )
    }
}
