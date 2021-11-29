import {useState} from "react";
import axios from "axios";

function Receiver(props) {

    const [isValidName, setIsValidName] = useState(true);  

    const validateName = (e) => {
        axios.get("http://localhost:8080/getsanclist-name/"+e.target.value)
        .then((res) => {
            console.log(res.data)
           if(res.data != true)
            {
                setIsValidName(false)
                props.setValidReceiver(false)
            }
            else{
                setIsValidName(true)
                props.setValidReceiver(true)
            }
        })
        .catch((err) => {
            setIsValidName(true)
            props.setValidReceiver(true)
        })
    }

    return (
        <div>
        <form>
            <div class="row mb-3">
            <label for="inputEmail3" class="col-sm-2 col-form-label col-form-label-sm">Receiver Account Holder Name</label>
            <div class="col-sm-4">
            <input type="text" class="form-control form-control-sm" id="receiverName" onBlur={validateName} onChange={(e)=>{props.setReceiverName(e.target.value)}} placeholder="Enter Account Name"/>
            
            {!isValidName && <p style={{color:"red"}}>invalid user</p>}
            </div>
            </div>
            <fieldset>
            <div class="row mb-3">
            <label for="inputPassword3" class="col-sm-2 col-form-label col-form-label-sm">Account Number</label>
            <div class="col-sm-4">
            <input type="text" class="form-control form-control-sm" onChange={(e)=>{props.setReceiverId(e.target.value)}} id="receiverNumber" placeholder="Account Number"/>
            </div>
            </div>
            </fieldset>
        </form>

        </div>
    )
}

export default Receiver;