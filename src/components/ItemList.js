import Item from './Item';

const ItemList = ({ products }) => {
  
  return (
    <>
      {products.map((product, index) => {
        return <Item product={product}  key={index}/>;
      })}
    </>
  );
};

export default ItemList;
