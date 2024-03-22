import { PaginateData } from "@/types/pagination";
import { instanceToPlain } from "class-transformer";
import { BaseEntity } from "typeorm";

type TPaginationQuery = any & PaginateData

export class AppBaseEntity extends BaseEntity {
  static async paginate({ pageIndex = 1, pageSize = 10, ...props }: TPaginationQuery) {
    const skip = pageIndex * pageSize
    const [entities, total] = await this.findAndCount({ take: pageSize, skip, ...props })
    return {
      total,
      pageSize,
      pageIndex,
      firstRecordNumber: skip + 1,
      totalPage: Math.floor(total / pageSize) + 1,
      lastRecordNumber: skip + entities.length,
      data: entities.map((item) => instanceToPlain(item)),
    }
  }
}