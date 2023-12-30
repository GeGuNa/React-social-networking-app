const express = require("express")
const app = express()


app.get("/", (req, res) => {
	
res.write(`kkkk`)

res.end()
})


app.post("/login", (req, res) => {
	
res.write(``)

res.end()
})


app.post("/register", (req, res) => {
	
res.write(``)

res.end()
})



app.listen(3333, () => {
	
	console.log(`yeah`)
	
})
