export type PaginationInput = {
  page?: number | string;
  limit?: number | string;
};

export type PaginationState = {
  page: number;
  limit: number;
  skip: number;
};

export type PaginationMeta = {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
  nextPage: number | null;
  prevPage: number | null;
};

export const createPagination = (
  input: PaginationInput,
  defaultLimit = 10,
  maxLimit = 100
): PaginationState => {
  let page = Number(input.page) || 1;
  let limit = Number(input.limit) || defaultLimit;

  if (page < 1) page = 1;
  if (limit < 1) limit = 1;
  if (limit > maxLimit) limit = maxLimit;

  const skip = (page - 1) * limit;

  return { page, limit, skip };
};

export const buildPaginationMeta = (
  total: number,
  page: number,
  limit: number
): PaginationMeta => {
  const totalPages = Math.max(1, Math.ceil(total / limit) || 1);

  return {
    total,
    page,
    limit,
    totalPages,
    hasNext: page < totalPages,
    hasPrev: page > 1,
    nextPage: page < totalPages ? page + 1 : null,
    prevPage: page > 1 ? page - 1 : null,
  };
};
