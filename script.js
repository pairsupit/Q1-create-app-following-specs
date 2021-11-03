let inputStr = document.getElementById('inputInt');
let select = document.getElementById('cal');
let answer = document.getElementById('answer');

inputStr.addEventListener('keyup', () => {
    roundNumber();
    answer.innerText = doCalculate();
})

select.addEventListener('change', () => {
    answer.innerText = doCalculate();
})

function roundNumber(){
    let num = Number(inputStr.value);
    if(!isNaN(num)){
        if((typeof num) == 'number'){ // is a number
            if( num < 0 ){
                num = 1;
                inputStr.value = num;
            }
            if(!Number.isInteger(num)){ // isFloat()
                num = num.toFixed(0);
                inputStr.value = num;
            }
        }
    }
}

function doCalculate(){
    let txt = '';
    //  '' == 0 AND 0 == ''
    // so if no input like this '' , input.value will be 0
    // if no input do not calculate 
    if(inputStr.value.length > 0){
        if(select.children[0].selected){
            txt = isPrime( Number(inputStr.value) );
        }
        if(select.children[1].selected){
            txt = isFibonacci( Number(inputStr.value) );
        }
    }
    return txt;
}

function isPrime(x){
    let bool = true;

    if( x == 1 || x == 0 ){
        bool = false;
        console.log( x +' is not prime');
        return bool;
    }else{
        for(var i=2 ; i<x ; i++){
            if(x%i == 0){
                bool = false;
                console.log( x +' is not prime');
                break;
            }
        }
        return bool
    }
    
}

function isFibonacci(x){
    let bool = false;
    let n0=0, n1=1, next;

    if( x == 0 ){   
        console.log( x +' is finonacci');
        bool = true;
        return bool;
    }
    
    for(var i=0 ; i<x ;i++){
        next = n0 + n1;
        n0 = n1;
        n1 = next;

        if( x == next){
            console.log( x +' is finonacci')
            bool = true;
            break;
        }
        
    }

    return bool;
}