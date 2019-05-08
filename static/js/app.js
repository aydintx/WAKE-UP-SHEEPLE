// from data.js
var tableData = data;

// Get a reference to the table body
let tbody = d3.select("tbody");

data.forEach(ufos => {
    const row = tbody.append("tr");
    for (const key in ufos){
        row.append("td").text(ufos[key])
    }
})

// Select the submit button
const submit = d3.select("#filter-btn");

submit.on("click", function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    const inputElement = d3.select("#datetime");

    // Get the value property of the input element
    const inputValue = inputElement.property("value");
    // Remove the existing table
    d3.select("tbody").selectAll("tr").remove();

    data.forEach(ufos2 => {
            if (ufos2["datetime"]==inputValue) {
           
                const row = tbody.append("tr");
                for (const key in ufos2){
                    row.append("td").text(ufos2[key])
                }
            }
    })
});