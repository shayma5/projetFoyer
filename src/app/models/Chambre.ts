import { TypeChambre } from "./TypeChambre.enum";


export interface Chambre{
  idChambre?: number;
  nomBloc?: string;
  numeroChambre?: number;
  typeC?: TypeChambre;
 }