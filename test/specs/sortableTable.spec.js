import sortableDataTablesPage from '../pages/sortableDataTablesPage';
const assert = require('assert')

describe('Given: sorted table test', ()=>{

    const sortPg = new sortableDataTablesPage();

    beforeEach('setup', () => {
        browser.url('/tables');
        sortPg.verifyUrl('tables');
    });

    it('When clicking on the last name header, Then the table should sort', () => {
        // get text of last name rows and save to array
        const unSorted = sortPg.saveLastNames()

        // click last name
        sortPg.headerLastName.click();

        // get text of sorted list and save to array
        const sortedList = sortPg.saveLastNames();

        // validate that the two do not equal
        assert.notEqual(unSorted, sortedList)  

    });



});