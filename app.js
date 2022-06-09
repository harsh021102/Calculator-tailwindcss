const output = document.querySelector('input')
const buttons = document.querySelectorAll('.btn')

// console.log(output.value)
function addSymbol(sym){
    let num = output.value
    const len = num.length
    if(num==="")
        output.value ='0' + sym
    else if(num[len-1]==="+"||num[len-1]==="-"||num[len-1]==="/"||num[len-1]==="*")
    {
        num = num.slice(0, -1);
        num=num+sym
        output.value=num
    }
    else if(num[len-1]===".")
    {

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
            else if(btn.innerHTML==='.')
            {
                let num = output.value,flag=0;
                const len = num.length;
                for(let i=len-1;i>=0;i--)
                {
                    // console.log(i)
                    if(num[i]==="+"||num[i]==="-"||num[i]==="/"||num[i]==="*")
                        break;
                    if(num[i]===".") //point is already present
                    {
                        flag=1;
                        console.log("i value:",i,num[i])
                        console.log("char is:",num[i])
                    }
                }
                if(flag===0)
                {
                    if(output.value==="")
                    {
                        output.value="0"+".";
                        console.log("pp")
                    }
                    else if(num[len-1]==="+"||num[len-1]==="-"||num[len-1]==="/"||num[len-1]==="x")
                    {
                        console.log("h")
                        output.value+="0"+".";
                    }
                    else
                    {
                        output.value=output.value+".";
                        console.log("hp")
                    }    
                }   
            }
            else{
                console.log(btn.innerHTML)
                output.value=output.value+btn.innerHTML
            }
            // console.log(output.value.length)
        }
        
    })
})