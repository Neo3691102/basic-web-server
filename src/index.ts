import http from "node:http";
 
console.log("Node JS + Typescript")

const notes = [
    { id: 1, content: "Hacer la cama" },
    { id: 2, content: "Lavar los platos" },
    { id: 3, content: "Estudiar JavaScript" },
    { id: 4, content: "Hacer las compras" },
    { id: 5, content: "Limpiar mi habitación" },
    { id: 6, content: "Almorzar a tiempo" },
  ];


  const requestListener: http.RequestListener = (req, response) => {

    
      if (req.url === '/') {
          console.log("Petición recibida!");
          response.writeHead(200, { "Content-Type": "text/plain" });
          response.end("Bienvenido a notas!");
      }
      if (req.url === '/notes') {
        console.log("Petición recibida!");
        response.writeHead(200, { "Content-Type": "application/json" });
        response.end(JSON.stringify(notes));  
    }else {
      const match = req.url?.match(/\/notes\/(\d+)$/); // agrega guardia de tipo para asegurar que 'req.url' no es undefined
      if (match) {
          const id = parseInt(match[1]);
          const note = notes.find((note) => note.id === id);
          if (note) {
              response.writeHead(200, { "Content-Type": "application/json" });
              response.end(JSON.stringify(note));
          } else {
              response.writeHead(404, { "Content-Type": "application/json" });
              response.end(JSON.stringify({ message: `Note not found` }));
          }
      }
  }


  }

  const server = http.createServer(requestListener);
   server.listen(5500);