"use client"
import { React, useState, useEffect } from "react";
import EmptyBusiness from "@/components/EmptyBusiness";


function Negocios() {

    const [business, setBusiness] = useState([]);

    const fetchData = async () => {
        try {
            const res = await fetch('/api/business', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (res.ok) {
                const data = await res.json();
                setBusiness(data.myBusiness);
            } else {
                console.error('Error al obtener los datos del negocio');
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (business.length === 0) {
        return <EmptyBusiness />;
    }

    return (
        <div className="w-full bg-gray-800 p-10 text-white rounded-md">
            <h1 className="font-bold text-3xl">Ver Negocio</h1>
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr className="bg-gray-800 text-white">
                        <th className="py-2 text-center">ID</th>
                        <th className="py-2 text-center">Nombre</th>
                        <th className="py-2 text-center">NIT</th>
                        <th className="py-2 text-center">EMAIL</th>
                    </tr>
                </thead>
                <tbody>
                    {business.map((item, index) => (
                        <tr key={item.id} className={index % 2 === 0 ? "bg-gray-900" : "bg-gray-800"}>
                            <td className="py-2 text-center">{index + 1}</td>
                            <td className="py-2 text-center">{item.name}</td>
                            <td className="py-2 text-center">{item.nit}</td>
                            <td className="py-2 text-center">{item.mail}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Negocios