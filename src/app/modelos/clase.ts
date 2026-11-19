

export type Categoria = 'fuerza' | 'cardio' | 'flexibilidad';

export const CATEGORIAS: Categoria[] = ['fuerza', 'cardio', 'flexibilidad'];

// GET /clases
export interface Clase {
  id: number;
  nombre: string;
  categoria: Categoria;
  descripcion: string;
  duracionMin: number;
  imagen: string; // ruta relativa: /img/clase-01.jpg
}

// Cada horario que viene dentro de GET /clases/:id
export interface Horario {
  id: number;
  dia: string;
  horaInicio: string;
  entrenador: string;
  cupoMaximo: number;
  disponibles: number;
}

// GET /clases/:id
export interface ClaseConHorarios extends Clase {
  horarios: Horario[];
}

// Práctica 22 · lo que se manda en POST /clases y PATCH /clases/:id.
// Es Clase SIN el id: el id lo pone la base de datos.
export type ClaseNueva = Omit<Clase, 'id'>;

// Toda respuesta exitosa de la API viene en este sobre (Práctica 9B).
export interface Sobre<T> {
  data: T;
  meta: { ruta: string; duracionMs: number; timestamp: string };
}

// Práctica 21 · quién inició sesión
export interface Usuario {
  correo: string;
  nombre: string;
  rol: 'miembro' | 'entrenador' | 'admin';
}
