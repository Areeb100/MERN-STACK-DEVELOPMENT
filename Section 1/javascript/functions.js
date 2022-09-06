// defining the function
// function addNums (a,b) {
    //  n ="This works in function only"
    // console.log(a+b);
// }

// calling the function
// addNums(7654, 4356);
// addNums(76, 34);
// addNums(54, 46);
// addNums(234, 536);
// console.log(n);

// factorial
// function fact(num){
//     let f = 1;
//     for(let i=2;i<=num;i++){
//         f = f * i;
//     }
//     console.log(f);
//     return f;
// }

// const sumprod = function(x , y){
//     s = x+y;
//     p = x*y;

//     return [s, p];
// }

// const [sum, prod] = sumprod(34,12);
// console.log(sum, prod);

// const checkPerfect = (m) => {
//     console.log(m**0.5);

//    if(m**0.5 === parseInt(m**0.5)){
//     console.log('perfect square');
//    }else{
//     console.log('not a perfect square');
//    }
// }
// checkPerfect(100);

// WAP to check if a number is prime.
c=0;
const checkprime =(n)=>
{
    for (let i=2; i<=(Math.sqrt(n)); i++)
    {if (n%i==0)
        c++;
    }
    if(c==0)
    {console.log(n)
        console.log("number is Prime");}
        else{
            console.log(n)
        console.log("number is not Prime");
        }
    }
    checkprime(11)   
    
    
    // WAP to check if a number is palindrome.
    const isPalindrome = (num) => {
        let temp=num;
        let rev=0;
        while(num>0){
            dig=num%10
            rev=rev*10+dig
            num=parseInt(num/10)
        }
        if(rev==temp)
        console.log(temp, 'is a Palindrome number');
        else
        console.log(temp, 'is not a Palindrome number');
    }
    isPalindrome(11)
   
