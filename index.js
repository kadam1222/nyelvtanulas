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

start.addEventListener("click", function(){
    
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    div1.id="magyar";
    div2.id="angol";
    document.body.appendChild(div1);
    document.body.appendChild(div2);
    for(let i=0; i<10;i++){
        let gomb1= document.createElement("button");
        let gomb2= document.createElement("button");
        gomb1.innerText=words[i].hu;
        gomb2.innerText=words[i].en;
        div1.appendChild(gomb1);
        div2.appendChild(gomb2);

        let helyesvalasz=0;
        let helytelen=0;

        gomb1.addEventListener("click",function(){
            let elsovalasztas = gomb1.innerText
            gomb1.style.backgroundColor = "olive";
            gomb2.addEventListener("click",function(){
                let masodikvalasztas = gomb2.innerText
                gomb2.style.backgroundColor = "olive"
                if(elsovalasztas==words[i].hu && masodikvalasztas==words[i].en){
                    gomb1.style.backgroundColor = "Green"
                    gomb2.style.backgroundColor = "Green"
                    helyesvalasz++
                    elsovalasztas="";
                }
                else{
                    gomb1.style.backgroundColor = "White";
                    gomb2.style.backgroundColor = "White";
                    helytelen++
                    elsovalasztas=""
                }
            })
        })
        
        gomb2.addEventListener("click",function(){
            let masodikvalasztas = gomb2.innerText
            gomb2.style.backgroundColor = "olive";
            gomb1.addEventListener("click",function(){
                let elsovalasztas = gomb2.innerText
                gomb1.style.backgroundColor = "olive"
                if(elsovalasztas==words[i].hu && masodikvalasztas==words[i].en){
                    gomb1.style.backgroundColor = "Green"
                    gomb2.style.backgroundColor = "Green"
                    helyesvalasz++
                    elsovalasztas="";
                }
                else{
                    gomb1.style.backgroundColor = "White";
                    gomb2.style.backgroundColor = "White";
                    helytelen++
                    elsovalasztas=""
                }
            })
        })
        
    }

})