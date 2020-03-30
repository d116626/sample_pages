function getSelectValue()
{
    var selectedValue1 = document.getElementById("map0_selector1").value;
    var selectedValue2 = document.getElementById("map0_selector2").value;

    var pathValue = `../images/mapas_sjc/gerais/${selectedValue1}/${selectedValue1}_${selectedValue2}_GERAL.html`;
    // var res = `${str1} ${str2}`;
    document.getElementById("iframeId0").src = pathValue;
    console.log(pathValue);
}
getSelectValue();


function getSelectValue2()
{
    var selectedValue1 = document.getElementById("map1_selector1").value;
    var selectedValue2 = document.getElementById("map1_selector2").value;
    var selectedValue3 = document.getElementById("map1_selector3").value;

    var pathValue = `../images/mapas_sjc/gerais/${selectedValue1}/${selectedValue1}_${selectedValue2}_${selectedValue3}.html`;
    // var res = `${str1} ${str2}`;
    document.getElementById("iframeId2").src = pathValue;
    console.log(pathValue);
}
getSelectValue2();



function getSelectValue3()
{
    var selectedValue1 = document.getElementById("map2_selector1").value;
    var selectedValue2 = document.getElementById("map2_selector2").value;
    var selectedValue3 = document.getElementById("map2_selector3").value;

    var pathValue = `../images/mapas_sjc/individuais/${selectedValue1}/${selectedValue1}_${selectedValue2}_${selectedValue3}.html`;
    // var res = `${str1} ${str2}`;
    document.getElementById("iframeId3").src = pathValue;
    console.log(pathValue);
}
getSelectValue3();