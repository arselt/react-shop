import { useEffect, useState } from "react";
import axios from 'axios';

const useGetProducts = (API) => {
    const [products, setProducts] = useState([]);

	useEffect(async () => { {/* Async to wait for connection w/axios to be done */}
		const response = await axios (API);
		setProducts(response.data)
	}, [])
    return products
}

export default useGetProducts;