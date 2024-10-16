let start = document.getElementById("start");

const words = [
    {hu: "alma", en: "apple"},
    {hu: "ház", en: "house"},
    {hu: "kutya", en: "dog"},
    {hu: "macska", en: "cat"},
    {hu: "könyv", en: "book"},
    {hu: "auto", en: "car"},
    {hu: "bicikli", en: "bicycle"},
    {hu: "ablak", en: "window"},
    {hu: "szék", en: "chair"},
    {hu: "asztal", en: "table"},
]

const fodiv=document.getElementById("fodiv");
const fodivangol=document.getElementById("fodivangol");
fodiv.className="magyar"
fodivangol.className="angol"


start.addEventListener("click", function(){
    
    
    
    for(let i=0; i<words.length;i++){
        let div1 = document.createElement("div");
        let div2 = document.createElement("div");
        
        let gomb1= document.createElement("button");
        let gomb2= document.createElement("button");
        
        gomb1.innerText=words[i].hu;
        gomb2.innerText=words[i].en;
        div1.appendChild(gomb1);
        div2.appendChild(gomb2);
        fodiv.appendChild(div1);
        fodivangol.appendChild(div2);
        let helyesvalasz=0;
        let helytelen=0;

        gomb1.addEventListener("click",function(){
            let elsovalasztas = gomb1.innerText
            gomb1.style.backgroundColor = "olive";
            gomb2.addEventListener("click",function(){
                
                let masodikvalasztas= gomb2.innerText;
                let valasz=cucc(elsovalasztas,masodikvalasztas)
                
                if(valasz==1){
                    gomb1.style.backgroundColor = "Green"
                    gomb2.style.backgroundColor = "Green"
                    helyesvalasz++
                    helyes.innerText="Helyes válaszok" + helyesvalasz;
                    elsovalasztas="";
                    masodikvalasztas=""
                }
                else{
                    gomb1.style.backgroundColor = "White";
                    gomb2.style.backgroundColor = "White";
                    helytelen++
                    helyt.innerText="Helytelen válaszok:" + helytelen;
                    elsovalasztas="";
                    masodikvalasztas=""
                }

                /*let masodikvalasztas = gomb2.innerText
                gomb2.style.backgroundColor = "olive"
                if(elsovalasztas==words[hely].hu && masodikvalasztas==words[hely].en){
                    gomb1.style.backgroundColor = "Green"
                    gomb2.style.backgroundColor = "Green"
                    helyesvalasz++
                    elsovalasztas="";
                    masodikvalasztas=""
                    helyes.innerText="Helyes válaszok" + helyesvalasz;
                }
                else{
                    gomb1.style.backgroundColor = "White";
                    gomb2.style.backgroundColor = "White";
                    helytelen++;
                    elsovalasztas="";
                    masodikvalasztas="";
                    helyt.innerText="Helytelen válaszok:" + helytelen;
                }*/
            })
            
        })
        
        
        
    }


    function cucc(elsovalasz,masodikvalasz){
        let helytelen=1
        for(let i=0;i<words.length;i++){
            if(elsovalasz==words[i].hu && masodikvalasz==words[i].en){
                return 1;
            }
            else{
                helytelen++
            }
        }
        if(helytelen== words.length){
            return 0;
        }
        
    }
    let helyes = document.createElement("p");
    let helyt = document.createElement("p");
    document.body.appendChild(helyes);
    document.body.appendChild(helyt);
    helyes.innerText="Helyes válaszok:"
    helyt.innerText="Helytelen válaszok:"
})


document.body.appendChild(fodiv);
document.body.appendChild(fodivangol);