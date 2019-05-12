import checkBoxesPage from '../pages/checkBoxesPage';

describe('Given: as a user, I should be able to check and uncheck the check boxes:', () => {
    
    const cb = new checkBoxesPage(); // drop an engine in the mold

    before(() => {
        browser.url('/checkboxes');
        cb.verifyUrl('checkboxes')
    });
    
    it('When the page loads, Then verify the second checkbox is checked and not the first', () => {
        cb.checkBoxOne.isSelected().should.be.false;
        cb.checkBoxTwo.isSelected().should.be.true;
    });
    
    it('When I click first checkbox, and uncheck the second, Then I verify its checked and the other is not.', () => {
        cb.checkBoxOne.click();
        cb.checkBoxTwo.click();
        cb.checkBoxOne.isSelected().should.be.true;
        cb.checkBoxTwo.isSelected().should.be.false;
    });

    it('When I click second checkbox, and uncheck the first, Then I verify its checked and the other is not.', () => {
        cb.checkBoxTwo.click();
        cb.checkBoxOne.click();
        cb.checkBoxOne.isSelected().should.be.false;
        cb.checkBoxTwo.isSelected().should.be.true;
    });

    it('When I unclick the second checkbox, Then I verify both are unchecked.', () => {
        cb.checkBoxTwo.click();
        cb.checkBoxOne.isSelected().should.be.false;
        cb.checkBoxTwo.isSelected().should.be.false;
    });

    it('When I click both checkboxes, Then I verify both boxes are checked.', () => {
        cb.checkBoxOne.click();
        cb.checkBoxTwo.click();
        cb.checkBoxOne.isSelected().should.be.true;
        cb.checkBoxTwo.isSelected().should.be.true;
    });

});