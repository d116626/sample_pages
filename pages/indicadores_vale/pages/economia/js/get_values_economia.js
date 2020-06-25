function getSelectValue_economia() {
    var selectorIndicator = document.getElementById("selectorIndicator").value;

    var pathValue = `images/bars/${selectorIndicator}.html`;
    var pathValue_maps = `images/maps/${selectorIndicator}.png`;

    // var res = `${str1} ${str2}`;               
    document.getElementById("iframeId_bars").src = pathValue;
    document.getElementById("iframeId_maps").src = pathValue_maps;

    console.log(pathValue);
}
getSelectValue_economia();