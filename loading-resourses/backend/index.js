const express = require('express')


const app = express()

function sleep(ms) {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
}
app.use('/styles', async (req, res) => {
	await sleep(1000)

	res.sendfile('style.css')
})

app.use('/scripts', async (req, res) => {
  await sleep(300)

  res.sendfile('script.js')
})
// parse application/x-www-form-urlencoded

app.listen(5000, () => {
	console.log('Server is running on port 5000')
})
