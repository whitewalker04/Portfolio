import{ includeHtml } from './service.js';

const menuBtn = document.querySelector( '.menu-btn' );
const hamburger = document.querySelector( '.menu-btn_burger' );
const nav = document.querySelector( '.nav' );
var menuNav = null,
    navItems = null,
    navLinks = null;

const socialIcons = document.querySelector( '.social-icons' );
await includeHtml('../pages/subpages/social-icons.html', socialIcons );

let hiddenMenu = true;


async function loadSubPages() {
    try{
        await includeHtml('../pages/subpages/nav-options.html', nav );
        menuNav = await document.querySelector( '.menu-nav' );
        navItems = await document.querySelectorAll( '.menu-nav_item' );
        navLinks = await document.querySelectorAll( '.menu-nav_link' );
    } catch( ex ){
        console.error( ex );
    }

}
 async function fireUp() {
     try{
         await loadSubPages();
        var navActiveItem = getActiveNavItem();
        setActiveLink( navActiveItem );
          
        menuBtn.addEventListener( 'click', toggleMenu );
     }catch( ex ){
         console.error( ex );
     }
 }

 fireUp();

function  getActiveNavItem() {
    for(var i = 0; i < navItems.length; i++) {
        if( navItems[i].classList.contains( 'active' ) ) {
            return navItems[i];
        }
    }
    return null;
}

function setActiveLink( activeNavItem ) {
    if( activeNavItem ) {
        var index = selectedNavItemIndex();
        if( index > -1 ) {
            activeNavItem.classList.remove( 'active' );
            navItems[index].classList.add( 'active' );
        }

    }
}

function selectedNavItemIndex(){
    for( var i = 0; i < navLinks.length; i++ ) {
        if( navLinks[i].href === window.location.href ) {
            return i;
        }
    }
    return -1;
}

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