import data from '../app/data.json'

export const getAllProducts = () => {
    return data
}
export const getProductById = (id: number) => {
    return data.find((product) => product.id === id)
}
export const getProductsByCategories = (category: string) => {
    return data.filter((product) => product.category === category.toLowerCase() )
}

