const express = require("express")
const app = express()
const path = require("path")

app.use(express.static('public'))

app.get("/AE-LED65-3.5MM", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "AE-LED65-3.5MM.html"))
})
app.get("/AE-LED65-3.5MM/datasheet", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "assets","pdf", "AE-LED65-3.5MM.pdf"))
})

app.get("/AE-LED32A-BGD", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "AE-LED32A-BGD.html"))
})
app.get("/AE-LED32A-BGD/datasheet", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "assets","pdf", "AE-LED32A-BGD.pdf"))
})

app.get("/AE-LED55-3.5MM", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "AE-LED55-3.5MM.html"))
})
app.get("/AE-LED55-3.5MM/datasheet", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "assets","pdf", "AE-LED55-3.5MM.pdf"))
})

app.get("/AE-LED75-YTD", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "AE-LED75-YTD.html"))
})
app.get("/AE-LED75-YTD/datasheet", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "assets","pdf", "AE-LED75-YTD.pdf"))
})

app.get("/AE-LED55A-BGD", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "AE-LED55A-BGD.html"))
})
app.get("/AE-LED55A-BGD/datasheet", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "assets","pdf", "AE-LED55A-BGD.pdf"))
})

app.listen(3000, () =>{
    console.log("server is running");
})