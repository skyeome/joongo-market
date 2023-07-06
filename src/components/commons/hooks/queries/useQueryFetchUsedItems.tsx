import { gql, useQuery } from "@apollo/client";
import type { QueryResult } from "@apollo/client";
import type {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";

export const FETCH_USED_ITEMS = gql`
  query fetchUseditems($isSoldout: Boolean, $search: String, $page: Int) {
    fetchUseditems(isSoldout: $isSoldout, search: $search, page: $page) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      buyer {
        _id
        name
      }
      seller {
        _id
        name
      }
      useditemAddress {
        address
      }
      createdAt
    }
  }
`;

export const useQueryFetchUsedItems = (
  variables?: IQueryFetchUseditemsArgs
): QueryResult<Pick<IQuery, "fetchUseditems">, IQueryFetchUseditemsArgs> => {
  const query = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS, { variables });

  return query;
};
