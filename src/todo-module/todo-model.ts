import { Global } from "@nestjs/common";

export class TodoModel {
  constructor(
    public id = '',
    public name = '',
    public description = '',
    public status = todostatus.waiting,
    public createdAt: Date,
  ) {}
}
export enum todostatus {
  'actif' = 'en cours',
  'waiting' = 'en attente',
  'done' = 'finalisé',
}
