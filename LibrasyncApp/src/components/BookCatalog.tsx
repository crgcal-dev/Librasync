import { useEffect, useState } from "react";
import { Menu } from "./Menu";
import { Book } from "../types/BookType"
import Background from "./Background";

const BookCatalog = () =>{
    const [books, setBook] = useState<Book[]>([]);
    const [bookData, setBookData] = useState<Book>({
        id: 0,
        bookID: "",
        title: "",
        author: "",
        genre: "",
        publisher: "",
        publicationDate: "",
        edition: "",
        language: "",
        isAvailable: true,
    });

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

    const handleAdd = async (e:any) =>{
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5019/api/book/create",{
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(bookData)
            })

            if (response.ok) {
                setBookData({
                    id: 0,
                    bookID: "",
                    title: "",
                    author: "",
                    genre: "",
                    publisher: "",
                    publicationDate: "",
                    edition: "",
                    language: "",
                    isAvailable: true,
                })
            } else {
                console.error("Failed to add new book. Status:", response.status);
            }
        } catch (error) {
            console.error("Failed to add new book.", error);
        }
    }

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setBookData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return(
        <div className="flex">
            <Background />
            <Menu/>
            <div className="flex flex-col justify-between py-10 items-center w-screen z-10">
                <div className="h-96 w-[100rem] min-w-96 overflow-y-scroll border border-gray-300">
                    <table className="border-collapse border border-gray-300 w-full h-96 overflow-y-scroll">
                        <thead className="sticky top-0 bg-sky-500 text-white ">
                            <tr className="border border-red-300">
                                <th className="border text-sm p-2 ">Book ID</th>
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
                                <tr  key={book.id} className="border pt-5 border-red-300">
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

                <div className="flex flex-col w-[30rem] h-[33rem] border border-gray-300 gap-5 justify-center items-center">
                    <h1 className="font-semibold">BOOK INFORMATION</h1>
                    <div className="flex gap-2 items-center w-96 justify-between">
                        <p className="text-sm font-semibold">Book ID: </p>
                        <input className="border w-60" type="text" onChange={handleInputChange} value={bookData.bookID} name="bookID"/>
                    </div>
                    <div className="flex gap-2 items-center w-96 justify-between">
                        <p className="text-sm font-semibold">Title: </p>
                        <input className="border w-60" type="text" onChange={handleInputChange} value={bookData.title} name="title"/>
                    </div>
                    <div className="flex gap-2 items-center w-96 justify-between">
                        <p className="text-sm font-semibold">Author: </p>
                        <input className="border w-60" type="text" onChange={handleInputChange} value={bookData.author} name="author"/>
                    </div>
                    <div className="flex gap-2 items-center w-96 justify-between">
                        <p className="text-sm font-semibold">Genre: </p>
                        <input className="border w-60" type="text" onChange={handleInputChange} value={bookData.genre} name="genre"/>
                    </div>
                    <div className="flex gap-2 items-center w-96 justify-between">
                        <p className="text-sm font-semibold">Publisher: </p>
                        <input className="border w-60" type="text" onChange={handleInputChange} value={bookData.publisher} name="publisher"/>
                    </div>
                    <div className="flex gap-2 items-center w-96 justify-between">
                        <p className="text-sm font-semibold">Publication Date: </p>
                        <input className="border w-60" type="date" onChange={handleInputChange} value={bookData.publicationDate} name="publicationDate"/>
                    </div>
                    <div className="flex gap-2 items-center w-96 justify-between">
                        <p className="text-sm font-semibold">Edition: </p>
                        <input className="border w-60" type="text" onChange={handleInputChange} value={bookData.edition} name="edition"/>
                    </div>
                    <div className="flex gap-2 items-center w-96 justify-between">
                        <p className="text-sm font-semibold">Language: </p>
                        <input className="border w-60" type="text" onChange={handleInputChange} value={bookData.language} name="language"/>
                    </div>
                    <div className="flex gap-5">
                        <button className="border bg-green-500 text-white h-12 w-32 text-sm font-semibold" onClick={handleAdd}>ADD</button>
                        <button className="border bg-orange-500 text-white h-12 w-32 text-sm font-semibold">UPDATE</button>
                        <button className="border bg-red-500 text-white h-12 w-32 text-sm font-semibold">DELETE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookCatalog;