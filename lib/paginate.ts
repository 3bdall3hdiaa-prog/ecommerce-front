export function paginate(products: any[], perPage: number): any[][] {
    const pages: any[][] = []

    for (let i = 0; i < Math.ceil(products.length / perPage); i++) {
        const pageProducts = products.slice(i * perPage, (i * perPage) + perPage)
        pages.push(pageProducts)
        // page++
    }

    return pages
}