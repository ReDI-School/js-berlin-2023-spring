let month = "Dec";
let uploads = [
    {month: "Sept", day: 21}, 
    {month: "Sept", day: 22}, 
    {month: "Oct", day: 1}, 
    {month: "Dec", day: 11}, 
    {month: "Dec", day: 26}
];

let index = 0;
let noOfUploads = 0;

while(uploads[index] !== undefined) {
    if (uploads[index].month === month ) {
        noOfUploads += 1
    }
    index += 1;
}

console.log("In month " + month + ", there were " + noOfUploads + " uploads.");