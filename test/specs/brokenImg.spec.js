import BrokenImgPage from '../pages/BrokenImgPage'

describe('Validate that images are active: ', () => {
    
    it('count broken', async () => {
        BrokenImgPage.loadBrokenImagesPage()


        await $$('img').map((image)=> {
            if(image.getAttribute('naturalWidth').equals()) {
                console.log(image.getAttribute('outerHTML') + ' is broken')
            }
        })

        // console.log(imgs)
        // imgs.forEach((image)=> {
        //     const brokenImgs = image.getAttribute('naturalWidth')
        //     brokenImgs
        // })
    });
});