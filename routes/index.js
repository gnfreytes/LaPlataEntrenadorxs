var express = require("express");
var router = express.Router();

//TODO: implemebtar mensaje flash en todos los catch y en los envios de formularios

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    nombre: "",
    apellido: "",
    email: "",
    mensaje: "",
    emailSub: "",
  });
  console.log("/index");
});

router.post("/", function (req, res, next) {
  //TODO:
  //aqui va que hacer cuando submit en el form de enviar contacto
  const body = req.body;
  console.log(body);
});

router.get("/noticias", function (req, res, next) {
  try {
    res.render("noticias", {
      nombre: "",
      apellido: "",
      email: "",
      mensaje: "",
      emailSub: "",
    });
  } catch (err) {
    console.log(err);
  }
});

router.get("/capacitacion", function (req, res, next) {
  try {
    res.render("capacitacion", {
      nombre: "",
      apellido: "",
      email: "",
      mensaje: "",
      emailSub: "",
    });
  } catch (err) {
    console.log(err);
  }
});

router.get("/comunicacion", function (req, res, next) {
  try {
    res.render("comunicacion", {
      nombre: "",
      apellido: "",
      email: "",
      mensaje: "",
      emailSub: "",
    });
  } catch (err) {
    console.log(err);
  }
});

router.get("/competencia", function (req, res, next) {
  try {
    res.render("competencia", {
      nombre: "",
      apellido: "",
      email: "",
      mensaje: "",
      emailSub: "",
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
