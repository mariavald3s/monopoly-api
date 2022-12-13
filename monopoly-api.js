const http = require('http')

// const server = http.createServer((req, res) => {
//   res.end('Welcome')
// })

// Using Event Emitter API
const server = http.createServer((req, res) => {
    // console.log(req.method)
    const url = req.url
    // home page
    let spots = [
      {id: 0, name: "GO", value: 200},
      {id: 1, name: "Mediteranean Avenue", value: -60, colour: "#955436"},
      {id: 2, name: "Community Chest", value: 0},
      {id: 3, name: "Baltic Avenue", value: -60, colour: "#955436"},
      {id: 4, name: "Income Tax", value: -200},
    ];
    if (url === '/') {
      res.writeHead(200, { 'content-type': 'text/html' })
      res.write('req succes')
      res.end()
    }
    // about page
    else if (url === '/spots') {
      res.writeHead(200, { 'content-type': 'text/html' })
      res.write(spots)
      res.end()
    }
    // 404
    else {
      res.writeHead(404, { 'content-type': 'text/html' })
      res.write('<h1>page not found</h1>')
      res.end() 
    }
  })
  
  server.listen(port)

server.listen(5000)