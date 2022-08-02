
function convertToRoman(num)
{
    var output;
    if(num==1)
    output='I';
    if(num==5)
    output='V';
    if(num==10)
    output='X';
    if(num==50)
    output='L';
    if(num==100)
    output='C';
    if(num==500)
    output='D';
    if(num==1000)
    output='M';
    


    return output;
}
console.log(convertToRoman(36));