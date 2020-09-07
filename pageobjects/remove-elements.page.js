import basePage from './basePage';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class RemoveElementsPage extends basePage {

    /**
     * define selectors using getter methods
     */
    get headertext() { return $('h3') }
    get btnAddElement() { return $('//button[text()="Add Element"]') }
    get listOfBtnDelete() { return $$('//div[@id="elements"]/button') }
        //get individualBtnDelete() { return $$('//div[@id="elements"]/button[1]') }

    /**
     * Methods
     */
    open() {
        return super.open('add_remove_elements/');
    }

    getHeaderText() {
        try {
            this.headertext.waitForExist();
            return this.headertext.getText();
        } catch (error) {
            console.error(error);
        }
    }

    clickAddElementButton(numberOfClicks) {
        try {
            this.btnAddElement.waitForExist();
            for (let index = 0; index < numberOfClicks; index++) {
                this.btnAddElement.click();
                browser.pause(100)
            }
        } catch (error) {
            console.error(error)
        }
    }

    clickDeleteButton(numberOfClicks) {
        try {
            for (let index = 0; index < numberOfClicks; index++) {
                this.listOfBtnDelete[0].click();
                browser.pause(250);
            }
        } catch (error) {
            console.log(error)
        }
    }

    getNumberofDeleteButtons() {
        try {
            return this.listOfBtnDelete.length;
        } catch (error) {
            console.log(error)
        }
    }
}

export default new RemoveElementsPage();