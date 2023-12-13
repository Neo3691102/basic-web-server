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

const requestListener: http.RequestListener = (_req, response) => {
   
    response.write(JSON.stringify(notes));
    response.end();
};
 
const server = http.createServer(requestListener);
server.listen(5500);