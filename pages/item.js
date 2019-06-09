import Product from "../components/product";
import { getProduct, getSet } from "../services/inventoryService";
import Link from "next/link";

const Item = product => (
  <section>
    <Product product={product} />
    <Link href="/">
      <button>x</button>
    </Link>
    <style jsx>{`
      button {
        position: absolute;
        top: 0;
        right: 0;
        padding: 20px;
        font-weight: bold;
      }
    `}</style>
  </section>
);

Item.getInitialProps = function({ query }) {
  const { id } = query;
  return getProduct(id) || getSet(id);
};

export default Item;
