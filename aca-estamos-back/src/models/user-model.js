const mongoose = require('mongoose');

const { Schema } = mongoose;
const userSchema = new Schema({
  Nombre: String,
  Apellido: String,
  Telefono: String,
  Rut: String,
  FechaNacimiento: Date,
  Email: String,
  Password: String,
  //Datos personales//
  EstadoCivil: String,
  Rubro: String,
  LinkedIn: String,
  Disponibilidad: String,
  ArchivoPDF1: String,
  ArchivoPDF2: String,
  ArchivoPDF3: String,
  ArchivoPDF4: String,
  ImagenPerfil: String,
  //Educacion agregado//
  NivelEducacional: String,
  InstitucionEducativa: String,
  Titulo: String,
  FechaInicio: Date,
  FechaFinalizacion: Date,
  Descripcion: String,
  // Experiencia //
  Cargo: String,
  TipoEmpleo: String,
  NombredelaEmp: String,
  FechaExpInicio: Date,
  FechaExpFin: Date,
  CheckCargo: String,
  DescripcionCargo: String,
  //Perfil cv//
  NombreCV: String,
  TitularCV: String,
  AcercadeCV: String,
  ConocimientosCV: {
    type: [String], 
  },
  CursosCV: {
    type: [String], 
  },
}, { 
    timestamps: true,
    versionKey: false
});

const User = mongoose.model('User', userSchema);
module.exports = User;