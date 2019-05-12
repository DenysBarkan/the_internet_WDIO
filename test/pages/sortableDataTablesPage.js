import basePage from './basePage';

export default class sortableDataTablesPage extends basePage {
    
    constructor() {
        super()
        this.headLastName = '//*[@id="table1"]/thead/tr/th[1]';
        this.rowsLastName = '//*[@id="table1"]/tbody/tr/td[1]'; //array
        this.headFirstName = '//*[@id="table1"]/thead/tr/th[2]';
    }

    get headerLastName () {
        return browser.$(this.headLastName);
    }

    saveLastNames(){
        const lastNameArray = new Array();
        
        $$(this.rowsLastName).forEach((row)=>{
            lastNameArray.push(row.getText());
            
        })

        return lastNameArray;
    }


    

}