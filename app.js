/* ---------------------------------------------
MIT License
Copyright (c) [2023] [Moritz Oczko]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. 
--------------------------------------------- */



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
}

function toSubArrays(){
    inputSubArrays=inputArray.map(preWord=>{return preWord.split(/(?=[A-Z])/)})
}

function generateRegex(){
   regexArray=[]
   inputSubArrays.forEach(subArray=>{
    regex=""
  
    for(let i=0;i<subArray.length;i++)
    {regex=regex+`[^cdefgabhs]*${subArray[i]}`}
    
    generatedRegex="^[^cdefgabhs]*"+regex+"[^cdefgabhs]*$"
    regexArray.push(generatedRegex)
    }
    )
}

function goToDict(regex){
  const stringToRegex=new RegExp(regex, "i")
  const resultArray=dictArray.filter(word=>{return stringToRegex.test(word)})
  const length=resultArray.length
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
if (analyser===false) {inspect(); analyser=true; document.getElementById("inspector").innerHTML="X"}
else {back(); analyser=false;document.getElementById("inspector").innerHTML="<i class='fa-solid fa-magnifying-glass'></i>"}
}

function back(){
    output.textContent=final
}

function inspect(){
    const result= document.getElementById("output").textContent.split(" ")



    for(let i=0; i<inputSubArrays.length; i++)
    {
     

        inputSubArrays[i] = [...new Set(inputSubArrays[i])];
        inputSubArrays[i].forEach(note=>inputSubArrays[i].push(note.toLowerCase()))

        for(let j=0; j<inputSubArrays[i].length; j++)
        {
            let search=new RegExp(inputSubArrays[i][j], "g")
            result[i]=result[i].replace(search,`<§>${inputSubArrays[i][j]}</%>`)
        } 
      
    }

   const ArrayToString=result.join(" ")
   const convertToBoldTag=ArrayToString.replace(/§|%/g, "span")
   const convertToBoldTagSpace=convertToBoldTag.trim().replace(/[ ]/g, "&nbsp")
   output.innerHTML=convertToBoldTagSpace
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


