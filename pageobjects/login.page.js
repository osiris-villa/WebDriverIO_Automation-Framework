import Page from './basePage';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername() { return $('#username') }
    get inputPassword() { return $('#password') }
    get btnSubmit() { return $('button[type="submit"]') }
    get headerText() { return $('h2') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    login(username, password) {
        try {
            this.inputUsername.waitForExist()
            this.inputUsername.setValue(username);
            this.inputPassword.setValue(password);
            this.btnSubmit.click();
        } catch (error) {
            console.log(error)
        }
    }

    getHeaderText() {
        try {
            this.headerText.waitForExist();
            return this.headerText.getText();
        } catch (error) {
            console.log(error)
        }
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open() {
        return super.open('login');
    }
}

export default new LoginPage();