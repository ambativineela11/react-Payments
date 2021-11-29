var axios = require("axios");

describe("sample tests", () => {

  test("accept", () => {
      var successResponse = ""
      axios({
          method: 'post',
          url: "http://localhost:8080/transaction",
          headers: {}, 
          data: {
            senderId: 78195245302715,
            receiverId: 83020817828620,
            receiverName: "Rajesh Rao",
            amountSent: 250000,
            transactionType: "customer",
            messageCode: "HOLD",
            bicCode : "ACBLINBBXXX"
          }
        })
        .then((res) => {
          successResponse = res.data.message;
        })
        .catch((err) => {
            
        })

        setTimeout(() => {
          expect(successResponse).toBe("Beneficiary customer or claimant will call upon identification.")
        }, 3000);
        
    });

    test("reject due to low balance", () => {
      var failureResponse = ""
      axios({
          method: 'post',
          url: "http://localhost:8080/transaction",
          headers: {}, 
          data: {
            senderId: 39145971759304,
            receiverId: 71319440983198,
            receiverName: "Mayanna",
            amountSent: 150000,
            transactionType: "customer",
            messageCode: "CORT",
            bicCode : "BCEYIN5MXXX"
          }
        })
        .then((res) => {
          failureResponse = res.data.message;
        })
        .catch((err) => {
            
        })

        setTimeout(() => {
          expect(failureResponse).toBe("Insufficient Balance")
        }, 3000);
        
    });
  
  
   test("bank transfer accept", () => {
      
    var successResponse = ""
    axios({
        method: 'post',
        url: "http://localhost:8080/transaction",
        headers: {}, 
        data: {
          senderId: 69652133523248,
          receiverId: 45002608912874,
          receiverName: "HDFC BANK ",
          amountSent: 250000,
          transactionType: "bank",
          messageCode: "PHOB",
          bicCode : "HDFCINC001"
        }
      })
      .then((res) => {
        successResponse = res.data.message;
      })
      .catch((err) => {
          
      })

      setTimeout(() => {
        expect(successResponse).toBe("Please advise the intermediary institution by phone.")
      }, 3000);

   });

   test("bank transfer reject", () => {
    var failureResponse = ""
    axios({
        method: 'post',
        url: "http://localhost:8080/transaction",
        headers: {}, 
        data: {
          senderId: 39145971759304,
          receiverId: 69652133523248,
          receiverName: "HDFC BANK ",
          amountSent: 100000,
          transactionType: "bank",
          messageCode: "CORT",
          bicCode : "HDFCINC001"
        }
      })
      .then((res) => {
        failureResponse = res.data.message;
      })
      .catch((err) => {
          
      })

      setTimeout(() => {
        expect(failureResponse).toBe("Bank type is not supported")
      }, 3000);

   });

  test("customer in sdn list", () => {
      
    var failureResponse = ""
    axios({
        method: 'post',
        url: "http://localhost:8080/transaction",
        headers: {}, 
        data: {
          senderId: 14783038759432,
          receiverId: 450524985,
          receiverName: "Ash Shaykh",
          amountSent: 50000,
          transactionType: "customer",
          messageCode: "REPA",
          bicCode : "DCBLINBB036"
        }
      })
      .then((res) => {
        failureResponse = res.data.message;
      })
      .catch((err) => {
          
      })

      setTimeout(() => {
        expect(failureResponse).toBe("user is not valid")
      }, 3000);
      
    
  });

})