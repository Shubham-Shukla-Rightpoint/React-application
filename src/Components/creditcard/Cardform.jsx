import React, {useState} from "react";
import ShowCardDetails from "./showCard"

const Cardform = () => {
    const [details, setDetails] = useState({})
    const [showDetails, setshowDetails] = useState(false)
    const inputChange = (event)=>{
      const {name, value} = event.target
      setDetails({
        ...details,
        [name]: value,
      })
    }

    const onSubmit = (event) => {
      event.preventDefault();
      if(details.name && details.cardnumber && details.month && details.year && details.cvv) {
      setshowDetails(true)
      document.querySelectorAll(".sub-block-2").forEach(elem => elem.classList.add("hidden"));
      document.querySelectorAll(".greetings-block").forEach(elem => elem.classList.remove("hidden"));
      }
      if(!details.name) {
        document.querySelectorAll(".err-msg-name").forEach((elem)=>elem.classList.add("show"));
        document.querySelectorAll(".greetings-block").forEach(elem => elem.classList.add("hidden"));
      }
      if(!details.cardnumber) {
        document.querySelectorAll(".err-msg-num").forEach((elem)=>elem.classList.add("show"));
        document.querySelectorAll(".greetings-block").forEach(elem => elem.classList.add("hidden"));
      }
      if(!details.month || !details.year) {
        document.querySelectorAll(".err-msg-date").forEach((elem)=>elem.classList.add("show"));
        document.querySelectorAll(".greetings-block").forEach(elem => elem.classList.add("hidden"));
      }
      if(!details.cvv) {
        document.querySelectorAll(".err-msg-cvv").forEach((elem)=>elem.classList.add("show"));
        document.querySelectorAll(".greetings-block").forEach(elem => elem.classList.add("hidden"));
      }

    }

    function success() {

      document.querySelectorAll(".greetings-block").forEach(elem => elem.classList.add("hidden"));
      document.querySelectorAll(".err-msg-name").forEach((elem)=>elem.classList.add("hidden"));
      document.querySelectorAll(".err-msg-num").forEach((elem)=>elem.classList.add("hidden"));
      document.querySelectorAll(".err-msg-date").forEach((elem)=>elem.classList.add("hidden"));
      document.querySelectorAll(".err-msg-cvv").forEach((elem)=>elem.classList.add("hidden"));
      document.querySelectorAll(".sub-block-2").forEach(elem => elem.classList.remove("hidden"))
      document.querySelectorAll(".err-msg-name").forEach((elem)=>elem.classList.remove("show"));
      document.querySelectorAll(".err-msg-num").forEach((elem)=>elem.classList.remove("show"));
      document.querySelectorAll(".err-msg-date").forEach((elem)=>elem.classList.remove("show"));
      document.querySelectorAll(".err-msg-cvv").forEach((elem)=>elem.classList.remove("show"));

      setDetails({})
      console.log(details)
    }

  return(
    <div className="main-block">
      <div className="sub-block-1">
        <ShowCardDetails name={details.name} cardnumber={details.cardnumber} month={details.month} year={details.year} cvv={details.cvv}></ShowCardDetails>
      </div>
      <div className="sub-block-2">
        <form onSubmit={onSubmit} className="form">
          <div class="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">CARDHOLDER NAME</label>
            <input type="text" placeholder="Enter Your Name" name="name" value={details.name} onChange={inputChange} maxLength={40} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div className="err-msg err-msg-name hidden">
              Can't be blank
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">CARD Number</label>
            <input type="text" placeholder="Enter card number" name="cardnumber" value={details.cardnumber} onChange={inputChange} maxLength={16} pattern="[0-9]{16}" className="form-control" id="exampleInputPassword1"/>
            <div className="err-msg err-msg-num hidden">
              <p>Can't be blank</p>
            </div>
          </div>
          <div className="cvv-exp-block">
            <div className="col-md-8">
                <label class="form-label form-label-pos">EXP. DATE(MM/YY)</label>
                <input type="text" name="month" value={details.month} placeholder="MM" onChange={inputChange} maxLength={2} pattern="[0-9]{2}" className="form-input-pos form-control"></input>
                <input type="text" name="year" value={details.year} placeholder="YY" onChange={inputChange} maxLength={2} pattern="[0-9]{2}" className="form-input-pos form-control"></input>
                <div className="err-msg err-msg-date hidden">
                  <p>Can't be blank</p>
                </div>
            </div>
            <div className="col-md-4">
                <label className="form-label">CVV</label>
                <input type="text" placeholder="CVV" name="cvv" value={details.cvv} onChange={inputChange} maxLength={3} pattern="[0-9]{3}" className="form-control"></input>
                <div className="err-msg err-msg-cvv hidden">
                  Can't be blank
                </div>
            </div>
          </div>
          <button type="submit" class="btn btn-dark">Confirm</button>
        </form>
      </div>
      <div className="greetings-block hidden">
        <div className="check-circle"></div>
        <h2>THANK YOU!</h2>
        <p>We've added your card details</p>
        <button className="btn btn-dark" onClick={success}>Continue</button>
      </div>
    </div>
  )
}
export default Cardform
