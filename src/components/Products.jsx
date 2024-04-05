import { Link } from "react-router-dom";

const Products = ({ product }) => {
  const { id, title, price, thumbnail } = product;

  return (
    <div className="hover:opacity-70 hover:bg-gray-100 max-h-68 flex flex-col items-center p-4 bg-white border rounded shadow-md transition duration-300 hover:shadow-lg">
      <Link to={"/product/" + id}>
        <img
          className="h-48 w-44 object-cover mb-4"
          src={thumbnail}
          alt={title}
        />
        <p className="font-semibold">{title}</p>
        <p>${price}</p>
      </Link>
    </div>
  );
};

export default Products;
