function taxcalculator(units:number,bill:number)
{
    let tax:number;
    let totalBill:number;
    if(units>100 && units<200)
    {
               tax=(10*bill)/100;
       totalBill=tax+bill;
       console.log(`your tax is ${tax}`);
               return totalBill;
    }
    else if(units>200 && units<300)
    {
               tax=(15*bill)/100;
               console.log(`your tax is ${tax}`);
               totalBill=tax+bill;
               return totalBill;
    }
    else if(units>300 && units<400)
    {
               tax=(20*bill)/100;
               console.log(`your tax is ${tax}`);
               totalBill=tax+bill;
               return totalBill;
    }
   else if(units>500)
    {
               tax=(25*bill)/100;
               console.log(`your tax is ${tax}`);
               totalBill=tax+bill;
               return totalBill;
    }
    else{
        console.log(`your tax is 0`);
        totalBill=bill;
        return totalBill;
    }

}
let bill:number=1000;
let unit:number=250;

console.log(`your total bill is  ${taxcalculator(unit,bill)}`);