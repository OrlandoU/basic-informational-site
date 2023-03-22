const http = require('http')
const fs = require('fs/promises')

http.createServer(async (req, res) => {
    try {
        const parsedUrl = req.url.slice(1)
        if(!parsedUrl){
            const data = await fs.readFile(`index.html`)
            res.writeHead(200, { 'Content-Type': 'text/html' })
            return res.end(data)
        } 
        const data = await fs.readFile(`${parsedUrl}.html`)
        res.writeHead(200, { 'Content-Type': 'text/html' })
        return res.end(data)
    } catch (error) {
        console.log(error)
        if(error.errno === -4058){
            const data = await fs.readFile(`not-found.html`)
            res.writeHead(200, { 'Content-Type': 'text/html' })
            return res.end(data)
        }
        console.error("Error reading File", error)
    }
}).listen(8080, () => {
    console.log('Server running at http://localhost:8080/');
})


