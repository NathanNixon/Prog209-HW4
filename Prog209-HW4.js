
var mCount = 0;
const movieName1 = [];
const movieRating1 = [];
function movieStorage() {
	let movieName = document.getElementById("mName").value;
	let movieRating = document.getElementById("mRating").value;
  if ((movieName == "") || (movieName == " ")) {
  	return false;
  }
  else if ((movieRating => 1) && (movieRating <= 5)) {
      new movieConstructor(movieName, movieRating);
      textClear();
      return true;

  }
  else {
    	return false;
  }
}
function textClear() {
	document.getElementById("mName").value = "";
  document.getElementById("mRating").value = "";
}
function displayList () {
	    document.getElementById("Table1").style.display = "block";
      let rowCount = 0; 
      while (rowCount < mCount) {
      	let varTable = document.getElementById("Table1")
        let varRow = varTable.insertRow(-1);
        let varCell1 = varRow.insertCell(0);
				let varCell2 = varRow.insertCell(1);
        varCell1.innerHTML = movieName1[rowCount];
        varCell2.innerHTML = movieRating1[rowCount];
        rowCount++;
      }
}