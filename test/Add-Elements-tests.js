import AddElements from "../pageobjects/remove-elements.page";
var data = require('../utils/data')

describe('Test add and remove buttons', () => {
    beforeEach(() => {
        AddElements.open();
        expect(AddElements.getHeaderText()).to.equal(data.validations.add_remove_elements.header);
    });

    it('Should add 5 elements', () => {
        var numberOfButtonsAdded = 5;
        AddElements.clickAddElementButton(numberOfButtonsAdded);
        expect(AddElements.getNumberofDeleteButtons()).to.equal(numberOfButtonsAdded);
    });

    it('Should add 5 elements and delete 4', () => {
        var numberOfButtonsAdded = 5;
        var numberOfButtonsDeleted = 4;
        AddElements.clickAddElementButton(numberOfButtonsAdded);
        expect(AddElements.getNumberofDeleteButtons()).to.equal(numberOfButtonsAdded);

        AddElements.clickDeleteButton(numberOfButtonsDeleted);
        expect(AddElements.getNumberofDeleteButtons()).to.equal(numberOfButtonsAdded - numberOfButtonsDeleted);

    });
});