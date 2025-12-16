document.addEventListener(('DOMContentLoaded'),async()=>{
    let date =new Date();
    let day = date.getDay();
    let dayIndex;
    if(day===0)
    {
        dayIndex=7;
    }
    else{
        dayIndex=day;
    }
    let bars = document.querySelectorAll('.bars>div');
    bars.forEach((bar)=>{
        if(bar.className === `bar${dayIndex}`)
        {
            bar.classList.add('differentColor');
        }
    })
    let req = await fetch('data.json');
    let totalMonthParagraph = document.querySelector('.total-result');
    let data = await req.json();
    let amounts = data.map((item)=>item.amount);
    let sumaLuna = amounts.reduce((sum, el)=>{
        return sum+el;
    },0)
    totalMonthParagraph.innerHTML = sumaLuna;
    data.forEach((data)=>{
        bars.forEach((bar)=>{
            if(bar.dataset.zi === data.day)
            {
                bar.dataset.amount = `$${data.amount}`;
                
            }
        })
    })    
    
    
    
})