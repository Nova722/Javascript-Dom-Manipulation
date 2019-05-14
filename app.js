// from data.js
var tableData = data;

// select tbody 
tbody = d3.select("tbody")

// loop through table using pbject entries
function displayData(something){ 
    tbody.text("")
    something.forEach(function(et_sighting){
    new_tr = tbody.append("tr")
    Object.entries(et_sighting).forEach(function([key, value]){
        new_td = new_tr.append("td").text(value)	
    })
})}

displayData(tableData)

//user input and filter button
var dateInput = d3.select("#datetime")
var button = d3.select("#filter-btn").on("click", clickSelect)


// filter data with date that the user inputs
function clickSelect(){
    //no page refresh
    d3.event.preventDefault();
    console.log(dateInput.property("value"));
    //create a new table with filter
    var filter_table = tableData.filter(et_sighting => et_sighting.datetime===dateInput.property("value"))
    //display new table
    displayData(filter_table);
}

//user input and filter button
var cityInput = d3.select("#city")
var button2 = d3.select("#filter-btn2").on("click", clickSelectcity)

// filter data with date that the user inputs
function clickSelectcity(){
    //no page refresh
    d3.event.preventDefault();
    console.log(cityInput.property("value"));
    //create a new table with filter
    var filter_table = tableData.filter(et_sighting => et_sighting.city===cityInput.property("value"))
    //display the table
    displayData(filter_table);
}


//user input and filter button
var stateInput = d3.select("#state")
var button3 = d3.select("#filter-btn3").on("click", clickSelectstate)

// filter data with date that the user inputs
function clickSelectstate(){
    //no page refresh
    d3.event.preventDefault();
    console.log(stateInput.property("value"));
    //create a new table with filter
    var filter_table = tableData.filter(et_sighting => et_sighting.state===stateInput.property("value"))
    //display the table
    displayData(filter_table);

}

//user input and filter button
var countryInput = d3.select("#country")
var button4 = d3.select("#filter-btn4").on("click", clickSelectcountry)

// filter data with date that the user inputs
function clickSelectcountry(){
    //no page refresh
    d3.event.preventDefault();
    console.log(countryInput.property("value"));
    //create a new table with filter
    var filter_table = tableData.filter(et_sighting => et_sighting.country===countryInput.property("value"))
    //display the table
    displayData(filter_table);
}


//user input and filter button
var shapeInput = d3.select("#shape")
//var shapeInput = shapeInput2.toLowerCase()
var button5 = d3.select("#filter-btn5").on("click", clickSelectshape)

// filter data with date that the user inputs
function clickSelectshape(){
    //no page refresh
    d3.event.preventDefault();
    console.log(shapeInput.property("value"));
    //create a new table with filter
    var filter_table = tableData.filter(et_sighting => et_sighting.shape===shapeInput.property("value"))
    //display the table
    displayData(filter_table);
}





