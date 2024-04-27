

"use strict";

const 
   _ = ( ...v ) => console.log( ...v )
   ,
   $ = v => document.querySelector( v )
   ,
   $$ = v => document.querySelectorAll( v )
;

addEventListener( "load", () => {
   
   $$( "nav-link" ).forEach( nv => {
      nv.outerHTML = `
         <a href="${ nv.getAttribute( "to" ) }" target="_blank">
            ${ nv.innerText }
         </a>
      `;
   } );



} );