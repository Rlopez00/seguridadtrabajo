import { modelo } from "../models/user.model.js";
test(() => {
  console.log("conexion exitosa");
});
modelo.create({
  name: "Rogelio",
});
