import basePage from './basePage';

export default class hoversPage extends basePage {

    constructor() {
        super()
        this.img = '.figure';
    }

    get allImages(){
        return browser.$$(this.img);
    }



}