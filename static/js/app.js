
// from data.js
var tableData = data;

// select tbody 
tbody = d3.select("tbody")
console.log("hello")

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

console.log("hello2")


// Select the submit button
var submit = d3.select("#submit");

submit.on("click", function() {
    console.log("hello3")

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var dateInput = d3.select("#datetime");
  var cityInput = d3.select("#city");
  var stateInput = d3.select("#state");
  var countryInput = d3.select("#country");
  var shapeInput = d3.select("#shape");

  // Get the value property of the input element
  console.log(dateInput.property("value"));
  console.log(cityInput.property("value"));
  console.log(stateInput.property("value"));
  console.log(countryInput.property("value"));
  console.log(shapeInput.property("value"));

  //create a variable which filters the table if a user enters only some information in so that it will still work

 var filtered = tableData.filter(et_sighting =>{
  return (et_sighting.datetime===dateInput.property("value") || !dateInput.property("value") ) && 
            (et_sighting.city===cityInput.property("value") || !cityInput.property("value")) &&
            (et_sighting.state===stateInput.property("value") || !stateInput.property("value")) &&
            (et_sighting.country===countryInput.property("value") || !countryInput.property("value")) &&
            (et_sighting.shape===shapeInput.property("value") || !shapeInput.property("value"))
 })

 //run the filtered entries through the displayData function to update the table
 displayData(filtered);


});








