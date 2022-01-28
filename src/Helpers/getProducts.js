import productos from "./products";

const getProducts = () => {

    return new Promise((res, rej)=>{
        setTimeout(() => res(productos), 3000);


    });
};

export default getProducts;
