function dayToWeek(NoOfDays:number)
{

    if(NoOfDays<=6)
    {
     console.log(`${NoOfDays} days`)   
    }
    else 
    {
        let week:number=(NoOfDays/7);
    let days:number=NoOfDays%7;
    if (days==0)
    {
        console.log(`${Math.floor(week)} weeks`);
    }
    else 
    {
        console.log(`${Math.floor(week)} weeks and ${days} days`);
    }
}
}


dayToWeek(8);