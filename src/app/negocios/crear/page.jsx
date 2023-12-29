"use client"
import React from "react";
import toast from "react-hot-toast";

import { useState } from "react";
import { useRouter } from "next/navigation";

function crearNegocios() {

    const [newBusiness, setNewBusiness] = useState({
        name: "",
        nit: 0,
        mail: ""
    })
    const route = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/business', {
            method: "POST",
            body: JSON.stringify(newBusiness),
            headers: {
                "conten-type": "application/json"
            }
        })
        const data = await res.json();
        if(data?.error){
            toast.error(data.error);
        }else{
            toast.success("El negocio "+ newBusiness.name +" fué creado con éxito.");
        }
        route.refresh();
        console.log(data);

    }

    const handleChange = (e) => {
        setNewBusiness({ ...newBusiness, [e.target.name]: e.target.value })
    };

    return (
        <div className="w-full bg-gray-900 h-screen flex items-start">
            <div>
                <h1 className="font-bold text-3xl mb-4 block">Crear Negocio</h1>
                <form onSubmit={handleSubmit} >
                    <input
                        type="text"
                        name="name"
                        placeholder="Nombre"
                        className="bg-gray-800 border-2 w-full p-4 rounded-lg my-4"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="nit"
                        placeholder="NIT"
                        className="bg-gray-800 border-2 w-full p-4 rounded-lg my-4"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="mail"
                        placeholder="Email"
                        className="bg-gray-800 border-2 w-full p-4 rounded-lg my-4"
                        onChange={handleChange}
                    />
                    <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">
                        Save
                    </button>
                </form>
            </div>
        </div>
    )
}

export default crearNegocios