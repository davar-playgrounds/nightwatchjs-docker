var xPath = function (selector) {
  return {
    selector: selector,
    locateStrategy: 'xpath'
  }
};

var hCardBuilderSelector = function (fieldName) {
  return {
    selector: './/*[span/text() ="' + fieldName + '"]/input',
    locateStrategy: 'xpath'
  }
};

var hCardPreviewSelector = function (fieldName) {
  return {
    selector: 'span.' + fieldName
  }
};

module.exports = {
  elements: {
    // Personal Details
    title: 'title',
    givenName: hCardBuilderSelector('Given name'),
    surname: hCardBuilderSelector('Surname'),
    email: hCardBuilderSelector('Email'),
    phone: hCardBuilderSelector('Phone'),

    // Address Details
    houseNameOrNumber: hCardBuilderSelector('House name or #'),
    street: hCardBuilderSelector('Street'),
    suburb: hCardBuilderSelector('Suburb'),
    state: hCardBuilderSelector('State'),
    postCode: hCardBuilderSelector('Postcode'),
    country: hCardBuilderSelector('Country'),

    // hCard Details
    hCardName: hCardPreviewSelector('given-name'),
    hCardSurname: hCardPreviewSelector('family-name'),
    hCardEmail: 'a.email',
    hCardPhone: 'div.tel',
    hCardStreetAddress: hCardPreviewSelector('street-address'),
    hCardPostalCode: hCardPreviewSelector('postal-code'),
    hCardCountryName: hCardPreviewSelector('country-name'),
    hCardAvatar: xPath('.//img[@alt="Avatar"]')
  },
  commands: [{
    goToHomepage() {
      this.navigate(`${this.api.launchUrl}`);
    },
    completeAllPersonalDetails(name) {
      this.setValue('@givenName', name['givenName']);
      this.setValue('@surname', name['surname']);
      this.setValue('@email', name['email']);
      this.setValue('@phone', name['phone']);
    },
    completeAllAddressDetails(name) {
      this.setValue('@houseNameOrNumber', name['houseNameOrNumber']);
      this.setValue('@street', name['street']);
      this.setValue('@suburb', name['suburb']);
      this.setValue('@state', name['state']);
      this.setValue('@postCode', name['postCode']);
      this.setValue('@country', name['country']);
    }
  }],
};
