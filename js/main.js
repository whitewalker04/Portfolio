import{ includeHtml } from './service.js';

const menuBtn = document.querySelector( '.menu-btn' );
const hamburger = document.querySelector( '.menu-btn_burger' );
const nav = document.querySelector( '.nav' );
var menuNav = null,
    navItems = null;

const socialIcons = document.querySelector( '.social-icons' );
await includeHtml('../pages/subpages/social-icons.html', socialIcons );

let hiddenMenu = true;
menuBtn.addEventListener( 'click', toggleMenu );


async function loadSubPages() {
    try{
        let result = await includeHtml('../pages/subpages/nav-options.html', nav );
        menuNav = await document.querySelector( '.menu-nav' );
        navItems = await document.querySelectorAll( '.menu-nav_item' );
        menuBtn.addEventListener( 'click', toggleMenu );
    } catch( ex ){
        console.error( ex );
    }

}

loadSubPages();

function toggleMenu() {
    if( hiddenMenu ) {
        hamburger.classList.add( 'open' );
        nav.classList.add( 'open' );
        menuNav.classList.add( 'open' );
        navItems.forEach( item => item.classList.add( 'open' ));

        hiddenMenu = false;
    } else {
        hamburger.classList.remove( 'open' );
        nav.classList.remove( 'open' );
        menuNav.classList.remove( 'open' );
        navItems.forEach( item => item.classList.remove( 'open' ));
        hiddenMenu = true;
    }
}