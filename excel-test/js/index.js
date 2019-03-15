'use strict';
$('#submit-file').on("click",function(e){
	e.preventDefault();
	$('#files').parse({
		config: {
			delimiter: "auto",
			complete: displayHTMLTable,
		},
		before: function(file, inputElem)
		{
			//console.log("Parsing file...", file);
		},
		error: function(err, file)
		{
			//console.log("ERROR:", err, file);
		},
		complete: function()
		{
			//console.log("Done with all files");
		}
	});
});

$('#submit-file').on("click",function(e){
	e.preventDefault();
	$('#files').parse({
		config: {
			delimiter: "auto",
			complete: displayHTMLTable,
		},
		before: function(file, inputElem)
		{
			//console.log("Parsing file...", file);
		},
		error: function(err, file)
		{
			//console.log("ERROR:", err, file);
		},
		complete: function()
		{
			//console.log("Done with all files");
		}
	});
});




function displayHTMLTable(results){
	var table = "<table class='table'>";
	var data = results.data;
	 
	for(i=0;i<data.length;i++){
		table+= "<tr>";
		var row = data[i];
		var cells = row.join(",").split(",");
		 
		for(j=0;j<cells.length;j++){
			table+= "<td>";
			table+= cells[j];
			table+= "</th>";
		}
		table+= "</tr>";
	}
	table+= "</table>";
	$("#parsed_csv_list").html(table);
}

/** Basic Types */

//Define a new variable `motto` for the value "The iSchool is my school"v

var ExcelToJSON = function() {
	console.log('here!')
  
	this.parseExcel = function(file) {
	  var reader = new FileReader();
  
	  reader.onload = function(e) {
		var data = e.target.result();
		var workbook = XLSX.read(data, {
		  type: 'binary'
		});
  
		workbook.SheetNames.forEach(function(sheetName) {
		  // Here is your object
		  var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
		  var json_object = JSON.stringify(XL_row_object);
		  console.log(json_object);
  
		})
  
	  };
  
	  reader.onerror = function(ex) {
		console.log(ex);
	  };
  
	  reader.readAsBinaryString(file);
	};
	ExcelToJSON();
  };

ExcelToJSON();

let motto = 'The iSchool is my school';


//Log out the motto

console.log(motto);


//Define a variable `mottoLength` that stores the length of the motto.
//Use the `.length` property
//Log out the length.

let mottoLength = motto.length;
console.log(mottoLength);


//Use the `indexOf()` String method to see if the word "cool" is in the string.
//See http://www.w3schools.com/jsref/jsref_obj_string.asp for String methods
//Log out a _boolean_ whether it is or not.

let coolIndex = motto.indexOf("cool");
console.log(Boolean(coolIndex>-1));


//Re-assign the `motto` variable with a value that has the word "iSchool" in the 
//motto with the words "Information School".
//Log out the updated motto.

motto = 'The Information School is my school';
console.log(motto);


//Calculate the ratio between the length of the updated motto and the length of 
//the old (which you had saved in a variable!). Log out this ratio as a 
//percentage with two decimal places of precision (e.g., `"123.45%"`).
//You can use the `.toFixed()` Number method to specify the precision. 

let mottoRatio = motto.length/mottoLength * 100;
console.log(mottoRatio.toFixed(2) + "%");


/** Arrays **/

//Create an array `numbers` that contains these 10 numbers:
//    1 4 1 5 9 2 6 5 3 5
//Log out the array.

let numbers = [1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log(numbers);


//Use bracket notation to change the `4` in the array to a `4.2`.
//Log out the updated array.

numbers[1] = 4.2;
console.log(numbers);


//Add the number 3 to the END of the array.
//Log out the updated array.

numbers.push(3);
console.log(numbers);


//Find the median (middle) value of the numbers in the array.
//Hint: sort() the array, then access the middle index of the sorted values.
//You can use the `Math.floor()` function to round to a whole number.
//Log out the median value.

numbers = numbers.sort();
let middle = (numbers.length - 1) / 2;
let numbersMedian = numbers[middle];
console.log(numbersMedian);



/** Objects **/

//Create a variable `rect` that represents a rectangle. This should be an Object
//with properties:
//  `x` (coordinate) of 30, `y` of 50, `width` of 100, `height` of 50
//Log out the rectangle object

let rect = {x:30, y:50, width:100, height:50};
console.log(rect);


//Log out the x- and y- coordinates of the rectangle (its location). Your output 
//should have the format `"X, Y"`.

console.log(rect.x + ", " + rect.y);


//Set the rectangle's height to be the square root of its width. (Use the 
//`Math.sqrt()` function).
//Use *dot notation* to access the properties!

rect.height = Math.sqrt(rect.width);


//Log out the rectangle's area. Use *dot notation* to access the properties!

console.log(rect.width * rect.height);


//Create a variable `circle` that represents a circle. This should be an object
//with properties:
//  `cx` (center-x-coordinate) of 34, 
//  `cy` of 43,
//  `radius` equal to the LAST value in the (sorted) `numbers` array.
//Log out the circle

let circle = {'cx':34, 'cy':43, 'radius': numbers[numbers.length - 1]};
console.log(circle);


//Create an array `shapes` that represents a list of shapes. The array should
//contain the rectangle and the circle objects defined above.
//Log out the variable. Be sure to inspect it in the developer console!

let shapes = [rect, circle];
console.log(shapes);


//Add a new ANONYMOUS object (e.g., one passed in directly without its own
//variable name) representing a right triangle to the `shapes` array.
//The triangle should have a `base` of 33 and a `height` of 44.
//Log out the updated shapes array.

shapes.push({base: 33, height: 44});
console.log(shapes);


//Log out the triangle's `hypotenuse` property (don't calculate it, just log out
//the current property value!). What do you get?
console.log(shapes.hypotenuse);


//Assign the triangle inside the `shapes` array a 'hypotenuse' property of `55`.
//Log out the `shapes` array again.
//Visually check: what happens if you inspect the previously logged array in the 
//Chrome developer console?
shapes.pop();
shapes.push({base: 33, height: 44, hypotenuse: 55});
console.log(shapes);