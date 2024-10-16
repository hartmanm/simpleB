/*
Copyright (c) 2016 Michael Neill Hartman. All rights reserved.
mnh_license@proton.me
https://github.com/hartmanm
*/

document.addEventListener( "DOMContentLoaded", getData );
document.addEventListener( "DOMContentLoaded", refresh(30000) );
function refresh( t )
{
setTimeout("location.reload(true);", t);
}
function getData()
{
event.preventDefault();
var req = new XMLHttpRequest();
req.open("GET", "https://api.coincap.io/v2/assets/bitcoin", false);
req.addEventListener( "load",function()
{
if( req.status >= 200 && req.status < 403 )
{
var response = JSON.parse( req.responseText );
var z = response.data.priceUsd;
var n = JSON.stringify( z );
n = n.slice(1, 8);
if(n.slice(1,2) != ".")
{
var n = JSON.stringify( z );
n = n.slice(1, 9);
}
document.getElementById( "btc" ).innerHTML = n;
}
else
{
console.log( "Error: " + req.statusText );
}
});
req.send( null );
}
