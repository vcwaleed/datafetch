'use client'
import Link from "next/link"
import './product.css'
import { useEffect, useState } from 'react'
import Loader from "./Loader"
export default function Products() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://dummyjson.com/products");
                const data = await response.json();
                setProducts(data.products || []);  
            } catch (error) {
                console.error('Failed to fetch products:', error);
            } finally {
                setLoading(false); 
              }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <Loader />;
      }

    return (
        <>
            <h3 className=" m-10">Product List </h3>

            <div className="flex flex-col">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="overflow-hidden">
                            <table className="min-w-full divide-y divide-gray-200">

                                <thead>
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Name</th>
                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Price</th>
                                        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Rating</th>
                                        <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Stok</th>
                                    </tr>
                                </thead>

                                <tbody className="divide-y divide-gray-200 ">

                                    {products.map(item => (
                                        <tr key={item.id}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{item.title}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{item.price}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{item.rating}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-end text-sm text-gray-800">{item.stock}</td>
                                        </tr>
                                    ))}


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>


            <Link
                href="/"
                className="text-red-700 bg-slate-200 rounded-lg p-5 m-3 flex justify-center  hover:bg-blue-700 hover:text-white">
                Go To home
            </Link>
        </>

    )

}