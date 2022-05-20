function showCheckerboard() {

    let row = document.forms["checkerboard"]["row"].value;
    let column = document.forms["checkerboard"]["column"].value;

    //x and y is the coordinate of the  top left corner of the canvas
    let x = 50, y = 50;

    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    let isColorBlack = 0;

    // we should iterate over the number of rows provided by the user
    for (let i = 0; i < row; i++) {
  
        // Inside the loop we need to iterate over the number of column provided by the user
        for (let j = 0; j < column; j++) {
            // if color is black
            if (isColorBlack == 0) {
                ctx.fillStyle = "black";
                //fill the canvas with 50 * 50
                ctx.fillRect(x, y, 50, 50);
                isColorBlack = 1;
            }
            else {
                ctx.fillStyle = "white";
                 //fill the canvas with 50 * 50
                ctx.fillRect(x, y, 50, 50);
                isColorBlack = 0;
            }
            // Increment for the next row
            x = x + 50;
        }

        isColorBlack = isColorBlack == 0 ? 1 : 0;

        x = 50;
        y = y + 50;
    }

}

function downloadPNG() {
    const canvas = document.getElementById("myCanvas");
    let anchor = document.createElement("a");
    anchor.href = canvas.toDataURL("image/png");
    anchor.download = "damier.PNG";
    anchor.click();
}