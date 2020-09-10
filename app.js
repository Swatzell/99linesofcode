const friends = ["Adam", "Scotty", "Blake", "Kyle", "Stacey"];

for (let i = 0; i < 5; i++) {
    console.log(friends[i].toUpperCase() + ":");

    for (let j = 5; j > 0; j--) {
        if (j === 1) {
            console.log(j + " Line of code in the file," + j + " Line of code; " + friends[i] + " strikes one out, clears it all out, no more lines of code in the file");
        } else if (j === 2) {
            console.log(j + " Lines of code in the file," + j + " Lines of code; " + friends[i] + " strikes one out, clears it all out," + (j - 1) + " Line of code in the file")
        } else {
            console.log(j + " Lines of code in the file," + j + " Lines of code; " + friends[i] + " strikes one out, clears it all out," + (j - 1) + " Lines of code in the file");

        }
    }


}