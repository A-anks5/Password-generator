const character=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
    'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
    '0','1','2','3','4','5','6','7','8','9',
    '!','@','#','$','%','^','&','*','(',')','_','+','-','=','[',']','{','}','|',';',':',"'",',','.','<','>','/','?', '`','~','"','\\']
const chAZ=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const chaz=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const ch09=['0','1','2','3','4','5','6','7','8','9']
const chsp=['!','@','#','$','%','^','&','*','(',')','_','+','-','=','[',']','{','}','|',';',':',"'",',','.','<','>','/','?', '`','~','"','\\']

let psd1=document.getElementById("psd1-el")
let psd2=document.getElementById("psd2-el")
let psd_1=""
let psd_2=""
let n=document.getElementById("input-el")
let UPcheck=document.getElementById("up-el")
let LWcheck=document.getElementById("lw-el")
let NUMcheck=document.getElementById("num-el")
let SPcheck=document.getElementById("sp-el")
let copyEl=document.querySelector("#copy-el")

function genpassword(){
    reset()
    let randomIndex1=0
    let randomIndex2=0
    let psd=[]
    if(n.value>0&&n.value<=15){
        if(UPcheck.checked)
            psd=psd.concat(chAZ)
        if(LWcheck.checked)
            psd=psd.concat(chaz)
        if(NUMcheck.checked)
            psd=psd.concat(ch09)
        if(SPcheck.checked)
            psd=psd.concat(chsp)
        if(UPcheck.checked===false&&LWcheck.checked===false&&NUMcheck.checked===false&&SPcheck.checked===false){
            for(let i=0;i<n.value;i++){
                randomIndex1=Math.floor(Math.random()*character.length)
                randomIndex2=Math.floor(Math.random()*character.length)
                psd_1+=character[randomIndex1]
                psd_2+=character[randomIndex2]
            }
            return [psd_1,psd_2]
        }
        for(let i=0;i<n.value;i++){
            randomIndex1=Math.floor(Math.random()*psd.length)
            randomIndex2=Math.floor(Math.random()*psd.length)
            psd_1+=psd[randomIndex1]
            psd_2+=psd[randomIndex2]
        }
    return [psd_1,psd_2]
    }
    else{
        alert("Cannot generate!")
    }
}

function password(){
    let result=genpassword()
    psd1.textContent=result[0]
    psd2.textContent=result[1]
}

function reset(){
    psd_1=""
    psd_2=""
}

function copypassword(element){
    navigator.clipboard.writeText(element.textContent)
    copyEl.textContent="Copied!"
    setTimeout(function(){
        copyEl.textContent=""
    },1500)
}