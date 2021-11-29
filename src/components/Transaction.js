import { Dropdown, DropdownButton } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";


function Transaction(props) {

    return (
        <div>
            <div class="dropdown">
            <label for="inputEmail3" class="col-sm-2 col-form-label col-form-label-sm">Choose Transfer Type </label>
        
            <DropdownButton title="Select transfer type" onSelect={(e)=>{props.setTransactionType(e)}}>
            <DropdownItem eventKey="bank">bank</DropdownItem>
            <DropdownItem eventKey="customer">customer</DropdownItem>
            </DropdownButton>
            </div>
            <br/><br/>
            <div class="dropdown">
            <label for="inputEmail3" class="col-sm-2 col-form-label col-form-label-sm">Message Code</label>
        
            <DropdownButton title="select message type" onSelect={(e)=>{props.setMessage(e)}}>
            <DropdownItem eventKey="CHQB">CHQB</DropdownItem>
            <DropdownItem eventKey="CORT">CORT</DropdownItem>
            <DropdownItem eventKey="HOLD">HOLD</DropdownItem>
            <DropdownItem eventKey="INTC">INTC</DropdownItem>
            <DropdownItem eventKey="PHOB">PHOB</DropdownItem>
            <DropdownItem eventKey="PHOI">PHOI</DropdownItem>
            <DropdownItem eventKey="PHON">PHON</DropdownItem>
            <DropdownItem eventKey="REPA">REPA</DropdownItem>
            <DropdownItem eventKey="SDVA">SDVA</DropdownItem>
            </DropdownButton>
            </div><br/><br/>
            <div class="row mb-3">
            <label for="inputPassword3" class="col-sm-2 col-form-label col-form-label-sm">Amount</label>
            <div class="col-sm-4">
            <input type="number" class="form-control form-control-sm" id="amount" placeholder="Amount " onChange={(e)=>{props.setAmount(e.target.value)}}/>
            </div>
            </div>
        </div>
    )

}

export default Transaction;