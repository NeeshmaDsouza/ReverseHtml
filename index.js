function reverseFunction(){
    document.getElementsByClassName("outputClass")[0].value = document.getElementsByClassName("inputClass")[0].value.split("").reverse().join("");
}

function disapperAlpha(){
    let getOutPutValue = document.getElementsByClassName("outputClass")[0].value;
    let newOutPutValue = getOutPutValue.split("").sort();
    let finalOutput = newOutPutValue.splice(1).join("");
    //document.getElementsByClassName("outputClass")[0].value = finalOutput;
    
    console.log("+++++", getOutPutValue, finalOutput)
    let array1 = getOutPutValue.split("")
    let array2 = finalOutput.split("")
    array1 = array1.filter(val => array2.includes(val));

    document.getElementsByClassName("outputClass")[0].value = array1.join("");
}

