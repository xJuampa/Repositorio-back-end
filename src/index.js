import express from "express";
import morgan from "morgan";
import cors from "cors";
import routerPacientes from "./routes/pacientes.routes";
import routerProductos from "./routes/productos.routes";
import "./database"
import routerConsulta from "./routes/planes.routes";
import routerComentario from "./routes/comentarios.routes";
import routerPlan from "./routes/detallePlan.routes";

const app = express()

app.set("port", process.env.PORT || 4003);

app.listen(app.get("port"),()=>{
    console.log("Hola me ejecuto en el puerto "+ app.get("port"))
})

app.use(morgan("dev"))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/admPacientes", routerPacientes)
app.use("/admProductos", routerProductos)
app.use("/admConsulta", routerConsulta)
app.use("/admComentarios", routerComentario)
app.use("/admPlanes", routerPlan)