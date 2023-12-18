function CalculateDiscount(price:number)
{
   
    let discount:number;
    if(price>100)
    {
        discount=(10*price)/100;
       
    return discount;
    }
    else{
        discount=(5*price)/100;
       
    return discount;
    }
  
}

console.log(`your discount is ${CalculateDiscount(380)}`);