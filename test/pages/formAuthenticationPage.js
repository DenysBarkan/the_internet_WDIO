import basePage from './basePage';

export default class formAuthenticationPage extends basePage {
    constructor() {
        super()
        this.username = '#username';
        this.password = '#password';
        this.loginBtn = '//*[@id="login"]/button';
        this.alert = '#flash';
        
    }

    get flashAlert(){
        return browser.$(this.alert).getText();
    }

    login(un, pw) {
        $(this.loginBtn).waitForExist();
        $(this.username).setValue(un);
        $(this.password).setValue(pw);
        $(this.loginBtn).click();
    }

    

} 

