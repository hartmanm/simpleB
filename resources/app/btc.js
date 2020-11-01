/***********************************************************************************************
**
**  Author:       Michael Hartman
**
**  Date:           2016-03-18
**
**  Filename:       btc.js
**
**  Description:    BTC/USD Ticker
**
***********************************************************************************************/

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

        req.open("GET", "https://api.bitcoinaverage.com/ticker/global/USD/last", false);

        req.addEventListener( "load",function()
        {
            if( req.status >= 200 && req.status < 403 )
            {
                document.getElementById( "btc" ).innerHTML = req.responseText;
            }

            else
            {
                console.log( "Error: " + req.statusText );
            }
        });

        req.send( null );
    }
