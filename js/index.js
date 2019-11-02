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
            properties.keys[i].addEventListener("click", methods.clickKey);            
        }        
    },
    clickKey: function(key){
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
    keyboard: function(){
        document.addEventListener("keydown", methods.pressKey);
    },
    pressKey: function(key){
        console.log("Tecla: ",key.keyCode);

        // Numeros
        if(key.keyCode == 48 || key.keyCode == 96){
            properties.action = "numero";
            properties.digit = 0;
        }
        if(key.keyCode == 49 || key.keyCode == 97){
            properties.action = "numero";
            properties.digit = 1;
        }
        if(key.keyCode == 50 || key.keyCode == 98){
            properties.action = "numero";
            properties.digit = 2;
        }
        if(key.keyCode == 51 || key.keyCode == 99){
            properties.action = "numero";
            properties.digit = 3;
        }
        if(key.keyCode == 52 || key.keyCode == 100){
            properties.action = "numero";
            properties.digit = 4;
        }
        if(key.keyCode == 53 || key.keyCode == 101){
            properties.action = "numero";
            properties.digit = 5;
        }
        if(key.keyCode == 54 || key.keyCode == 102){
            properties.action = "numero";
            properties.digit = 6;
        }
        if(key.keyCode == 55 || key.keyCode == 103){
            properties.action = "numero";
            properties.digit = 7;
        }
        if(key.keyCode == 56 || key.keyCode == 104){
            properties.action = "numero";
            properties.digit = 8;
        }
        if(key.keyCode == 57 || key.keyCode == 105){
            properties.action = "numero";
            properties.digit = 9;
        }

        /**
         * Simbolos 
         */
        if(key.keyCode == 187 || key.keyCode == 107){
            properties.action = "signo";
            properties.digit = "+";
        }
        if(key.keyCode == 189 || key.keyCode == 109){
            properties.action = "signo";
            properties.digit = "-";
        }
        if(key.keyCode == 88 || key.keyCode == 106){
            properties.action = "signo";
            properties.digit = "*";
        }
        if(key.keyCode == 111){
            properties.action = "signo";
            properties.digit = "/";
        }
        if(key.keyCode == 190 || key.keyCode == 110){
            properties.action = "decimal";
            properties.digit = ".";
        }
        if(key.keyCode == 13){
            properties.action = "igual";            
        }
        if(key.keyCode == 8){
            methods.eraseCalc();            
        }



        methods.calc(properties.action, properties.digit);
    }
}
methods.init();
methods.keyboard();