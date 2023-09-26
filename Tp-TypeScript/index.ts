type Rating = {
    count: number;
    rate: number;
    };
    
    type Product = {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: Rating;
    title: string;
    };
    
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then((products: Product[]) => {
    // Preparar tabla html
    let tableHTML: string = '<thead><tr><th>ID</th><th>Title</th><th>Description</th><th>Price</th></tr></thead><tbody>';
    // Iterar los productos para generar las celdas de la tabla
    products.forEach((p: Product) => {
    tableHTML += `<tr><td>${p.id}</td><td>${p.title}</td><td>${p.description}</td><td>${p.price}</td></tr>`;
    });
    // Cerrar tabla
    tableHTML += '</tbody>';
    // Convertir tableHTML en html insertado
    document.querySelector('#tableElement')!.innerHTML = tableHTML;
    // Esconder Spinner
    const spinnerElement: HTMLElement = document.querySelector('#spinnerContainer')!;
    spinnerElement.style.display = 'none';
    });
    