import {Model, model, property} from '@loopback/repository';

@model()
export class Credenciales extends Model {
  @property({
    type: 'string',
    required: true,
  })

  nombre_usuario: string;

  @property({
    type: 'string',
    required: 'true',
  })
  clave: string;

  constructor(data?: Partial<Credenciales>) {
    super(data);

  }
}
