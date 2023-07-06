import { useQueryFetchUsedItems } from "../../../commons/hooks/queries/useQueryFetchUsedItems";

export default function UsedItemList(): JSX.Element {
  const { data } = useQueryFetchUsedItems();

  return (
    <div>
      {data?.fetchUseditems.map((el) => (
        <div key={el._id}>{el.name}</div>
      ))}
    </div>
  );
}
