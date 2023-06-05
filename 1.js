class productManager {
    constructor () {
        this.products = []
        }

    addProduct = (title, description, price, thumbnail, code, stock) => {
        if (!title || !description || price === 0 || !thumbnail || !code) { // verifica que los valores no estén vacios o que el precio sea 0, el stock puede ser 0.
            console.log(`Verificar ${code}, todos los parametros son obligatorio, excepto el stock puede ser 0`);
            return false;
          } else {
            const checkproduct = this.#checkCode(code) // verifica que el código no exita.
            if (checkproduct==='OK') {
                const product = {
                    code: code,
                    title: title,
                    description: description,
                    price: price,
                    thumbnail: thumbnail,
                    stock: stock,
                    id: this.#getMaxID() + 1, // busca el max id creado para crear el siguiente
                }
                this.products.push(product)
                console.log(`Producto ${code} creado`)
                return `Producto ${code} creado`
            } else {
                console.log(`El producto ${code} ya existe`)
                return `El prodcuto ${code} ya existe`}
        }
    } 

    getProductById = (productId) => {
        const product = this.products.find(product => product.id === productId)
        if (product) {
            console.log(product)
            return product
        } else {
            console.log(`El producto id ${productId} no existe`)
            return `El producto id ${productId} no existe`
        }
    }

    getProducts=()=>{
        console.log(this.products)
        return this.products
    }

    #getMaxID = () => { // busca el ultimo ID 
        const ids = this.products.map(product => product.id)
        if (ids.includes(1)) {
            return Math.max(...ids)
        } else {
            return 0}
    }

    #checkCode=(codeProduct)=>{ // busca un codigo de producto y devuelve OK si no existe, y Error si existe.
        if (!this.products.find(product => product.code === codeProduct)) {
            const estado = 'OK'
            return estado
        } else {
            const estado = 'Error'
            return estado
        }
    }
}


const manager = new productManager()


manager.addProduct('Kit valvula','Kit Valvula de presion minima',10000,'Sin imagen','PT001',0) // stock en 0 OK
manager.addProduct('Kit de montaje','Kit de montaje de elementos',20000,'Sin imagen','PT001',5) // Error: codigo existente
manager.addProduct('Kit de valvula','Kit de valvula de retencion y cierre de aceite',16000,'Sin imagen','PT002',10)
manager.addProduct('Kit de reacondicionamiento','Kit de reacondicionamiento del motor',29000,'Sin imagen','PT003',10)
manager.addProduct('Descargador','Decargador de presion',5000,'Sin imagen','PT004',10)
manager.addProduct('Kit de linea','Kit de linea de barrido',9000,'Sin imagen','PT005',10)
manager.addProduct('Kit de filtro','',0,'Sin imagen','PT006',10) // Error: precio 0
manager.getProducts()
manager.getProductById(3)
manager.getProductById(7) // Error: no existe el ID