const BASE_URL = 'https://fakestoreapi.com/products';

export async function getProducts() {
	try {
		const response = await fetch(BASE_URL);
		const data = await response.json();
		return data;
	} catch (error) {
		return error;
	}
}

export async function getProduct(id) {
	try {
		const response = await fetch(`${BASE_URL}/${id}`);
		const data = await response.json();
		return data;
	} catch (error) {
		return error;
	}
}
