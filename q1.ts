
function temperatureConverter (temperature:number,scale:string){

    let temp:number;
    if(scale=="c" || scale=="C"){
             temp= ((9/5)*temperature)+32;
           console.log(`${temp} F`)

    }
    else if(scale=="F" || scale=="f")
    {
        temp= (temperature-32)*(5/9);
        console.log(`${temp} C`)
    }
}


temperatureConverter(91,"c");