var n=prompt("Enter the number");
n=parseInt(n);
var i;
i=parseInt(i);
var j;
j=parseInt(j);
var count;
count=parseInt(count);
var f;

if(isNaN(n)){
    alert("Please enter a valid number");
} 
else
{
    for(i=1;i<=n;i++)
       {
             count=i;
             f=0;
             for(j=2;j<count;j++)
             {
                     if(count%j==0)
                     {
                          f=1;
                          break;
                     }
             } 
             if(f==0)
                   console.log("These are prime numbers",count)
       } 
}
          