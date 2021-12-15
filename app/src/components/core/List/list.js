import { connect } from "frontity";
import Item from "./list-item";
import Pagination from "./pagination";
import { ListContainer } from "./styles";

const List = ({ state }) => {
  const data = state.source.get(state.router.link);

  return (
    <ListContainer>
      {data.items.map(({ type, id }) => {
        const item = state.source[type][id];
        return <Item key={item.id} item={item} />;
      })}
      <Pagination />
    </ListContainer>
  );
};

export default connect(List);
