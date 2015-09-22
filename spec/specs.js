describe('Contact', function() {
  it("creates a new contact with given specifications", function() {
    var testContact = new Contact ("Maggie", "ONeill");
    expect(testContact.firstName).to.equal("Maggie");
    expect(testContact.lastName).to.equal("ONeill");
    expect(testContact.addresses).to.eql([]);
  });

  it("adds fullName method to contacts constructor", function() {
    var testContact = new Contact ("Maggie", "ONeill");
    expect(testContact.fullName()).to.equal("Maggie ONeill");
  });
});

describe('Address', function() {
  it("creates a new address constructor with given specifications", function() {
   var testAddress = new Address ("1041 sw 10th ave", "Gresham", "OR");
   expect(testAddress.street).to.equal("1041 sw 10th ave");
   expect(testAddress.city).to.equal("Gresham");
   expect(testAddress.state).to.equal("OR");
  });

  it("adds a fullAddress method to Address constructor", function() {
    var testAddress = new Address("1041 sw 10th ave", "Gresham", "OR");
    expect(testAddress.fullAddress()).to.equal("1041 sw 10th ave, Gresham, OR");
  });
});
