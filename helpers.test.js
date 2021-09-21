describe("Helpers test (with setup and tear-down)", function() {
    beforeEach(function () {
        // initialization logic
        billAmtInput.value = 100;
        tipAmtInput.value = 10;
        submitPaymentInfo();
    });
  
    it('should give the sum of all the tips for sumPaymentTotal()', function () {    
        expect(sumPaymentTotal('tipAmt')).toEqual(10);

        billAmtInput.value = 300;
        tipAmtInput.value = 50;

        submitPaymentInfo();

        expect(sumPaymentTotal('tipAmt')).toEqual(60);

    });

    it('should give the sum of all the bills for sumPaymentTotal()', function () {    
        expect(sumPaymentTotal('billAmt')).toEqual(100);

        billAmtInput.value = 300;
        tipAmtInput.value = 50;

        submitPaymentInfo();

        expect(sumPaymentTotal('billAmt')).toEqual(400);

    });
  
    it('should convert the bill and tip amount into a tip percent for sumPaymentTotal()', function () {    
        expect(sumPaymentTotal('tipPercent')).toEqual(10);

        billAmtInput.value = 300;
        tipAmtInput.value = 50;

        submitPaymentInfo();

        expect(sumPaymentTotal('tipPercent')).toEqual(27);

    });

    it('should sum tip percent of a single tip on calculateTipPercent()', function () {
        expect(calculateTipPercent(100, 10)).toEqual(10);
        expect(calculateTipPercent(111, 11)).toEqual(10);
    });
  
    it('should add a td from value and append to tr on appendTd()', function () {

        let newTr = document.createElement('tr');

        appendTd(newTr, 'test');

        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('test');
  
    })

    // test for appendDeleteBtn()
    it('should add a "X" td and append to tr on appendDeleteBtn()', function () {

        let newTr = document.createElement('tr');

        appendDeleteBtn(newTr);

        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('X');
    })
  
    afterEach(function() {
        // teardown logic
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        allPayments = {};
        paymentId = 0;
    });
  });