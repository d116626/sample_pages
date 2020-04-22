// ##### MULTIPLE COUNTRYS CASES
function getSelectValue_world() {
    var selectorVariable = document.getElementById("selectorVariable").value;
    var selectorOption = document.getElementById("selectorOption").value;
    var selectorScale = document.getElementById("selectorScale").value;


    if (selectorOption == '') {
        var pathValue = `images/world/multipleCountry/${selectorVariable}_${selectorScale}.html`;
    } else {
        var pathValue = `images/world/multipleCountry/${selectorOption}_${selectorVariable}_${selectorScale}.html`;
    }
    // var res = `${str1} ${str2}`;
    document.getElementById("iframeId_world").src = pathValue;
    console.log(pathValue);
}
getSelectValue_world();





// ##### SINGLE COUNTRYS CASES
function getSelectValue_country() {
    var selectorCountry = document.getElementById("selectorCountry").value;

    var pathValue = `images/world/singleCountry/${selectorCountry}.html`;
    // var res = `${str1} ${str2}`;               
    document.getElementById("iframeId_country").src = pathValue;
    console.log(pathValue);
}
getSelectValue_country();