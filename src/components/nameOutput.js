// the random selected name
import React from "react";

const NameOutput = ({name}) => {
  console.log(name)
  // const [person, setPerson] = React.useState("")
const oneName = name.split(",")
const randomIndex = Math.floor(Math.random() * oneName.length);
const randomElement = oneName[randomIndex];
console.log(randomElement)

  return (
<div>
<h1>{randomElement}</h1>
<button className="shake">Shake me!</button>
</div>
  )
}
export { NameOutput };
