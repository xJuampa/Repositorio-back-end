import { Router } from "express";
import PacientesCtrl from "../controllers/pacientes.controllers";
import autenticacionToken from "../middlewares/verificacionToken";
const routerPacientes = Router()

routerPacientes
.route("/")
.post(PacientesCtrl.registrarPacientes)
.get(PacientesCtrl.listarPacientes)

routerPacientes
.route("/:_id")
.delete(PacientesCtrl.eliminarPacientes)
.put(PacientesCtrl.editarPacientes)
.get(PacientesCtrl.verPacientes)

export default routerPacientes