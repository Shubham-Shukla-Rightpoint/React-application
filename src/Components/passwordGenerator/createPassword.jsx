import { useState } from "react"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faClipboard } from "@fortawesome/free-solid-svg-icons"

const CreatePassword = ()=>{
  let finalValue =  ""

  const [uppercase, setUppercase] = useState({
    name: false,
    randomValue: ""
  })
  const [lowerCase, setLowercase] = useState({
    name: false,
    randomValue: ""
  })
  const [number, setNumber] = useState({
    name: false,
    randomValue: ""
  })
  const [symbols, setSymbols] = useState({
    name: false,
    randomValue: ""
  })
  const [passwordtype, setpasswordtype] = useState({})
  const [strength, setStrength] = useState("")
  const [password, setPassword] = useState("")

  const UppercaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberList = "0123456789";
  const symbolList = "@#$&*!%";
  var randomChar = "";
  var randomNum = "";
  var randomSym = "";

  function randomString() {
    for(var i = 0; i < 5; i++) {
      var rnd = Math.floor(Math.random() * UppercaseList.length);
      randomChar = randomChar + UppercaseList.charAt(rnd);
    }
    return randomChar;
  }

  function randomNumber() {
    for(var i = 0; i<5; i++) {
      var rnd = Math.floor(Math.random() * numberList.length);
      randomNum = randomNum + numberList.charAt(rnd);
    }
    return randomNum;
  }

  function randomSymbol() {
    for(var i = 0; i<5; i++) {
      var rnd = Math.floor(Math.random() * symbolList.length);
      randomSym = randomSym + symbolList.charAt(rnd);
    }
    return randomSym;
  }

  const UppercaseClickHandler = (e)=>{
    setUppercase({
      ...uppercase,
      name: !uppercase.name,
      randomValue: randomString()
    })
  }

  const LowercaseClickHandler = (e)=>{
    setLowercase({
      ...lowerCase,
      name: !lowerCase.name,
      randomValue: randomString().toLowerCase()
    })
  }

  const NumberClickHandler = (e)=>{
    setNumber({
      ...number,
      name: !number.name,
      randomValue: randomNumber()
    })
  }

  const SymbolsClickHandler = (e)=>{
    setSymbols({
      ...symbols,
      name: !symbols.name,
      randomValue: randomSymbol()
    })
  }


  // const changeHandler = (event)=>{

  //   const {name} = event.target
  //   setpasswordtype({
  //     ...passwordtype,
  //     [name]: !passwordtype.name,
  //     randomValue: RandomValue
  //   })
  // }

  const onSubmitHandler = (event) =>{
    event.preventDefault()
    setpasswordtype({
      uppercasevalue: uppercase.name,
      lowercasevalue: lowerCase.name,
      numbervalue: number.name,
      symbolvalue: symbols.name
  })
    console.log(uppercase.name)

    const allState = [uppercase, lowerCase, number, symbols];

    // let finalValue =  ""
    let i = 0;
    allState.map((state) => {
      if(state.name === true){
        i++
        finalValue = finalValue + state.randomValue;
    }

    })

    console.log(finalValue)
    console.log(i);

    setPassword(finalValue)

    if(i==4) {
      setStrength("VERY STRONG")
      document.querySelectorAll(".strength-icon").forEach(elem => elem.classList.add("show-four"))
    }
    if(i==3) {
      setStrength("STRONG")
      document.querySelectorAll(".strength-icon").forEach(elem => elem.classList.remove("show-four"))
      document.querySelectorAll(".strength-icon").forEach(elem => elem.classList.add("show-three"))
    }
    if(i==2) {
      setStrength("MEDIUM")
      document.querySelectorAll(".strength-icon").forEach(elem => elem.classList.remove("show-four"))
      document.querySelectorAll(".strength-icon").forEach(elem => elem.classList.remove("show-three"))
      document.querySelectorAll(".strength-icon").forEach(elem => elem.classList.add("show-two"))
    }
    if(i==1) {
      setStrength("LOW")
      document.querySelectorAll(".strength-icon").forEach(elem => elem.classList.remove("show-four"))
      document.querySelectorAll(".strength-icon").forEach(elem => elem.classList.remove("show-three"))
      document.querySelectorAll(".strength-icon").forEach(elem => elem.classList.remove("show-two"))
      document.querySelectorAll(".strength-icon").forEach(elem => elem.classList.add("show-one"))
    }

    setpasswordtype({
      name: false
    })

    console.log(lowerCase.randomValue)
  }

  return(
    <div className="main">
      <p className="title">Password Generator</p>
      <div className="show-password">
        <div className="show-password-box">
          <span id="outbox">{password}</span>
        </div>
        <span id="generated-password">
          <button id="copy" onClick={()=> { navigator.clipboard.writeText(password)}}>
            <FontAwesomeIcon icon={faClipboard}></FontAwesomeIcon>
          </button>
        </span>
      </div>
      <form className="main-form">
        <div className="form-group">
          {/* <input type="checkbox" class="form-check-input" name="Uppercase" onChange={changeHandler}></input> */}
          <input type="checkbox" className="form-check-input" name="Uppercase" onChange={UppercaseClickHandler}></input>
          <label className="form-check-label">Include Uppercase letters</label>
        </div>
        <div className="form-group">
          {/* <input type="checkbox" class="form-check-input" name="Lowercase" onChange={changeHandler}></input> */}
          <input type="checkbox" className="form-check-input" name="Lowercase" onChange={LowercaseClickHandler}></input>
          <label className="form-check-label">Include Lowercase letters</label>
        </div>
        <div className="form-group">
          {/* <input type="checkbox" class="form-check-input" name="Number" onChange={changeHandler}></input> */}
          <input type="checkbox" className="form-check-input" name="Number" onChange={NumberClickHandler}></input>
          <label className="form-check-label">Include Number</label>
        </div>
        <div className="form-group">
          {/* <input type="checkbox" class="form-check-input" name="Symbol" onChange={changeHandler}></input> */}
          <input type="checkbox" className="form-check-input" name="Symbol" onChange={SymbolsClickHandler}></input>
          <label className="form-check-label">Include Symbols</label>
        </div>
        <div className="show-strength-block">
          <div className="heading">
            <p>STRENGTH</p>
          </div>
          <div className="strength">
            {strength}
            <div className="strength-icon"></div>
            <div className="strength-icon"></div>
            <div className="strength-icon"></div>
            <div className="strength-icon"></div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary" onClick={onSubmitHandler}>Generate</button>
      </form>
    </div>
  )
}

export default CreatePassword
