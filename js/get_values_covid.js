// ##### MULTIPLE COUNTRYS CASES
function getSelectValue() {
    var selectedValue1 = document.getElementById("total_selector1").value;

    var pathValue = `../images/covid19/multipleCountry/total_${selectedValue1}.html`;
    // var res = `${str1} ${str2}`;
    document.getElementById("iframeId0").src = pathValue;
    console.log(pathValue);
}
getSelectValue();


// ##### MULTIPLE COUNTRYS DEATHS
function getSelectValue_mortes() {
    var selectedValue1 = document.getElementById("mortes_selector1").value;

    var pathValue = `../images/covid19/multipleCountry/mortes_${selectedValue1}.html`;
    // var res = `${str1} ${str2}`;
    document.getElementById("iframeId_mortes").src = pathValue;
    console.log(pathValue);
}
getSelectValue_mortes();



// ##### SINGLE COUNTRYS CASES
function getSelectValue_countryCases() {
    var selectedValue1 = document.getElementById("country_cases_selector").value;
    var selectedValue2 = document.getElementById("country_cases_scale_selector").value;

    var pathValue = `../images/covid19/singleCountry/${selectedValue1}_total_${selectedValue2}.html`;
    // var res = `${str1} ${str2}`;               
    document.getElementById("iframeId_countryCases").src = pathValue;
    console.log(pathValue);
}
getSelectValue_brDeaths();



// ##### SINGLE COUNTRYS DEATHS
function getSelectValue_countryDeaths() {
    var selectedValue1 = document.getElementById("country_deaths_selector").value;
    var selectedValue2 = document.getElementById("country_deaths_scale_selector").value;

    var pathValue = `../images/covid19/singleCountry/${selectedValue1}_mortes_${selectedValue2}.html`;
    // var res = `${str1} ${str2}`;               
    document.getElementById("iframeId_countryDeaths").src = pathValue;
    console.log(pathValue);
}
getSelectValue_countryDeaths();



// ### BRAZIL COMPARISONS
function getSelectValue_compara() {
    var selectedValue1 = document.getElementById("pais_compare").value;

    var pathValue = `../images/covid19/comparacao/comparacao_brasil_vs_${selectedValue1}.html`;
    // var res = `${str1} ${str2}`;
    document.getElementById("iframeId_pais_compare").src = pathValue;
    console.log(pathValue);
}
getSelectValue_compara();