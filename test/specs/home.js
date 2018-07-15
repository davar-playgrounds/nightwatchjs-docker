let home;
var data = require("../support/user-data")
var userDetails = data['user'];

module.exports = {
  before: (client) => {
    home = client.page.homePageObject();
    home.goToHomepage();
  },

  // Example test case
  'Should have title: "hCard Builder"': () => {
    home.assert.title('hCard Builder');
  },

  // My test cases
  'Should be able to enter data to "Given Name" field': () => {
    home.setValue('@givenName', 'Steve');
    home.assert.value('@givenName', 'Steve');
  },

  'Should be able to update hCard Name': () => {
    home.setValue('@givenName', 'Mike');
    home.assert.containsText('@hCardName', 'Mike');
    home.clearValue('@givenName');
    home.assert.containsText('@hCardName', '');
  },

  'Should be able to preview my hCard personal details': () => {
    home.completeAllPersonalDetails(userDetails);
    home.assert.containsText('@hCardName', 'John');
    home.assert.containsText('@hCardSurname', 'Smith');
    home.assert.containsText('@hCardEmail', 'john.smith@test.com');
    home.assert.containsText('@hCardPhone', '0281239812');
  },

  'Should be able to preview my hCard address details': () => {
    home.completeAllAddressDetails(userDetails);
    home.assert.containsText('@hCardStreetAddress', 'Brougham');
    home.assert.containsText('@hCardStreetAddress', '888');
    home.assert.containsText('@hCardPostalCode', '6011');
    home.assert.containsText('@hCardCountryName', 'New Zealand');
  },

  after: (client) => {
    client.end();
  },
};
