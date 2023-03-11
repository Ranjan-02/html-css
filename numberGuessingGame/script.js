document.querySelector("form").onsubmit = (e) => {
  e.preventDefault();
  const inputValue = document.getElementById("value").value;
  if (!inputValue) {
    return;
  }
  const rendomNumber = rendomNumberGenarator();

  if (Number(inputValue) === rendomNumber) {
    document.getElementById("result").innerHTML =
      "congratulation ! your guessing the number is right";
  } else {
    document.getElementById("result").innerHTML =
      "your guessing the number is worng actually is number is " + rendomNumber;
  }
};

const rendomNumberGenarator = () => {
  const number = Math.floor(Math.random() * 10);
  return number;
};
