// import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Sender from "./components/Sender";
import Bic from "./components/Bic";
import Receiver from "./components/Receiver";
import Transaction from "./components/Transaction";
import {useState} from "react";
import axios from "axios";
function App() {

  const [senderId, setSenderId] = useState("");
  const [isValidSender,setValidSender] = useState(false);

  const [receiverId, setReceiverId] = useState("");
  const [receiverName,setReceiverName] = useState("");
  const [isValidReceiver,setValidReceiver] = useState(false);

  const [transactionType,setTransactionType] = useState("");
  const [amount,setAmount] = useState("");

  const [error,setError] = useState("");
  const [success,setSuccess] = useState("");

  const [isValidBic,setValidBic] = useState("");
  const [bicCode,setBicCode] = useState("");
  const [message,setMessage] = useState("");
  function onSubmit()
  {
    if(!isValidSender)
    {
      setError("Not a valid Sender")
    }
    else if(!isValidReceiver)
    {
      setError("Not a valid Receiver")
    }
    else if(!isValidBic)
    {
      setError("Not a valid Bic")
    }
    else if(receiverId.length < 5)
    {
      setError("Not a valid Receiver Id")
    }
    else if(amount === "")
    {
      setError("Enter Amount")
    }
    else
    {
      axios({
        method: 'post',
        url: "http://localhost:8080/transaction",
        headers: {}, 
        data: {
          senderId: senderId,
          receiverId: receiverId ,
          receiverName: receiverName ,
          amountSent: parseInt(amount) ,
          transactionType: transactionType,
          messageCode: message,
          bicCode : bicCode
        }
      })
      .then((res) => {
          if(res.data.isValid === true)
          {
            setError("");
            setSuccess("Successfully inserted with message : "+res.data.message);
          }
          else{
            setError("Failed to insert record : "+res.data.message)   
            setSuccess("")
          }

      })
      .catch((err) => {
          setError("Failed to insert record : "+err)   
          setSuccess("")
      })
      }
  
  }
  
  return (
    <div class="container">
     <Navbar />
     <div class="col-sm-10">
     <br/>
     <Sender  setSenderId={setSenderId} setValidSender={setValidSender}/>
     <Bic setValidBic={setValidBic} setBicCode={setBicCode}/>
     <Receiver  setReceiverId={setReceiverId} setReceiverName={setReceiverName} setValidReceiver={setValidReceiver}/>
     <Transaction setTransactionType={setTransactionType} setAmount={setAmount} setMessage={setMessage} />
     <button type="button" class = "btn btn-primary" onClick={onSubmit}>Submit</button> <br/><br/>
     {error && <p style={{color:"red"}}>{error}</p>}<br/>
     {success && <h4 style={{color:"green"}} >{success}</h4>}<br/><br/>
     </div>
    </div>
  );
}

export default App;
