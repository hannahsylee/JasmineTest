describe("Payments test (with setup and tear-down)", function() {
    beforeEach(function () {
        billAmtInput.value = 100;
        tipAmtInput.value = 10;
    });
  
    it('should add a new payment to allPayments on submitPaymentInfo()', function () {
        submitPaymentInfo();
    
        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment' + paymentId].billAmt).toEqual('100');
        expect(allPayments['payment' + paymentId].tipAmt).toEqual('10');
        expect(allPayments['payment' + paymentId].tipPercent).toEqual(10);
    });
  
    it('should create a new payment on createCurPayment()', function () {
        // let billAmt = billAmtInput.value;
        // let tipAmt = tipAmtInput.value;

        expect(createCurPayment()).toEqual({
            billAmt: '100',
            tipAmt: '10',
            tipPercent: 10,
        });
    });

    it('should return undefined with empty input on createCurPayment()', function(){
        billAmtInput.value = '';
        tipAmtInput.value = '';
        expect(createCurPayment()).toEqual(undefined);
    })
  
//     // // test for updateServerTable
//     // // Create table row element and pass to appendTd with input value
    it('should add a table row element to #paymentTable on appendPaymentTable()', function () {

        let billAmt = billAmtInput.value;
        let tipAmt = tipAmtInput.value;

        appendPaymentTable({
            billAmt: billAmt,
            tipAmt: tipAmt,
            tipPercent: calculateTipPercent(billAmt, tipAmt),
        });
 
        let paymentTable = document.querySelectorAll('#paymentTable tbody tr td');
    
        expect(paymentTable.length).toEqual(4);
        expect(paymentTable[0].innerText).toEqual('$100');
        expect(paymentTable[1].innerText).toEqual('$10');
        expect(paymentTable[2].innerText).toEqual('10%');
        expect(paymentTable[3].innerText).toEqual('X');
  
    })
  
    afterEach(function() {
        // teardown logic
        allPayments = {};
        paymentId = 0;
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
    });
  });