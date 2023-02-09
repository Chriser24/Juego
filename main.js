Number = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,];
Number = Number.sort(() => Math.random()-0.5); //Desordenar Numeros
let tarjetasDestapadas=0;
let tarjeta1 = null;
let tarjeta2 = null;
let Resultado1='';
let Resultado2='';
let Mostraraciertos= document.getElementById('aciertos');
let Mostrarmovimientos= document.getElementById('movimientos');
let temporizador=0;
let tiempo=5;


function ContarTiempo(){
    if(tiempo==0){
        clearInterval(MiTiempo);
        voltearTodas();
    }else{
        setInterval(()=>{
            tiempo--
            document.getElementById('tiempo').innerHTML=`Tiempo ${tiempo} segundos`
           },1000)
    }
   
}

function voltearTodas(){
    for(let i=0;i<=15;i++){
        document.getElementById(`${i}`).innerHTML=Number[i];
        document.getElementById(`${i}`).disabled=true;
    }
}


 function destapar(indice){
    
    tarjetasDestapadas++
    if(temporizador ==  false){
        true;
    }


    if(tarjetasDestapadas==1){
        tarjeta1=document.getElementById(indice)
        tarjeta1.innerHTML=Number[indice];
        tarjeta1.disabled=true;
        Resultado1=Number[indice];
        console.log(tarjeta1);
    }
    else if(tarjetasDestapadas==2){
        tarjeta2=document.getElementById(indice)
        tarjeta2.innerHTML=Number[indice];
        tarjeta2.disabled=true;
        Resultado2=Number[indice];
        console.log(tarjeta2);
        console.log(Resultado1,Resultado2);
        
        if(Resultado1==Resultado2){
            tarjetasDestapadas=0;
            aciertos++
            movimientos++
            console.log("Son iguales");
        }
        else{
            movimientos++
            setTimeout(()=>{
            tarjetasDestapadas=0;
            tarjeta1.disabled=false;
            tarjeta2.disabled=false;
            tarjeta1.innerHTML='';
            tarjeta2.innerHTML='';
        },1000)

        }

        Mostraraciertos.innerHTML=`aciertos: ${aciertos}`;
        Mostrarmovimientos.innerHTML=`Movimientos: ${Movimientos}`;
        
    }
    
    
};

function reset(){
    location.reload()
}
