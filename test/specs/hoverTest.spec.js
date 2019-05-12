import hoversPage from '../pages/hoversPage';

describe('Given on the Hovers Page', ()=>{

    const hoversPg = new hoversPage();

    before('setup', () => {
        browser.url('/hovers')
        hoversPg.verifyUrl('hovers');
    });

    it('When I hover over the images, Then a User name and View Profile link should be displayed', ()=>{
        
        // hoversPg.allImages.forEach((img, i)=>{
        //     img.moveToObject();

        //     const userName = img.$('./div/h5').getText().trim().replace('name: ', '');
        //     userName.should.equal(`user${i + 1}`);

        //     const viewProfile = img.$('./div/a');
        //     viewProfile.should.exist;
        // });

        for (let index = 0; index < hoversPg.allImages.length; index++) {
            
            const img = hoversPg.allImages[index];

            img.moveToObject();

            const userName = img.$('./div/h5').getText().trim().replace('name: ', '');
            userName.should.equal(`user${index + 1}`);

            const viewProfile = img.$('./div/a');
            viewProfile.should.exist;
            
        }
  

    });

});