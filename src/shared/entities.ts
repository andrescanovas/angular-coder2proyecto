export interface Student {
  id:number;
  name: string;
  surname: string;
  age: number;
  dni: number;
  average: number;
}
export interface Course {
  id: string;
  name: string;
  img?:string;
}

export interface Inscripcion {
  id: string;
  name: string;
  curso: string;
}