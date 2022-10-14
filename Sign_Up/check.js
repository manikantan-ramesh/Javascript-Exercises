function formValidation()
{
var uid = document.registration.userid;
var passid = document.registration.passid;
var uname = document.registration.username;
var uadd = document.registration.address;
var uemail = document.registration.email;
if(userid_validation(uid,5,12))
{
if(passid_validation(passid,7,12))
{
if(allLetter(uname))
{
if(alphanumeric(uadd))
{ 
if(ValidateEmail(uemail))
{
}
} 
}
} 
}
return false;
} 
function userid_validation(uid,mx,my)
{
var uid_len = uid.value.length;
if (uid_len == 0 || uid_len >= my || uid_len < mx)
{
alert("User Id should not be empty / length be between "+mx+" to "+my);
uid.focus();
return false;
}
return true;
}
function passid_validation(passid,mx,my)
{
var passid_len = passid.value.length;
if (passid_len == 0 ||passid_len >= my || passid_len < mx)
{
alert("Password should not be empty / length be between "+mx+" to "+my);
passid.focus();
return false;
}
return true;
}
function allLetter(uname)
{ 
var letters = /^[A-Za-z]+$/;
if(uname.value.match(letters))
{
return true;
}
else
{
alert('Username must have alphabet characters only');
uname.focus();
return false;
}
}
function alphanumeric(uadd)
{ 
var letters = /^[0-9a-zA-Z]+$/;
if(uadd.value.match(letters))
{
return true;
}
else
{
alert('User address must have alphanumeric characters only');
uadd.focus();
return false;
}
}
function ValidateEmail(uemail)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
    var u = document.registration.userid.value;
    var p = document.registration.passid.value;
    var n = document.registration.username.value;
    var d = document.registration.address.value;
    var e = document.registration.email.value;
    
    console.log(`${u}`);
    console.log(`${p}`);
    console.log(`${n}`);
    console.log(`${d}`);
    console.log(`${e}`);
alert("Printed on console");

alert('Form Succesfully Submitted');
return true;
}
else
{
alert("You have entered an invalid email address!");
uemail.focus();
return false;
}
} 

function display()
{

var u = document.registration.userid.value;
var p = document.registration.passid.value;
var n = document.registration.username.value;
var d = document.registration.address.value;
var e = document.registration.email.value;

console.log(`${u}`);
console.log(`${p}`);
console.log(`${n}`);
console.log(`${d}`);
console.log(`${e}`);
alert("Printed on console");


}

