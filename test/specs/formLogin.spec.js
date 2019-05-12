import formAuthenticationPage from '../pages/formAuthenticationPage';
import { creds } from '../config/loginTestCreds';

describe('Given: login test on the Form Authentication Page', ()=>{

    const formPg = new formAuthenticationPage();


    beforeEach('setup', () => {
        browser.url('/login');
        formPg.verifyUrl('login');
    });

    it('Data driven login test', () => {
        
        creds.forEach((input)=>{
            
            formPg.login(input.un, input.pw);
            formPg.flashAlert.should.include(input.flash);
        })
        


    });

    // it('When I enter the wrong username and password, Then it should fail', () => {

    //     formPg.login(test.creds.invalid.un, test.creds.invalid.pw);
    //     formPg.flashAlert.should.include('Your username is invalid');
    // });

    // it('When I enter the correct username and wrong password, Then it should fail', () => {
        
    //     formPg.login(test.creds.pwInvalid.un, test.creds.pwInvalid.pw);
    //     formPg.flashAlert.should.include('Your password is invalid!');
    // });

    // it('When I enter the correct username and password, Then it should pass', () => {
        
    //     formPg.login(test.creds.correct.un, test.creds.correct.pw);
    //     formPg.flashAlert.should.include('You logged into a secure area!');
    // });

});
