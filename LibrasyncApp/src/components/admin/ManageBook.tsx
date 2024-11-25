import { useState } from "react";
import Header from "../Header";
import AddButton from "../../assets/add.svg"
import CloseButton from "../../assets/close.svg"
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const ManageBook = () => {
    const [bookDetails, setBookDetails] = useState({
        bookID: "",
        title: "",
        author: "",
        genre: "",
        edition: "",
        language: "",
        publisher: "",
        publicationDate: "",
        availability: true
    });

    const handleAddBooks = async (e:any) => {
        e.preventDefault();
        
        try {
            const response = await fetch("http://localhost:5019/api/book/create", {
                method: "POST",
                headers: { "Content-Type" : "application/json" },
                body: JSON.stringify(bookDetails)
            })

            if (response.ok){
                setBookDetails({
                    bookID: "", 
                    title: "", 
                    author: "", 
                    genre: "", 
                    edition: "", 
                    language: "", 
                    publisher: "", 
                    publicationDate: "", 
                    availability: true,
                });
                toast.success("Book added successfully!", { position: "bottom-right" });
            }else{
                const data = await response.json();
                toast.error(`Failed to add book: ${data.message}`, { position: "bottom-right" });
            }
        } catch (error) {
            console.error("Failed to add book.", error);
            toast.error("Failed to add book details.", { position: "bottom-right" });
        }
    }

    return (
        <div>
            <Header />
            <div className="flex flex-col items-center pt-10 gap-3">
                <div className="flex flex-col pb-5 w-full px-40">
                    <p className="font-bold text-2xl text-left text-slate-800">Manage Books</p>
                    <hr className="bg-gray-300 w-full h-0.5"/>
                </div>
                <form className="flex flex-col border w-[100rem] rounded-md" onSubmit={handleAddBooks}>
                    <div className="flex w-full p-5 px-20">
                        <div className="flex flex-col w-1/3 p-5 gap-8 text-sm">
                            <div className="flex flex-col gap-2">
                                <p className="text-sm font-semibold">Book ID*</p>
                                <input 
                                    className="border px-2 h-10 rounded-md" 
                                    type="text" 
                                    required
                                    value={bookDetails.bookID}
                                    onChange={e => setBookDetails({...bookDetails, bookID: e.target.value})}/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-sm font-semibold">Title*</p>
                                <input 
                                    className="border px-2 h-10 rounded-md" 
                                    type="text" 
                                    required
                                    value={bookDetails.title}
                                    onChange={e => setBookDetails({...bookDetails, title: e.target.value})}/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-sm font-semibold">Author*</p>
                                <input 
                                    className="border px-2 h-10 rounded-md" 
                                    type="text" 
                                    required
                                    value={bookDetails.author}
                                    onChange={e => setBookDetails({...bookDetails, author: e.target.value})}/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-sm font-semibold">Genre*</p>
                                <input 
                                    className="border px-2 h-10 rounded-md" 
                                    type="text" 
                                    required
                                    value={bookDetails.genre}
                                    onChange={e => setBookDetails({...bookDetails, genre: e.target.value})}/>
                            </div>
                        </div>

                        <div className="flex flex-col w-1/3 p-5 gap-8 text-sm">
                            <div className="flex flex-col gap-2">
                                <p className="text-sm font-semibold">Edition*</p>
                                <input 
                                    className="border px-2 h-10 rounded-md" 
                                    type="text" 
                                    required
                                    value={bookDetails.edition}
                                    onChange={e => setBookDetails({...bookDetails, edition: e.target.value})}/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-sm font-semibold">Language*</p>
                                <input 
                                    className="border px-2 h-10 rounded-md" 
                                    type="text" 
                                    required
                                    value={bookDetails.language}
                                    onChange={e => setBookDetails({...bookDetails, language: e.target.value})}/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-sm font-semibold">Publisher*</p>
                                <input 
                                    className="border px-2 h-10 rounded-md" 
                                    type="text" 
                                    required
                                    value={bookDetails.publisher}
                                    onChange={e => setBookDetails({...bookDetails, publisher: e.target.value})}/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-sm font-semibold">Publication Date*</p>
                                <input 
                                    className="border px-2 h-10 rounded-md" 
                                    type="date" 
                                    required
                                    value={bookDetails.publicationDate}
                                    onChange={e => setBookDetails({...bookDetails, publicationDate: e.target.value})}/>
                            </div>
                        </div>

                        <div className="flex flex-col border w-1/3 justify-center">
                            <div className="flex flex-col justify-evenly h-[22.5rem] p-5 px-10 text-sm bg-white rounded-sm">
                                <div className="flex flex-col">
                                    <p className="font-bold text-xl text-left text-slate-800">Book Details</p>
                                    <hr className="bg-gray-300 w-full h-0.5"/>
                                </div>
                                <div className="flex gap-5 justify-between">
                                    <p className="font-semibold">Book ID: </p>
                                    <p>{bookDetails.bookID}</p>
                                </div>
                                <div className="flex gap-5 justify-between">
                                    <p className="font-semibold">Title: </p>
                                    <p>{bookDetails.title}</p>
                                </div><div className="flex gap-5 justify-between">
                                    <p className="font-semibold">Author: </p>
                                    <p>{bookDetails.author}</p>
                                </div><div className="flex gap-5 justify-between">
                                    <p className="font-semibold">Genre: </p>
                                    <p>{bookDetails.genre}</p>
                                </div><div className="flex gap-5 justify-between">
                                    <p className="font-semibold">Publisher: </p>
                                    <p>{bookDetails.publisher}</p>
                                </div><div className="flex gap-5 justify-between">
                                    <p className="font-semibold">Publication Date: </p>
                                    <p>{bookDetails.publicationDate}</p>
                                </div>
                                <div className="flex gap-5 justify-between">
                                    <p className="font-semibold justify-between">Edition: </p>
                                    <p>{bookDetails.edition}</p>
                                </div>
                                <div className="flex gap-5 justify-between">
                                    <p className="font-semibold">Language: </p>
                                    <p>{bookDetails.language}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex text-sm p-5 px-24 gap-5">
                        <button 
                            className="flex justify-evenly items-center w-20 py-2 bg-green-600 text-white rounded-sm">
                            <img className="h-4" src={AddButton} alt="" />Save
                        </button>
                        <button 
                            className="flex justify-evenly items-center w-20 py-2 bg-red-600 text-white rounded-sm"
                            onClick={() => setBookDetails({
                                bookID: "", title: "", author: "", genre: "", edition: "", 
                                language: "", publisher: "", publicationDate: "", availability: false
                            })}>
                            <img className="h-4" src={CloseButton} alt="" />Clear
                        </button>
                    </div>
                </form>
                <ToastContainer />
            </div>
        </div>
    )
}

export default ManageBook;