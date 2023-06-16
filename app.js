let inputString=""
let inputArray=[]
let inputSubArrays=[]
let regex=""
let generatedRegex=""
let regexArray=[]
let analyser=false
let final=""


const enter=document.getElementById("enter")
const output=document.getElementById("output")

enter.addEventListener("click", getInput)
function getInput(){
    inputString=document.getElementById("input").textContent
    toArray()
    toSubArrays()
    generateRegex()
    final=regexArray.map(regex=>goToDict(regex)).join(" ")
    output.textContent=final
    if(analyser===true){inspect()}

}


function toArray(){
    formattedInputString=inputString.replace(/[ ]{2,}/g," ")
    inputArray=formattedInputString.trim().split(" ")
    console.log(inputArray)
}

function toSubArrays(){
    inputSubArrays=inputArray.map(preWord=>{return preWord.split(/(?=[A-Z])/)})
    console.log(inputSubArrays)
}

function generateRegex(){
   regexArray=[]
   inputSubArrays.forEach(subArray=>{
    regex=""
  
    for(let i=0;i<subArray.length;i++)
    {regex=regex+`[^cdefgabhs]*${subArray[i]}`}
    
    generatedRegex="^[^cdefgabhs]*"+regex+"[^cdefgabhs]*$"
    regexArray.push(generatedRegex)
    console.log(regexArray)
    }
    )
}

function goToDict(regex){
  const stringToRegex=new RegExp(regex, "i")
  const resultArray=dictArray.filter(word=>{return stringToRegex.test(word)})
  const length=resultArray.length
  console.log(length)
  const randomIndex=Math.floor(Math.random()*length)
  return resultArray[randomIndex]
}

document.getElementById("cis").addEventListener("click", ()=>document.getElementById("input").textContent+="Cis")
document.getElementById("dis").addEventListener("click", ()=>document.getElementById("input").textContent+="Dis")
document.getElementById("eis").addEventListener("click", ()=>document.getElementById("input").textContent+="Eis")
document.getElementById("fis").addEventListener("click", ()=>document.getElementById("input").textContent+="Fis")
document.getElementById("gis").addEventListener("click", ()=>document.getElementById("input").textContent+="Gis")
document.getElementById("ais").addEventListener("click", ()=>document.getElementById("input").textContent+="Ais")
document.getElementById("his").addEventListener("click", ()=>document.getElementById("input").textContent+="His")


document.getElementById("c").addEventListener("click", ()=>document.getElementById("input").textContent+="C")
document.getElementById("d").addEventListener("click", ()=>document.getElementById("input").textContent+="D")
document.getElementById("e").addEventListener("click", ()=>document.getElementById("input").textContent+="E")
document.getElementById("f").addEventListener("click", ()=>document.getElementById("input").textContent+="F")
document.getElementById("g").addEventListener("click", ()=>document.getElementById("input").textContent+="G")
document.getElementById("a").addEventListener("click", ()=>document.getElementById("input").textContent+="A")
document.getElementById("h").addEventListener("click", ()=>document.getElementById("input").textContent+="H")
document.getElementById("b").addEventListener("click", ()=>document.getElementById("input").textContent+="B")

document.getElementById("ces").addEventListener("click", ()=>document.getElementById("input").textContent+="Ces")
document.getElementById("des").addEventListener("click", ()=>document.getElementById("input").textContent+="Des")
document.getElementById("es").addEventListener("click", ()=>document.getElementById("input").textContent+="S")
document.getElementById("fes").addEventListener("click", ()=>document.getElementById("input").textContent+="Fes")
document.getElementById("ges").addEventListener("click", ()=>document.getElementById("input").textContent+="Ges")
document.getElementById("as").addEventListener("click", ()=>document.getElementById("input").textContent+="As")

document.getElementById("space").addEventListener("click", ()=>document.getElementById("input").textContent+=" ")


const inspector=document.getElementById("inspector")
inspector.addEventListener("click",inspectAndBack)

function inspectAndBack(){
if (analyser===false) {inspect(); analyser=true; document.getElementById("inspector").textContent="Hide"}
else {back(); analyser=false; document.getElementById("inspector").textContent="Show"}
}

function back(){
    output.textContent=final
}

function inspect(){
    const result= document.getElementById("output").textContent.split(" ")
    console.log(inputSubArrays)
    console.log(result)



    for(let i=0; i<inputSubArrays.length; i++)
    {
     
        console.log(result[i])
        console.log(inputSubArrays[i])

        for(let j=0; j<inputSubArrays[i].length; j++)
        {
            console.log(inputSubArrays[i][j])
            result[i]=result[i].replace(inputSubArrays[i][j],`<§>${inputSubArrays[i][j]}</%>`)
            result[i]=result[i].replace(inputSubArrays[i][j].toLowerCase(),`<§>${inputSubArrays[i][j].toLowerCase()}</%>`)
            console.log(result[i])
        } 
      
    }

   const ArrayToString=result.join(" ")
   const convertToBoldTag=ArrayToString.replace(/§|%/g, "span")
   const convertToBoldTagSpace=convertToBoldTag.trim().replace(/[ ]/g, "&nbsp")
   output.innerHTML=convertToBoldTagSpace
   console.log(convertToBoldTag)
}


function remove(){

const actualInput=document.getElementById("input").textContent
const actualInputArray=actualInput.split(/(?=[A-Z])/)
actualInputArray.pop();
document.getElementById("input").textContent=actualInputArray.join("")
if(actualInputArray.length<1){
    document.querySelectorAll(".controls").forEach(controlButton=>controlButton.setAttribute("disabled",true))
}

}

function reset(){
document.getElementById("input").textContent=""
output.textContent=""
document.querySelectorAll(".controls").forEach(controlButton=>controlButton.setAttribute("disabled",true))
document.getElementById("inspector").setAttribute("disabled",true)
}





document.getElementById("enter").addEventListener("click", ()=>document.getElementById("inspector").removeAttribute("disabled"))

document.querySelectorAll(".note").forEach(noteButton=>noteButton.addEventListener("click", ()=>document.querySelectorAll(".controls").forEach(controlButton=>controlButton.removeAttribute("disabled"))))


