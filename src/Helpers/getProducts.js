
import productos from './products';

const getProducts = () => {
    return new Promise ((res, rej) => {
        setTimeout(() => res(productos), 1000);
    });
    
}

export default getProducts;
