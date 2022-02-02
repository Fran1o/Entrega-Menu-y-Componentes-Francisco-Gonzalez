import productosNovedades from "./productosNovedades";

const getProductosNovedades = () => {
    return new Promise ((res, rej) => {
        setTimeout (() => res(productosNovedades), 2000);
    });
}

export default getProductosNovedades;
