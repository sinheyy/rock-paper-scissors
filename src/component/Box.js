import React from 'react'

const Box = (props) => {
  console.log("props", props);
  let result, result2;

  // props.result가 빈 값이 아니라면
  if (props.result != "") {
    // tie일 경우는 그대로 tie
    if (props.result == "tie") {
      result = "tie";
    }
    // YOU는 props.result 그대로
    else if (props.title == "YOU") {
      result = props.result;
    }
    // COMPUTER는 반대로
    else if (props.title == "COMPUTER") {
      props.result == "win" ? result = "lose" : result = "win";
    }

    result2 = result.toUpperCase();
  }

  return (
    <div className={`box ${result}`}>
      <h1>{props.title}</h1>
      <img className="item-img" src={props.item && props.item.img} />
      <h2>{result2}</h2>
    </div>
  )
}

export default Box
