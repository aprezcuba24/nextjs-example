export type PaginationResult<T> = {
  total: number,
  totalPage: number,
  pageIndex: number,
  pageSize: number,
  firstRecordNumber: number,
  lastRecordNumber: number,
  data: T[],
}

export type PaginateData = {
  pageIndex: number,
  pageSize: number,
}
export type Paginate = (data: PaginateData) => void
