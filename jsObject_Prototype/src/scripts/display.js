export default function display(){
    for(var i =0;i<arguments.length;i++){
        if(typeof arguments[i]==='object')
            displayObject(arguments[i]);
        else 
            displayValue(arguments[i,true]);
    }
}

function displayObject(object){
    displayValue(getTypeName(object)+' {');
    for(var propertyName in object){
        displayValue(propertyName+': '+object[propertyName],true,true);
    }
    displayValue('}',true);
}

function displayValue(value,addMargin,addPadding){
    var div = document.createElement('div');
    div.style.fontSize='32px';
    if(addMargin){
        div.style.marginBottom='30px';
    }
    if(addPadding){
        div.style.paddingLeft='30px';
    }
    div.innerText=value;
    document.body.appendChild(div);
}

function getTypeName(object){
    var funcNameRegex = /function(.{1,})\(/;
    var result = (funcNameRegex).exec(object.constructor.toString);
    return (result && result.length>1) ? result[1]:"";
}