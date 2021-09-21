describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should NOT add a new server to allServers on submitServerInfo()', function () {
    serverNameInput.value = '';
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(0);
  });

  // test for updateServerTable
  it('should add a table row element to #serverTable on updateServerTable()', function () {
    submitServerInfo();
    updateServerTable();
    
    let serverTable = document.querySelectorAll('#serverTable tbody tr td');

    expect(serverTable.length).toEqual(3);
    expect(serverTable[0].innerText).toEqual('Alice');
    expect(serverTable[1].innerText).toEqual('$0.00');
    expect(serverTable[2].innerText).toEqual('X');

  })

  afterEach(function() {
    // teardown logic
    serverTbody.innerHTML = '';
    serverId = 0;
    allServers = {};
  });
});
