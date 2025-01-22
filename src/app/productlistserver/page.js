import Link from "next/link"
async function productList(){
    const  response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    return data.products;
}
export default async function ProductListServer ()

{
    let products =await productList();
    
    return (
        <>
        <h3 className="text-center font-bold  m-6 text-3xl">App With Server Side Rendring </h3>
        <h2 className="font-bold text-2xl  ml-4">Product List </h2>

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
                className="text-orange-700 bg-slate-400 rounded-lg p-5 m-3 flex justify-center  hover:bg-blue-700 hover:text-white">
                Go To home
            </Link>
        </>
    )


}