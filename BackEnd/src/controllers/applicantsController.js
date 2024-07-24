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

  renderRegister: async (req, res) => {
    try {
      const { Nombre, Apellido, Dni, Email, Telefono, LinkedinURL, FechaNacimiento, Sexo, ProfesionID, EstadoID, Password } = req.body;
      const rutaImagen = req.file ? `/img/${req.file.filename}` : null;
      const dni = parseInt(req.body.Dni);

      const existingAspirante = await db.Aspirante.findOne({ where: { Dni: dni } });
      if (existingAspirante) {
        return res.status(400).json({ error: 'DNI ya registrado' });
      }

      const nuevoAspirante = await db.Aspirante.create({
        Nombre,
        Apellido,
        Dni: dni,
        Email,
        Telefono,
        LinkedinURL,
        FechaNacimiento,
        Sexo,
        ProfesionID,
        EstadoID,
        Password,
        Imagen: rutaImagen
      });

      const aspiranteCreado = {
        Nombre,
        Apellido,
        Dni: dni,
        Email,
        Telefono,
        LinkedinURL,
        FechaNacimiento,
        Sexo,
        ProfesionID,
        EstadoID,
        Imagen: rutaImagen
      };

      console.log('Aspirante creado:', aspiranteCreado);
      res.status(201).json(aspiranteCreado);
    } catch (error) {
      console.error('Error al registrar aspirante:', error);
      res.status(500).json({ error: 'Ocurrió un error al registrar el aspirante.' });
    }
  }

}


module.exports = controller;

