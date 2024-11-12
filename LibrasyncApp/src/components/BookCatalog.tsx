import { useEffect, useState } from "react";
import { Menu } from "./Menu";
import { Book } from "../types/BookType"

const BookCatalog = () =>{
    const [books, setBook] = useState<Book[]>([]);

    useEffect(() => {
        const fetchBookData = async () =>{
            try {
                const response = await fetch("http://localhost:5019/api/book");
                const data: Book[] = await response.json();
                
                setBook(data);
            } catch (error) {
                console.error("Failed to fetch book data.");
            }
        }

        fetchBookData();
    }, [])

    return(
        <div className="flex">
            <Menu/>
            <div className="flex flex-col justify-between py-10 items-center w-screen">
                <div className="h-96 w-[100rem] min-w-96 overflow-y-scroll">
                    <table className="border-collapse border w-full h-96 overflow-y-scroll">
                        <thead className="sticky top-0 bg-sky-500 text-white">
                            <tr className="border">
                                <th className="border text-sm p-2">Book ID</th>
                                <th className="border w-1/6 text-sm p-2">Title</th>
                                <th className="border w-1/6 text-sm p-2">Author</th>
                                <th className="border text-sm p-2">Genre</th>
                                <th className="border w-1/6 text-sm p-2">Publisher</th>
                                <th className="border text-sm p-2">Pulication Date</th>
                                <th className="border text-sm p-2">Edition</th>
                                <th className="border text-sm p-2">Language</th>
                                <th className="border text-sm p-2">Availability Status</th>
                            </tr>
                        </thead>
                        <tbody className="overflow-y-scroll border">
                            {books.map((book) => (
                                <tr  key={book.id} className="border pt-5">
                                    <td className="border text-sm p-2">{book.bookID}</td>
                                    <td className="border text-sm p-2">{book.title}</td>
                                    <td className="border text-sm p-2">{book.author}</td>
                                    <td className="border text-sm p-2">{book.genre}</td>
                                    <td className="border text-sm p-2">{book.publisher}</td>
                                    <td className="border text-sm p-2">{new Date(book.publicationDate).toLocaleDateString()}</td>
                                    <td className="border text-sm p-2">{book.edition}</td>
                                    <td className="border text-sm p-2">{book.language}</td>
                                    <td className="border text-sm p-2">{book.isAvailable ? "Available" : "Not Available"}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="flex flex-col w-[30rem] h-[33rem] border gap-5 justify-center items-center">
                    <h1 className="font-semibold">BOOK INFORMATION</h1>
                    <div className="flex gap-2 items-center w-96 justify-between">
                        <p className="text-sm font-semibold">Book ID: </p>
                        <input className="border w-60" type="text" onChange={(e) => e.target.value}/>
                    </div>
                    <div className="flex gap-2 items-center w-96 justify-between">
                        <p className="text-sm font-semibold">Title: </p>
                        <input className="border w-60" type="text" onChange={(e) => e.target.value}/>
                    </div>
                    <div className="flex gap-2 items-center w-96 justify-between">
                        <p className="text-sm font-semibold">Author: </p>
                        <input className="border w-60" type="text" onChange={(e) => e.target.value}/>
                    </div>
                    <div className="flex gap-2 items-center w-96 justify-between">
                        <p className="text-sm font-semibold">Genre: </p>
                        <input className="border w-60" type="text" onChange={(e) => e.target.value}/>
                    </div>
                    <div className="flex gap-2 items-center w-96 justify-between">
                        <p className="text-sm font-semibold">Publisher: </p>
                        <input className="border w-60" type="text" onChange={(e) => e.target.value}/>
                    </div>
                    <div className="flex gap-2 items-center w-96 justify-between">
                        <p className="text-sm font-semibold">Publication Date: </p>
                        <input className="border w-60" type="date" onChange={(e) => e.target.value}/>
                    </div>
                    <div className="flex gap-2 items-center w-96 justify-between">
                        <p className="text-sm font-semibold">Edition: </p>
                        <input className="border w-60" type="text" onChange={(e) => e.target.value}/>
                    </div>
                    <div className="flex gap-2 items-center w-96 justify-between">
                        <p className="text-sm font-semibold">Language: </p>
                        <input className="border w-60" type="text" onChange={(e) => e.target.value}/>
                    </div>
                    <div className="flex gap-5 pt-5">
                        <button className="border bg-green-500 text-white h-12 w-32 text-sm font-semibold">ADD</button>
                        <button className="border bg-orange-500 text-white h-12 w-32 text-sm font-semibold">UPDATE</button>
                        <button className="border bg-red-500 text-white h-12 w-32 text-sm font-semibold">DELETE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookCatalog;