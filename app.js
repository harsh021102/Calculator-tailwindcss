const output = document.querySelector('input')
const buttons = document.querySelectorAll('.btn')

// console.log(output.value)
function addSymbol(sym){
    let num = output.value
    const len = num.length
    // console.log(num)
    // console.log(num.length)
    if(num==="")
    output.value ='0' + sym
    else if(num[len-1]==="+"||num[len-1]==="-"||num[len-1]==="/"||num[len-1]==="x")
    {
        console.log(sym)
        num = num.slice(0, -1);
        num=num+sym
        output.value=num
        console.log("last:",num)
    }
    else
    {
        output.value += sym
    }
}
buttons.forEach(function(btn){
    // console.log(btn)
    btn.addEventListener("click",function(){
        const icon = btn.querySelector('i')
        // console.log(icon)
        if(icon!==null)
        {
            if(icon.classList.contains('fa-delete-left'))
            {
                let num = output.value
                output.value=num.slice(0,-1)
            }
            else if(icon.classList.contains('fa-xmark'))
            {
                // console.log("x")
                addSymbol('*')
            }
            else if(icon.classList.contains('fa-divide'))
            {
                // console.log("/")
                addSymbol('/')
            }
            else if(icon.classList.contains('fa-minus'))
            {
                // console.log("-")
                addSymbol('-')
            }
            else if(icon.classList.contains('fa-plus'))
            {
                console.log("+")
                addSymbol('+')
            }
            else if(icon.classList.contains('fa-equals'))
            {
                console.log("=")
                output.value=eval(output.value)
            }
        }
        else{
            if(btn.innerHTML==='AC')
                output.value = ""
            else if(btn.innerHTML==='0')
            {
                if(output.value !== "")
                    output.value=output.value+ '0'
            }
            else{
                console.log(btn.innerHTML)
                output.value=output.value+btn.innerHTML
            }
            // console.log(output.value.length)
        }
        
    })
})