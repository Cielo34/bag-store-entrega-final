import Item from './Item';

const ItemList = ({ products }) => {
  return (
    <>
      {products.map((product, index) => {
        return <Item key={index} product={product} />;
      })}
    </>
  );
};

export default ItemList;
