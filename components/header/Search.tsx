import { productResponse } from '@/features/products/types/Product';
import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Searcch = ({ searchInput, setSearchInput, searchResults, setSearchResults }: { searchInput: string, setSearchInput: (value: string) => void, searchResults: productResponse[], setSearchResults: any }) => {
    const router = useRouter();
    return (
        <div className='relative  '>
            <div className=' rounded-full text-white flex justify-between items-center gap-x-2 bg-white py-1 pl-4 pr-1'>
                <input type="text" className='text-black text-sm w-160 outline-none' placeholder='Search for products' value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
                <span className='bg-[#E14A5C] p-2 rounded-full'><Search className='' size={20} /></span>
            </div>
            {searchResults.length > 0 && (
                <div className="absolute left-0 top-full z-9999 mt-1 w-full overflow-hidden rounded-3xl bg-white shadow-xl">
                    <div className="px-5 py-4 text-sm font-medium uppercase text-gray-800">Products</div>
                    <div className="grid max-h-105 grid-cols-2 overflow-y-auto border-t">

                        {searchResults.map((p: productResponse) => (
                            <div
                                onClick={() => { router.push(`/product/${p.id}`); setSearchResults([]); setSearchInput(''); }}
                                key={p.id}
                                className="flex cursor-pointer items-center gap-5 border-b border-r border-gray-200 px-6 py-5 hover:bg-gray-50 nth-[2n]:border-r-0"
                            >
                                <img
                                    src={p.images?.mainImage?.url}
                                    alt={p.name}
                                    className="h-16 w-16 shrink-0 object-contain"
                                />
                                <div className="min-w-0">
                                    <p className="truncate text-[15px] text-gray-800">{p.name}</p>
                                    <p className="mt-2 text-lg font-semibold text-[#E14A5C]">
                                        ${Number(p.priceAfterDiscount).toFixed(2)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Searcch