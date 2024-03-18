import { Length } from "class-validator"
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm"

@Entity()
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number | undefined

  @Length(2)
  @Column("varchar", { length: 30 })
  name: string | undefined

  @Length(2)
  @Column("varchar", { length: 200 })
  description: string | undefined
}