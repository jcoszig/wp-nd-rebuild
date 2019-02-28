(function($) {
    $( document ).ready( function() {  
        console.log('Site created by James Oxley-Shaw.');



    });
    $(window).load(function() {
        // Classes and functions:

        // srcset for background images
        class ResponsiveBackgroundImage {
            constructor(element) {
                this.element = element;
                this.img = element.querySelector('img');
                this.src = '';
                this.img.addEventListener('load', () => {
                    this.update();
                });
                if (this.img.complete) {
                    this.update();
                }
            }
            update() {
                let src = typeof this.img.currentSrc !== 'undefined' ? this.img.currentSrc : this.img.src;
                if (this.src !== src) {
                    this.src = src;
                    this.element.style.backgroundImage = 'url("' + this.src + '")';
                }
            }
        }

        // Gallery page function. Resize all portrait image borders.
        function resizeBorderHeight(){
            const portraitWrap = document.querySelectorAll('.portrait-wrap');
            
            for(let i = 0; i < portraitWrap.length; i++){
                let border = portraitWrap[i].firstElementChild.firstElementChild;
                let img = portraitWrap[i].children[1];
                let imgHeight = img.clientHeight;
                
                border.style.height = `${imgHeight}px`;
            }
            
        }

/*---------------------------------------------------------------------------*/
/*-------------------------Global:-------------------------------------------*/
/*---------------------------------------------------------------------------*/
        const currentPage = document.querySelector('body'); 
        const mqDesktop = 1030; 
        const mqTablet = 840;

        // Set all targeted elements background img source from child img
        let elements = document.querySelectorAll('[data-responsive-background-image]');
        for (let i=0; i<elements.length; i++) {
            new ResponsiveBackgroundImage(elements[i]);
            console.log('responsive image added');  
        }

        // Instagram nav item to logo:
        const instagramHref = document.querySelector('.menu-item-type-custom a');
        const instagramLogo = document.querySelector('.menu-item-type-custom img');
        // live / local origin URL
        let dynamicHomeURL = window.location.hostname == 'nicholdinan.co.uk' ? 
            window.location.origin : 
            `${window.location.origin}/nicholdinan`;
        instagramHref.href = `https://www.instagram.com/nichol.dinan`;
        instagramLogo.src = `${dynamicHomeURL}/wp-content/themes/nicholdinan/images/instagram-logo.svg`


/*---------------------------------------------------------------------------*/
/*-------------------------Landing page:-------------------------------------*/
/*---------------------------------------------------------------------------*/
        if(currentPage.classList.contains('home') ){ 

            const centreText = document.querySelector('.centre-text');
            const introForeground = document.querySelector('.intro-foreground');
            const landingImg = document.querySelectorAll('.landingPage-slider li');	
            const currentWork = document.querySelectorAll('.current-work h2');
            const delay = 4000;

            // animations
            centreText.classList.add('slideIn');

            setTimeout( function(){ 
                introForeground.classList.add('loaded');
            }, 2000);

            // set background image animations (slideshow), then remove landing foreground.
            landingImg.forEach(img => {
                setTimeout( function(){ 
                    img.style.animation = `fade${ img.dataset.index } ${ img.dataset.speed }ms infinite `;    
                    introForeground.style.display = 'none';
                    console.log('animation loaded');
                }, delay);
            });

            // set current work animations
            currentWork.forEach(title => {
                setTimeout( function(){ 
                    title.classList.add('loaded');
                    title.style.animation = `fade${ title.dataset.index } ${ title.dataset.speed }ms infinite `;  
                }, delay);
            });

        }; // end page detection

/*---------------------------------------------------------------------------*/
/*-------------------------About page contact form: -------------------------*/
/*---------------------------------------------------------------------------*/
        if(currentPage.classList.contains('page-template-about') ){ 

            const messageTextArea = document.querySelector('.form-message .wpcf7-textarea');
            const messageWrap = document.querySelector('.form-message');
            const form = document.querySelector('.wpcf7-form');
            
            // Under mqDesktop: Expand message textarea on focus, collapse on unfocus if there is no content
            messageTextArea.addEventListener('focus', ()=>{
                // if (!window.matchMedia(`(max-width: ${mqDesktop}px)`).matches) {
                    if(
                        !messageTextArea.classList.contains('focused') &&
                        messageTextArea.value.trim() == ''
                    ){
                        // Note: need to add conditional to check for IE browser...
                        messageTextArea.classList.add('focused');
                        messageWrap.classList.add('focused');
                        setTimeout(() => {
                            messageTextArea.style.height = "11.25rem";
                        }, 400);
                    } 
                // }
            });
            
            messageTextArea.addEventListener('blur', ()=>{
                // if (!window.matchMedia(`(max-width: ${mqDesktop}px)`).matches) {
                    if(messageTextArea.value.trim() == ''){
                        messageTextArea.classList.remove('focused');
                        messageWrap.classList.remove('focused');       
                        messageTextArea.style.height = "3rem";     
                    }
                // }
            });
            
        }; // end page detection

/*---------------------------------------------------------------------------*/
/*-------------------------Gallery Page: ------------------------------------*/
/*---------------------------------------------------------------------------*/
        if(currentPage.classList.contains('page-template-gallery') ){
            
            // Trigger only once user has stopped resizing screen.
            let resizeTimer;
            $(window).on('resize', function(e) {
                clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function() {
                resizeBorderHeight();      
                }, 250);
            });

            // Add dynamic class referring to how many posts found.
            const imgsSection = document.querySelectorAll('.images-section');
            const postImgWrap = document.querySelectorAll('.post-img-wrap');
            const portraitWrap = document.querySelectorAll('.portrait-parent h2');

            // How many posts in each year
            imgsSection.forEach( (section) => {
                let postCount = section.childElementCount;
                // console.log( `section = ${section}. imgCount = ${postCount}` );
                section.classList.add(`posts-${postCount}`)
            });

            // Positioning for images
            let imgCount = 0;
            let left = 1;
            let right = 2;
            let center = 3;

            postImgWrap.forEach( (img) => {
                imgCount++;

                if (imgCount == left){
                    img.classList.add('left');
                    left += 3;
                } else if (imgCount == right){
                    img.classList.add('right');
                    right += 3;
                } else if (imgCount == center){
                    img.classList.add('center');
                    center += 3;
                }
                // count number of posts
                // img.classList.add(`image-${imgCount}`);
            });

            // Styling for long portrait images with long titles
            portraitWrap.forEach( (title) => {
                let titleLength = title.innerText.length;
                if(titleLength > 11){
                    title.parentNode.classList.add('horizontal-text');
                }
            });

            // prevent default re-direct to fire animation before proceeding
            const borders = document.querySelectorAll('.post-img a');

            borders.forEach( (border) => {
                border.addEventListener('click', function(e){
                    const target = border.getAttribute('href');
                    e.preventDefault();
                    alert('link clicked: ', target);
                    // Add class to containing element
                    border.parentNode.parentNode.classList.add('animate');
                    window.location.href = target;
                });
            }); 

        }; 

    });
}(jQuery));
