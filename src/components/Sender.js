import {useState} from "react";
import axios from "axios";

function Sender(props) {

    const [accHolderName, setAccHolderName] = useState("");
    const [clearBalance, setClearBalance] = useState("");

    const validate = (e) => {
        props.setSenderId(e.target.value)
       // console.log(e.target.value)
        if((e.target.value.length) === 14)
            getCustomerData(e)
        else
        {
            props.setValidSender (false)
            setAccHolderName(" ")
            setClearBalance(" ")
        }
    } 
    
    const getCustomerData = (e) => {
        axios.get("http://localhost:8080/getcustomer/"+e.target.value)
        .then((res) => {
            props.setValidSender (true)
            console.log(res.data)
            setAccHolderName(res.data.accountHolderName)
            setClearBalance(res.data.clearBalance)
        })
        .catch((err) => {
            props.setValidSender (false)
            console.log(err)
            setAccHolderName("invalid")
            setClearBalance("invalid")
        })
    }

    return (
        <div>
    <h4>Customer Details</h4>
        <form>
            <div class="row mb-3">
            <label for="inputEmail3" class="col-sm-2 col-form-label col-form-label-sm">Customer Id</label>
            <div class="col-sm-4">
            <input type="number" class="form-control form-control-sm" id="customerId" onChange={validate} placeholder="Enter Customer Id"/>
            </div>
            </div>
            <fieldset disabled>
            <div class="row mb-3">
            <label for="inputPassword3" class="col-sm-2 col-form-label col-form-label-sm">Account Holder Name</label>
            <div class="col-sm-4">
            <input type="text" class="form-control form-control-sm" value={accHolderName} id="accHolderName" placeholder="Account Holder Name"/>
            </div>
            </div>
            <div class="row mb-3">
            <label for="inputPassword3" class="col-sm-2 col-form-label col-form-label-sm">Clear Balance</label>
            <div class="col-sm-4">
            <input type="text" class="form-control form-control-sm" value={clearBalance} id="clearBalance" placeholder="Account Balance"/>
            </div>
            </div>
            </fieldset>
        </form>

        </div>
    )
}

export default Sender;