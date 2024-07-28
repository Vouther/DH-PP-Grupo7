const db = require("../database/models");

const controller = {
  renderList: (req, res) => {
    db.Aspirante.findAll({
      include: ["profesion", "estado"]
    })
    .then(function (aspirantes) {
        const formattedAspirantes = aspirantes.map(aspirante => ({
            dni: aspirante.Dni,
            name: aspirante.Nombre,
            lastName: aspirante.Apellido,
            profession: aspirante.profesion.Nombre,
            status: aspirante.estado.Descripcion,
            avatar: `http://localhost:3001/img/${aspirante.Imagen}`,
            detail: `/applicants/${aspirante.Dni}`
        }));

        const result = {
            count: aspirantes.length,
            aspirantes: formattedAspirantes
        };
        res.json(result);
    }).catch(function (error) {
        console.error('Error al obtener los aspirantes:', error);
        res.status(500).json({ error: 'Error al obtener los aspirantes' });
    });
},
renderDetail: (req, res) => {
    db.Aspirante.findByPk(req.params.id, {
        include: ["profesion", "estado"]
    })
      .then(function (aspirante) {
        const result = {
            dni: aspirante.Dni,
            firstName: aspirante.Nombre,
            lastName: aspirante.Apellido,
            email: aspirante.Email,
            phone: aspirante.Telefono,
            linkedin: aspirante.LinkedinURL,
            birthdate: aspirante.FechaNacimiento,
            gender: aspirante.Sexo,
            avatar: `http://localhost:3001/img/${aspirante.Imagen}`,
            profesion: aspirante.profesion.Nombre,
            estado: aspirante.estado.Descripcion
        };
        res.json(result);
      }).catch(function (error) {
        console.error('Error al obtener el aspirante:', error);
        res.status(500).json({ error: 'Error al obtener el aspirante' });
    });
  },


  renderRegister : (req, res) => {
    const { Nombre, Apellido, Dni, Email, Telefono, LinkedinURL, FechaNacimiento, Sexo, ProfesionID, EstadoID, Password } = req.body;

    const rutaImagen = req.file ? req.file.path : null;
    const dni = parseInt(Dni, 10);
    const profesionID = parseInt(ProfesionID, 10);
    const estadoID = parseInt(EstadoID, 10);
    const extOriginal = req.file ? path.extname(req.file.originalname) : '';
    const rutaImagenConExtension = rutaImagen ? `${rutaImagen}${extOriginal}` : null;

    //     const existingAspirante = await db.Aspirante.findOne({ where: { Dni: dni } });
    //     if (existingAspirante) {
    //       return res.status(400).json({ error: 'DNI ya registrado' });
    //     }

    db.Aspirante.create({
      Nombre,
      Apellido,
      Dni: dni,
      Email,
      Telefono,
      LinkedinURL,
      FechaNacimiento,
      Sexo,
      ProfesionID: profesionID,
      EstadoID: estadoID,
      Password,
      Imagen: rutaImagenConExtension 
    })

    .then(aspirante => {
      const result = {
        dni: aspirante.Dni,
        firstName: aspirante.Nombre,
        lastName: aspirante.Apellido,
        email: aspirante.Email,
        phone: aspirante.Telefono,
        linkedin: aspirante.LinkedinURL,
        birthdate: aspirante.FechaNacimiento,
        gender: aspirante.Sexo,
        avatar: `http://localhost:3001/img/${aspirante.Imagen}`, 
        profesion: aspirante.ProfesionID,
        estado: aspirante.EstadoID
      };
      res.json(result);          
    })
    .catch(error => {
      console.error('Error al crear el aspirante:', error);
      res.status(500).json({ error: 'Error al crear el aspirante' });
    });
  }
  
}

module.exports = controller;

