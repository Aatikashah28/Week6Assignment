function percentage(totalMarks:number, ObtainedMarks:number)
{
    let percent:number=(ObtainedMarks/totalMarks)*100;
    return percent;
}

console.log(`your percentage = ${percentage(100,80)} %`);