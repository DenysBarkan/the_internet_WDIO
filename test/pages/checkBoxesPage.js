import basePage from "./basePage";

export default class checkBoxesPage extends basePage {

    constructor() {
        super()
        this.checkBox = '//form[@id=\'checkboxes\']/input';
    }

    get checkBoxOne () {
        return browser.$$(this.checkBox)[0];
    }

    get checkBoxTwo () {
        return browser.$$(this.checkBox)[1];
    }


}