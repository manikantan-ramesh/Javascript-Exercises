function demo()
{
    //var number =prompt('Enter an Integer:');
    var n= document.getElementById("myText").value;
for(let i = 1; i <= 10; i++)
{
    const result = i * n;
    // console.log(`${n} * ${i} = ${result}`);
    console.log(n + '*' + i + '=' + result);
}
console.log("Table printing on console Completed");
}

