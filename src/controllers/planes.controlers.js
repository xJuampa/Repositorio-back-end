import ConsultaModels from "../models/planes";

const ConsultaCtrl = {};

ConsultaCtrl.registrarConsulta = async (req, res) => {
  try {
    const NuevaConsulta = new ConsultaModels({
      nombreCliente: req.body.nombreCliente,
      MailCliente: req.body.MailCliente,
      telefonoCliente: req.body.telefonoCliente,
      Descripcion: req.body.Descripcion,
    });

    await NuevaConsulta.save();
    res.status(201).json("Producto Registrado");
  } catch (error) {
    console.log(error);
    res.status(404);
  }
};

ConsultaCtrl.leerConsulta = async (req, res) => {
  try {
    const verListaConsulta = await ConsultaModels.find();
    res.status(200).json(verListaConsulta);
  } catch (error) {
    console.log(error);
    res.status(404);
  }
};

ConsultaCtrl.eliminarConsulta = async (req, res) => {
  try {
     await ConsultaModels.findByIdAndDelete(req.params._id);
    res.status(200).json("Consulta Eliminada");
  } catch (error) {
    console.log(error);
    res.status(404);
  }
};

export default ConsultaCtrl;
