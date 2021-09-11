import React from "react";
export default function CardList(props) {
    const { name, nim, kelompok, isNameBold, image, id } = props;    
    return (
        <div key={id} className="bg-white shadow">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-extrabold trackingtight text-gray-900">
                    Praktikan RPL
                </h2>
                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6">
                    <div className="group relative shadow">
                        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden grouphover:opacity-75 lg:h-80 lg:aspect-none">
                            <img src={image} alt="Gambar" className="w-full h-full object-center objectcover lg:w-full lg:h-full" />
                        </div>
                        <div className="mt-4 flex justify-between">
                            <div>
                                <h3 className={`${isNameBold ? "font-bold " : ""} text-sm text-gray-700`}>
                                    <span ariahidden="true" className="absolute inset-0" />
                                    {name}
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">{nim}</p>
                            </div>
                            <p className="text-sm font-medium text-gray-900">
                                Kelompok : {kelompok}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}