function validabc()
{
    //var h = document.getElementById("abc").value;
    userid(abc);
    function userid(abc)
    {
    var len = abc.value.length;
    if (len == 0)
    {
    alert("Please Enter The Number");
    abc.focus();
    }
    characters(abc);
    }

    function characters(abc)
    { 
    var letters = /^[A-Za-z]+$/;
    var numb = /^[0-9]+$/;
    if(abc.value.match(letters))
    {
        alert("Invalid Data , Program accepts only numbers ");
        abc.focus();
    }
    else if(abc.value.match(numb))
    {
    alert("User entered only Integers , lets check for binary");
    bin(abc);
    }
    }

    function bin(abc)
    {
        var w = document.getElementById("abc").value;
    while (w>0)
    {
        var j=w%10;
        if(j!=0 && j!=1)
        {
            alert("Entered number is not a binary")
            break;
        }
        w=Math.trunc(w/10);

        if(w==0)
        {
            alert("Number is Binary and verified");
        }
    
    }
    }
    

}










