import React from "react";

function Heading() {
  const date = new Date();
  const currentTime = date.getHours();
  const fullTime =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  let greeting;

  const customStyle = {
    color: "",
    fontSize: "",
    backgroundColor: "",
  };

  if (currentTime < 12) {
    greeting = "Good Morning";
    customStyle.color = "red";
    customStyle.font = "10px";
    customStyle.backgroundColor = "Yellow";
  } else if (currentTime < 18) {
    greeting = "Good Afternoon";
    customStyle.color = "green";
    customStyle.font = "20px";
    customStyle.backgroundColor = "pink";
  } else {
    greeting = "Good Night";
    customStyle.color = "blue";
    customStyle.font = "30px";
    customStyle.backgroundColor = "grey";
  }

  return (
    <h1 className="heading" style={customStyle}>
      {fullTime} {greeting}
    </h1>
  );
}
export default Heading;
