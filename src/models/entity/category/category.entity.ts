import { Length } from "class-validator"
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { AppBaseEntity } from "../app-base.entity"

@Entity()
export class Category extends AppBaseEntity {
  @PrimaryGeneratedColumn()
  id: number | undefined

  @Length(2)
  @Column("varchar", { length: 30 })
  name: string | undefined

  @Length(2)
  @Column("varchar", { length: 200 })
  description: string | undefined
}