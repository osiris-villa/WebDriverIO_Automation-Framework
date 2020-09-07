import Page from './basePage';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get flashAlert() { return $('#flash') }
    get btnLogout() { return $('//i[text()=" Logout"]') }

    /**
     * A method to get the text of the 
     * flash alert
     */

    FlashAlertText() {
        try {
            this.flashAlert.waitForExist()
            return this.flashAlert.getText();
        } catch (error) {
            console.log(error)
        }
    }

    clickLogoutButton() {
        try {
            this.btnLogout.waitForExist();
            this.btnLogout.click();
        } catch (error) {
            console.log(error)
        }
    }
}

export default new SecurePage();