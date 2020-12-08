// ##### MULTIPLE COUNTRYS CASES
function getSelectValue_mapa_eleicao() {
    var selectorAno = document.getElementById("selectorAno").value;
    var selectorPartido = document.getElementById("selectorPartido").value;
    var selectorCargo = document.getElementById("selectorCargo").value;
    var selectorMunicipio = document.getElementById("selectorMunicipio").value;


    var pathValue = `images/mapas/${selectorAno}/${selectorCargo}/${selectorPartido}_${selectorMunicipio}.html`;

    // var res = `${str1} ${str2}`;
    document.getElementById("iframeId_mapa_eleicao_municipal").src = pathValue;
    console.log(pathValue);
}
getSelectValue_mapa_eleicao();









// // ##### MULTIPLE COUNTRYS CASES
// function getSelectValue_brasil() {
//     var selectorVariable = document.getElementById("selectorVariableBR").value;
//     var selectorOption = document.getElementById("selectorOptionBR").value;
//     var selectorScale = document.getElementById("selectorScaleBR").value;


//     if (selectorOption == '') {
//         var pathValue = `images/brasil/cumulative/${selectorVariable}_${selectorScale}.html`;
//     } else {
//         var pathValue = `images/brasil/cumulative/${selectorOption}_${selectorVariable}_${selectorScale}.html`;
//     }
//     // var res = `${str1} ${str2}`;
//     document.getElementById("iframeId_brasil").src = pathValue;
//     console.log(pathValue);
// }
// getSelectValue_brasil();