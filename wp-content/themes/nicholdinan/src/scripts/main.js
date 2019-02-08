(function($) {
    $( document ).ready( function() {  
        console.log('Site created by James Oxley-Shaw.');



    });
    $(window).load(function() {
        // Classes and functions:

        // Trigger only once user has stopped resizing screen.
        let resizeTimer;
        $(window).on('resize', function(e) {
            clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            //functions here       
            }, 250);
        });

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
    });
}(jQuery));