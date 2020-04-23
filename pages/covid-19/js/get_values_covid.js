// ##### MULTIPLE COUNTRYS CASES
function getSelectValue_world() {
    var selectorVariable = document.getElementById("selectorVariable").value;
    var selectorOption = document.getElementById("selectorOption").value;
    var selectorScale = document.getElementById("selectorScale").value;


    if (selectorOption == '') {
        var pathValue = `images/multipleCountry/${selectorVariable}_${selectorScale}.html`;
    } else {
        var pathValue = `images/multipleCountry/${selectorOption}_${selectorVariable}_${selectorScale}.html`;
    }
    // var res = `${str1} ${str2}`;
    document.getElementById("iframeId_world").src = pathValue;
    console.log(pathValue);
}
getSelectValue_world();





// ##### SINGLE COUNTRYS CASES
function getSelectValue_country() {
    var selectorCountry = document.getElementById("selectorCountry").value;

    var pathValue = `images/singleCountry/${selectorCountry}.html`;
    // var res = `${str1} ${str2}`;               
    document.getElementById("iframeId_country").src = pathValue;
    console.log(pathValue);
}
getSelectValue_country();



// ##### MULTIPLE COUNTRYS CASES
function getSelectValue_brasil() {
    var selectorVariable = document.getElementById("selectorVariableBR").value;
    var selectorOption = document.getElementById("selectorOptionBR").value;
    var selectorScale = document.getElementById("selectorScaleBR").value;


    if (selectorOption == '') {
        var pathValue = `images/brasil/cumulative/${selectorVariable}_${selectorScale}.html`;
    } else {
        var pathValue = `images/brasil/cumulative/${selectorOption}_${selectorVariable}_${selectorScale}.html`;
    }
    // var res = `${str1} ${str2}`;
    document.getElementById("iframeId_brasil").src = pathValue;
    console.log(pathValue);
}
getSelectValue_brasil();





// ##### SINGLE COUNTRYS CASES
function getSelectValue_estados() {
    var selectorOptionState = document.getElementById("selectorOptionState").value;
    var selectorState = document.getElementById("selectorState").value;

    var pathValue = `images/brasil/daily/${selectorState}_${selectorOptionState}.html`;
    // var res = `${str1} ${str2}`;               
    document.getElementById("iframeId_states").src = pathValue;
    console.log(pathValue);
}
getSelectValue_estados();





// ##### MULTIPLE COUNTRYS CASES
function getSelectValue_vale() {
    var selectorVariable = document.getElementById("selectorVariableVale").value;
    var selectorOption = document.getElementById("selectorOptionVale").value;
    var selectorScale = document.getElementById("selectorScaleVale").value;


    if (selectorOption == '') {
        var pathValue = `images/vale/cumulative/${selectorVariable}_${selectorScale}.html`;
    } else {
        var pathValue = `images/vale/cumulative/${selectorOption}_${selectorVariable}_${selectorScale}.html`;
    }
    // var res = `${str1} ${str2}`;
    document.getElementById("iframeId_vale").src = pathValue;
    console.log(pathValue);
}
getSelectValue_vale();





// ##### SINGLE COUNTRYS CASES
function getSelectValue_vale_cidades() {
    var selectorOptionValeCities = document.getElementById("selectorOptionValeCities").value;
    var selectorValeCities = document.getElementById("selectorValeCities").value;

    var pathValue = `images/vale/daily/${selectorValeCities}_${selectorOptionValeCities}.html`;
    // var res = `${str1} ${str2}`;               
    document.getElementById("getSelectValue_vale_cidades").src = pathValue;
    console.log(pathValue);
}
getSelectValue_vale_cidades();