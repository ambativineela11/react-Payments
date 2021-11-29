import {useState} from "react";
import axios from "axios";

function Bic(props) {

    const [institutionName, setInstitutionName] = useState("");
   // const [clearBalance, setClearBalance] = useState("");

    const validate = (e) => {
        props.setBicCode(e.target.value)
       // console.log(e.target.value)
       getBicData(e) 
    } 
    
    const getBicData = (e) => {
        axios.get("http://localhost:8080/getinstitute/"+e.target.value)
        .then((res) => {
            console.log(res.data)
            setInstitutionName(res.data.instName)
            props.setValidBic(true)
            //setClearBalance(res.data.clearBalance)
        })
        .catch((err) => {
            setInstitutionName(" ")
            props.setValidBic(false)
         //   setClearBalance("invalid")
        })
    }

    return (
        <div>
    <h4>Receiver Details</h4>
        <form>
            <div class="row mb-3">
            <label for="inputEmail3" class="col-sm-2 col-form-label col-form-label-sm">BIC</label>
            <div class="col-sm-4">
            <input type="text" class="form-control form-control-sm" id="bicCode" onChange={validate} placeholder="Enter BIC"/>
            </div>
            </div>
            <fieldset disabled>
            <div class="row mb-3">
            <label for="inputPassword3" class="col-sm-2 col-form-label col-form-label-sm">Institution Name</label>
            <div class="col-sm-4">
            <input type="text" class="form-control form-control-sm" value={institutionName} id="institutionName" placeholder="Institution Name"/>
            </div>
            </div>
            </fieldset>
        </form>

        </div>
    )
}

export default Bic;