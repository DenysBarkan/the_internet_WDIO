import basePage from './basePage';

export default class fileDownloadPage extends basePage {
    constructor() {
        super()
        this.firstDownload = '//*[@id="content"]/div/a[1]';
    }

    firstDownlowdText(){
        return $(this.firstDownload).getText();
    }
    
    clickFirstDownload(){
        $(this.firstDownload).click();
    }

    

}