function category(age:number)
{
    if(age>=0 && age<=12)
    {
        console.log("CHILD");
    }
    else if(age>=13 && age<=19)
    {
        console.log("TEENAGER");
    }

    else{
        console.log("ADULT");
    }
}