// Separa objetos y propiedades
// 1ro almacena propiedades o atributos de la calculadora

var properties = {
    keys: document.querySelectorAll('#calculadora ul li'),
    action: null,
    digit: null,
    operations: document.querySelector("#operaciones"),
    operatorCant: 0,
    decimalNumbers: false,
    result: false
}

// 2do almacena metodos de la calculadora

var methods = {
    init: function(){
        for(var i = 0; i < properties.keys.length; i++){
            properties.keys[i].addEventListener("click", methods.pressKey);
            
        }
    },
    pressKey: function(key){
        /*tomo la propiedad target porque es la que trae la propiedad li*/
        properties.action = key.target.getAttribute("class");
        properties.digit = key.target.innerHTML; // en este caso capturo el contenido HTML del elemento seleccionado
        console.log("properties.digit:", properties.digit);
        methods.calc(properties.action, properties.digit);
    },
    calc: function(action, digit){
        switch(action){
            case "numero":
                properties.operatorCant = 0;
                if(properties.operations.innerHTML == 0){
                    properties.operations.innerHTML = digit;
                }else{
                    if(properties.result){
                        properties.result = false;
                        properties.operations.innerHTML = digit;                        
                    }else{
                        properties.operations.innerHTML += digit;
                    }                    
                }
                break;
            case "signo":
                properties.operatorCant += 1;
                if(properties.operatorCant == 1){
                    if(properties.operations.innerHTML == 0){
                        properties.operations.innerHTML = 0;
                    }else{
                        properties.operations.innerHTML += digit;
                        properties.decimalNumbers = false;
                        properties.result = false;
                    }                    
                }                
                break;
            case "igual": 
                properties.operations.innerHTML = eval(properties.operations.innerHTML);
                properties.result = true;
                break;
            case "decimal":
                if(!properties.decimalNumbers){
                    properties.operations.innerHTML += digit;
                    properties.decimalNumbers = true;
                    properties.result = false;
                }                
                break;            
        }
    },
    eraseCalc: function(){
        properties.operations.innerHTML = 0;
    },
    
}
methods.init();