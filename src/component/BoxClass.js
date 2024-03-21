import React, { Component } from 'react'

export default class BoxClass extends Component {
    render() {

        let result, result2;

        // props.result가 빈 값이 아니라면
        if (this.props.result != "") {

            // tie일 경우는 그대로 tie
            if (this.props.result == "tie") {
                result = "tie";
            }
            // YOU는 props.result 그대로
            else if (this.props.title == "YOU") {
                result = this.props.result;
            }
            // COMPUTER는 반대로
            else if (this.props.title == "COMPUTER") {
                this.props.result == "win" ? result = "lose" : result = "win";
            }

            result2 = result.toUpperCase();
        }

        return (
            <div>
                <div className={`box ${result}`}>
                    <h1>{this.props.title}</h1>
                    <img className="item-img" src={this.props.item && this.props.item.img} />
                    <h2>{result2}</h2>
                </div>
            </div>
        )
    }
}
