/*
Exercise 2

Youtube Upload Count

You are given an array of dates in the format {month: "Dec", day: 11} and a month. Each date
represents a video that was uploaded on that day. Print out the number of uploads
for a given month.

such as:
month <- "Dec"
uploads <- [
    {month: "Sept", day: 21}, 
    {month: "Sept", day: 22}, 
    {month: "Oct", day: 1}, 
    {month: "Dec", day: 11}, 
    {month: "Dec", day: 26}
]
// In month Dec, there were 2 uploads

month <- "Jan"
uploads <- [
    {month: "Sept", day: 21}, 
    {month: "Sept", day: 22}, 
    {month: "Oct", day: 1}, 
    {month: "Dec", day: 11}, 
    {month: "Dec", day: 26}
]
// In month Jan, there were 0 uploads

Hint: To access a property of an object which is nested inside an array use a combination of
[] operator and . operator such as

uploads[0].month to access the value of the month in the first element of the uploads array. 
*/