import express from "express";

// Inicialización de la APP
const app = express()
app.use(express.json()) // Para que la app utilice json
app.use(express.static('public')) // Habilita una carpeta pública que se puede acceder de todas partes


// Definición del puerto
const PORT = 4002;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto: ${PORT}`)
})

app.get('/', function (req,res) {res.send({msg: `Servidor corriendo en el puerto: ${PORT}`})})
