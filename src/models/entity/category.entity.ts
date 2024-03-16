import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm"

@Entity()
export class Category extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number | undefined

  @Column("varchar", { length: 200 })
  name: string | undefined
}