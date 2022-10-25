import create from "zustand";
import 'bootstrap/dist/css/bootstrap.min.css';



export const useStore = create((set, get) => ({
  DataFecth: [],
  ProductsAddedCart:
    JSON.parse(localStorage.getItem("product")) === null
      ? []
      : JSON.parse(localStorage.getItem("product")),
  ShoppingCartStatus: false,
  TotalCart: { TotalProducts: 0, TotalPrice: 0, TotalUnits: 0 },
  /**************************** */
  SaveProduct() {
    localStorage.setItem("product", JSON.stringify(get().ProductsAddedCart));
  },
  
  ProductAdd(item) {
    const isProduct =
      get().ProductsAddedCart.find((product) => product.Id === item.Id) !==
      undefined;
    if (isProduct) {
      alert("Tu Funko ya está en el Carrito");
      return;
    }
    const ProductNew = { ...item, quantity: 1 };
    set({ ProductsAddedCart: [...get().ProductsAddedCart, ProductNew] });
    get().CalculeTotal();
    get().SaveProduct();
    console.log(get().ProductsAddedCart);
  },

  /**************************************** */
  OpenShoppingCart() {
    set({ ShoppingCartStatus: !get().ShoppingCartStatus });
  },
  /********************************************************* */

  IncreaseQuantity(item) {
    const updateCantidad = get().ProductsAddedCart.map((product) =>
      product.Id === item.Id
        ? { ...product, quantity: (product.quantity += 1) }
        : product
    );
    set({ ProductsAddedCart: updateCantidad });
    get().CalculeTotal();
  },

  /**************************************************** */
  DecreaseQuantity(item) {
    const updateCantidad = get().ProductsAddedCart.map((product) =>
      product.Id === item.Id
        ? { ...product, quantity: (product.quantity -= 1) }
        : product
    );

    /* const QuantityValidation = updateCantidad.find(product => product.id === item.id) */
    /*  if (QuantityValidation.quantity !== 1) {*/
    /*     */
    /*  } */

    set({ ProductsAddedCart: updateCantidad });
    get().CalculeTotal();
    return;
  },
  /************************************************************************* */
  CalculeTotal() {
    const ShopingCart = get().ProductsAddedCart;
    const TotalProducts = ShopingCart.length;
    const TotalPrice = ShopingCart.reduce(
      (priceTotal, product) => priceTotal + product.Price * product.quantity,
      0
    );
    const TotalUnits = ShopingCart.reduce(
      (units, product) => units + product.quantity,
      0
    );
    set({ TotalCart: { TotalProducts, TotalPrice, TotalUnits } });
  },
  /********************************************************************************* */
  DeleteCartProduct(item) {
    const ProductFilter = get().ProductsAddedCart;
    const newproduct = ProductFilter.filter(
      (products) => products.Id !== item.Id
    );
    set({ ProductsAddedCart: newproduct });
    get().CalculeTotal();
    get().SaveProduct();
  },

  /*****************************************************************************/
  FecthData() {
    const url = "https://fakestoreapi.com/products";
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        set({ DataFecth: result });
      });
  },
}));

export default useStore;
