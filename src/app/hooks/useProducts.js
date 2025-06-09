import { useSelector } from "react-redux"

export const useProducts = () => {

    const products = useSelector(state => state.product.products) ?? [];

    const getProducts = (search, price, stock) => {

        return products.filter(product => {
            
            const name = product.name?.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            const searchText = search?.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") ?? "";

            const matchSearch = !search || name.includes(searchText);
            const matchPrice = !price || Number(product.price) <= Number(price);
            const matchStock = !stock || Number(product.stock) <= Number(stock);

            return matchSearch && matchPrice && matchStock;
        });
    }

    return {
        getProducts
    }
}
