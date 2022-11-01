/*Of four athletics runners it is known that с has arrived immediately behind B, and D has arrived in 
the middle of A and C. Could you calculate the order of arrival?*/
var a = {
    A:0,
    B:0,
    C:0,
    D:0,
    resultado: function(){
        if (a.C > a.B && a.D > a.B && a.D > a.C && a.D < a.A){ return true; } return false;

    },

    intervalo: setInterval(function(){

        a.A=Math.ceil (Math.random()*4)
        a.B=Math.ceil (Math.random()*4)
        a.C=Math.ceil (Math.random()*4)
        a.D=Math.ceil (Math.random()*4)

        if(a.resultado()){
            clearInterval(a.intervalo);
            console.log("Runner A", a.A)
            console.log("Runner B", a.B)
            console.log("Runner C", a.C)
            console.log("Runner D", a.D)
        }

    },10)
}

/* Mac's horse is darker than Smith's, but faster and older than Jack's, which is even slower than Willy's, 
which is younger than Mac's, which is older than Smith's , which is lighter than Willy's, although Jack's is 
slower and darker than Smith's. Which is the oldest, which is the slowest and which is the clearest?*/
var b ={

    Mac: {edad:0, velocidad:0, color:0},
    Smith: {edad:0, velocidad:0, color:0},
    Jack: {edad:0, velocidad:0, color:0},
    Willy: {edad:0, velocidad:0, color:0},
    resultado: function(){

        if (b.Mac.color > b.Smith.color && b.Mac.velocidad > b.Jack.velocidad && b.Mac.edad> b.Jack.edad &&
            b.Willy.velocidad > b.Jack.velocidad && b.Mac.edad > b.Willy.edad && b.Mac.edad > b.Smith.edad &&
            b.Willy.color > b.Smith.color && b.Smith.velocidad > b.Jack.velocidad && b.Jack.color > b.Smith.color)
            {return true;} return false;


        },
        intervalo : setInterval(function(){

            /*Mac's horse*/
            b.Mac.edad= Math.ceil(Math.random()*2);
            b.Mac.velocidad= Math.ceil(Math.random()*2);
            b.Mac.color= Math.ceil(Math.random()*2);
            /*Smith's horse*/
            b.Smith.edad= Math.ceil(Math.random()*2);
            b.Smith.velocidad= Math.ceil(Math.random()*2);
            b.Smith.color= Math.ceil(Math.random()*2);
            /*Jack's horse*/
            b.Jack.edad= Math.ceil(Math.random()*2);
            b.Jack.velocidad= Math.ceil(Math.random()*2);
            b.Jack.color= Math.ceil(Math.random()*2);
            /*Willy's horse*/
            b.Willy.edad= Math.ceil(Math.random()*2);
            b.Willy.velocidad= Math.ceil(Math.random()*2);
            b.Willy.color= Math.ceil(Math.random()*2);
            
            

            if(b.resultado()){
                clearInterval(b.intervalo);
                console.log("Mac's horse",b.Mac);
                console.log("Smith's horse",b.Smith);
                console.log("Jack's horse",b.Jack);
                console.log("Willy's horse",b.Willy);
            }


            },1)

}
