const productos = [
    { nombre: "Creatina", precio: 7000, id: "1", stock:10, img: "../img/creatina.jpg", idCat: "2" },
    { nombre: "Glutamina", precio: 3500, id: "2", stock:10, img: "../img/glutamina.jpg", idCat: "2" },
    { nombre: "Shaker", precio: 2500, id: "3", stock:10, img: "../img/shaker.jpg", idCat: "3" },
    { nombre: "Pesa Rusa", precio: 5000, id: "4", stock:10, img: "../img/elasticos.jpg", idCat: "3" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 100)
    })
}

//Creamos una nueva función similar a la anterior pero que nos retorne un solo item:

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}

//Creamos una nueva función que retorna toda la categoría. 

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria)
            resolve(productosCategoria);
        }, 100)
    })
}