import LoginPage from "../pageobjects/login.page";
import SecurePage from "../pageobjects/secure.page";
var data = require('../utils/data')

describe("Test Login functionality", () => {
    beforeEach(() => {
        LoginPage.open();
        expect(LoginPage.getHeaderText()).to.contain(data.validations.login.header);
    });

    it("should login with valid credentials", () => {
        LoginPage.login(data.credentials.userName, data.credentials.password);
        expect(SecurePage.flashAlert).to.exist;
        expect(SecurePage.FlashAlertText()).to.contain(data.validations.secure.success);
    });

    it("should not login with incorrect username", () => {
        LoginPage.login(data.credentials.badUserName, data.credentials.password);
        expect(SecurePage.flashAlert).to.exist;
        expect(SecurePage.FlashAlertText()).to.contain(data.validations.login.incorrectUsername);
    });

    it("should not login with incorrect password", () => {
        LoginPage.login(data.credentials.userName, data.credentials.badPassword);
        expect(SecurePage.flashAlert).to.exist;
        expect(SecurePage.FlashAlertText()).to.contain(data.validations.login.incorrectPassword);
    });

    it("should logout", () => {
        LoginPage.login(data.credentials.userName, data.credentials.password);
        expect(SecurePage.flashAlert).to.exist;
        expect(SecurePage.FlashAlertText()).to.contain(data.validations.secure.success);
        SecurePage.clickLogoutButton();
        expect(SecurePage.FlashAlertText()).to.contain(data.validations.login.logout);
    });
});