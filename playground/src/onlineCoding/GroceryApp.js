// React is loaded and is available as React and ReactDOM
// imports should NOT be used
import React from "react";
import ReactDOM from "react-dom";
// React is loaded and is available as React and ReactDOM
// imports should NOT be used
// React is loaded and is available as React and ReactDOM
// imports should NOT be used
const Product = (props) => {
  const plus = () => {
    // Call props.onVote to increase the vote count for this product
    props.onVote("up", props.index);
  };
  const minus = () => {
    // Call props.onVote to decrease the vote count for this product
    props.onVote("down", props.index);
  };
  return (
    <li>
      <span>{props.product.name}</span> -{" "}
      <span>votes:{props.product.votes}</span>
      <button onClick={plus}>+</button> <button onClick={minus}>-</button>
    </li>
  );
};

const GroceryApp = (props) => {
  let [products, setProducts] = React.useState(props.products);
  const onVote = (dir, index) => {
    // Update the products array accordingly ...
    let productsArray = [...products];
    if (dir === "up")
      productsArray[index].votes = productsArray[index].votes + 1;
    else productsArray[index].votes = productsArray[index].votes - 1;
    // console.log("productsArray", productsArray);
    setProducts(productsArray);
    // console.log(dir, index);
  };
  console.log(products);
  return (
    <ul>
      {products?.map((p, i) => (
        <Product key={i} product={p} onVote={onVote} index={i} />
      ))}
      {/* {products && <Product product={products[0]} onVote={onVote} />} */}
    </ul>
  );
};

document.body.innerHTML = "<div id='root'></div>";

ReactDOM.render(
  <GroceryApp
    products={[
      { name: "Oranges", votes: 0 },
      { name: "Bananas", votes: 0 }
    ]}
  />,
  document.getElementById("root")
);

let plusButton = document.querySelector("ul > li > button");
if (plusButton) {
  plusButton.click();
}
console.log(document.getElementById("root").outerHTML);
