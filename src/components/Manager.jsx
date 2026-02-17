import React from "react";
import { useState, useEffect } from "react";

import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
    const [form, setform] = useState({ site: "", username: "", password: "" });
    const [passwordsArray, setpasswordsArray] = useState([]);

    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        if (passwords) {
            setpasswordsArray(JSON.parse(passwords));
        }
    }, []);

    const copyText = (text) => {
        toast.success('Copied to clipboard!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        navigator.clipboard.writeText(text)
    }

    const savePass = () => {
        if (!form.site || !form.username || !form.password) {
            alert("Please fill all fields");
            return;
        }

        setpasswordsArray([...passwordsArray, {...form , id: uuidv4()}]);
        // localStorage.setItem("password",JSON.stringify([...passwordsArray,form]))
        localStorage.setItem("passwords",JSON.stringify([...passwordsArray, {...form , id: uuidv4()}]));
        setform({ site: "", username: "", password: "" });
    };
    const editPassword = (id) => {
        // setpasswordsArray([...passwordsArray,{...form , id:uuidv4()}]);
        // localStorage.setItem("passwords",JSON.stringify([...passwordsArray,form]));
        // setform({ site: "", username: "", password: "" });
        
        console.log("Editing your Password" ,id);
    };
    const deletePassword = (id) => {
        console.log("Password is deleated" ,id);
        // setpasswordsArray([...passwordsArray,{...form , id:uuidv4()}]);
        // localStorage.setItem("passwords",JSON.stringify([...passwordsArray,form]));
        // setform({ site: "", username: "", password: "" });

    };

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <div className=" inset-0  z-10 min-h-[86vh] w-full bg-green-50 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:14px_24px]">
                <div className=" mycontainer">
                    <h1 className="text-4xl text-center font-bold ">
                        <div className="logo font-bold text-2xl ">
                            <span className="text-green-500">&lt;</span>
                            MY-<span className="text-green-500">Passwords/&gt;</span>
                        </div>
                    </h1>
                    <p className="text-green-900 text-lg text-center">
                        Your Own Password Manager
                    </p>

                    <div className=" flex flex-col gap-6 p-4 items-center ">
                        <input
                            value={form.site}
                            onChange={handleChange}
                            name="site"
                            className="rounded-full border border-green-500 w-full px-4 py-1"
                            type="text"
                            placeholder="Enter Your Web URL's"
                        />
                        <div className="flex gap-8 w-full ">
                            <input
                                value={form.username}
                                onChange={handleChange}
                                name="username"
                                className="rounded-full border border-green-500 w-full px-4 py-1"
                                type="text"
                                placeholder="Enter Username"
                            />
                            <input
                                value={form.password}
                                onChange={handleChange}
                                name="password"
                                className="rounded-full border border-green-500 w-full px-4 py-1"
                                type="password"
                                placeholder="Enter Password"
                            />
                        </div>
                        <button
                            onClick={savePass}
                            className="flex justify-center items-center bg-green-500 hover:bg-green-600 rounded-full px-8 py-2 w-fit border-1 border-green-900"
                        >
                            <lord-icon
                                src="https://cdn.lordicon.com/efxgwrkc.json"
                                trigger="hover"
                            ></lord-icon>
                            Add Password
                        </button>
                    </div>
                    <div className="passwords flex flex-col">
                        <h2 className="font-bold text-2xl py-2">
                            Your login Credencials:-
                        </h2>
                        {passwordsArray.length === 0 && <div>No Passwords to show</div>}
                        {passwordsArray.length != 0 && (
                            <table className="table-auto w-full rounded-md overflow-hidden">
                                <thead className="bg-green-800 text-white">
                                    <tr>
                                        <th className="py-2 w-[45%]">Site</th>
                                        <th className="py-2 w-[20%]">Username</th>
                                        <th className="py-2 w-[20%]">Password</th>
                                        <th className="py-2 w-[10%]">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-green-100">
                                    {passwordsArray.map((item , index) => {
                                        return (
                                            <tr key = {index}>
                                                <td className=" py-2 border border-white text-center " onClick={() => { copyText(item.site) }}>
                                                    <div className="flex items-center justify-center">
                                                        <a href="{item.site}" target="_blank">
                                                            {item.site}
                                                        </a>
                                                        <div className="size-7 cursor-pointer">
                                                            <lord-icon
                                                                src="https://cdn.lordicon.com/iykgtsbt.json"
                                                                trigger="hover"
                                                                style={{
                                                                    width: "25px",
                                                                    height: "25px",
                                                                    "paddingTop": "3px",
                                                                    "paddingLeft": "3px",
                                                                }}
                                                            ></lord-icon>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className=" justify-center py-2 border border-white text-center " onClick={() => { copyText(item.username) }}>
                                                    <div className="flex items-center justify-center">

                                                        <span>{item.username}</span>
                                                        <div className="size-7 cursor-pointer">
                                                            <lord-icon
                                                                src="https://cdn.lordicon.com/iykgtsbt.json"
                                                                trigger="hover"
                                                                style={{
                                                                    width: "25px",
                                                                    height: "25px",
                                                                    "paddingTop": "3px",
                                                                    "paddingLeft": "3px",
                                                                }}
                                                            ></lord-icon>
                                                        </div>
                                                    </div>

                                                </td>
                                                <td className=" justify-center py-2 border border-white text-center " onClick={() => { copyText(item.password) }}>
                                                    <div className="flex items-center justify-center">

                                                        <span>{item.password}</span>
                                                        <div className="size-7 cursor-pointer">
                                                            <lord-icon
                                                                src="https://cdn.lordicon.com/iykgtsbt.json"
                                                                trigger="hover"
                                                                style={{
                                                                    width: "25px",
                                                                    height: "25px",
                                                                    "paddingTop": "3px",
                                                                    "paddingLeft": "3px",
                                                                }}
                                                            ></lord-icon>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className=" justify-center py-2 border border-white text-center w ">
                                                    <span className="cursor-pointer mx-1" onClick={()=>{editPassword(item.id)}}>
                                                             <lord-icon
                                                                src="https://cdn.lordicon.com/gwlusjdu.json"
                                                                trigger="hover"
                                                                style={{
                                                                    width: "25px",
                                                                    height: "25px",
                                                                }}
                                                            ></lord-icon>   
                                                    </span> 
                                                    <span className="cursor-pointer mx-1" onClick={()=>{deletePassword(item.id)}}>
                                                             <lord-icon
                                                                src="https://cdn.lordicon.com/skkahier.json"
                                                                trigger="hover"
                                                                style={{
                                                                    width: "25px",
                                                                    height: "25px",
                                                                }}
                                                            ></lord-icon>   
                                                    </span> 
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Manager;
