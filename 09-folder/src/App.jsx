import React from 'react'

const App = () => {
  const [value,setValue] = React.useState(0);
  const [num,setNum] = React.useState(0);
  const [nums,setNums] = React.useState({user:'Sarthak',age:20});
  const [arr,setArr] = React.useState([1,2,3,4,5]);
  const increment = ()=>{
    setNum(num+1);
  }
  const decrement = ()=>{
    setNum(num-1);
  }
  const resetTozero = ()=>{
    setNum(0);
  }
  const jumpToFive = ()=>{
    setNum(num+5);
  }
  const jumpToTen = ()=>{
    setNum(num+10);
  }
  const handleSetValue = ()=>{
    setValue(20);
    console.log(value);
  }
  const handleSetNums = ()=>{
    // ya toh destructuring use kar lo
    const {user,age} = nums;
    console.log(user,age);
    const newNums = {...nums};
    console.log(newNums);
    newNums.user='Shishodia';
    newNums.age=21;
    setNums(newNums);
  }
  const handleSetArr = ()=>{
    const newArr= [...arr];
    console.log(arr);
    console.log(newArr);
    newArr.push(6,7,8,9,10);
    setArr(newArr);
    const multipliedArr = newArr.map((item)=>item*2);
    console.log(multipliedArr);
  }
  const incrementByTen = ()=>{
    setNum(num+10);
    setNum(num+10);
    setNum(num+10);
    setNum(prev=>prev+10);
    setNum(prev=>prev+10);
    setNum(prev=>prev+10);
  }
  return (
    <div>
      <h1>Number is : {num}</h1>
      <button onClick={increment} className ='increment'>Increment</button>
      <button onClick={decrement} className ='decrement'>Decrement</button>
      <button onClick={resetTozero} className ='reset'>Reset</button>
      <button onClick={jumpToFive} className ='jumpToFive'>Jump to 5</button>
      <button onClick={jumpToTen} className ='jumpToTen'>Jump to 10</button>
      <button onClick={handleSetValue} className ='handleSetValue'>Set Value</button>
      <button onClick={handleSetNums} className ='handleSetNums'>Set Nums</button>
      <h1>Nums is : {nums.user}</h1>
      <h1>Nums is : {nums.age}</h1>
      <h1>Arr is : {arr}</h1>
      <button onClick={handleSetArr} className ='handleSetArr'>Set Arr</button>
    </div>
  )
}
export default App;