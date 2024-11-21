import { useEffect, useState } from "react";
import Header from "./Header";
import { Books } from "../types/Books";
import Download  from "../assets/download.svg"

const BookCatalog = () => {
    const [books, setBooks] = useState<Books[]>([]);
    const [search, setSearch] = useState("");
    const [selectedGenre, setSelectedGenre] = useState("");
    const [selectedAvailability, setSelectedAvailability] = useState("");

    const fetchBookData = async () => {
        try {
            const response = await fetch("http://localhost:5019/api/book");
            
            if (response.ok) {
                const data: Books[] = await response.json();
                setBooks(data);
            } else {
                console.error(`Error: ${response.status} ${response.statusText}`);
            }
        } catch (error) {
            console.error("Failed to fetch book data.", error);
        }
    };

    useEffect(() => {
        fetchBookData();
    }, []);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedGenre(e.target.value);
    };

    const handleAvailabilityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedAvailability(e.target.value);
    };

    const filteredBooks = books.filter(book => {
        const matchesSearch = book.title.toLowerCase().includes(search.toLowerCase());
        const matchesGenre = selectedGenre ? book.genre === selectedGenre : true;
        const matchesAvailability = selectedAvailability
            ? (selectedAvailability === "Available" ? book.availability : !book.availability)
            : true;

        return matchesSearch && matchesGenre && matchesAvailability;
    });

    return (
        <div>
            <Header />
            <div className="flex flex-col items-center pt-10 gap-3 h-[55.5rem]">
                <div className="flex flex-col pb-5 w-full px-40">
                    <p className="font-bold text-2xl text-left text-slate-800">Book Catalog</p>
                    <hr className="bg-gray-300 w-full h-0.5"/>
                </div>
                <div className="flex items-center w-full px-40 justify-between">
                    <div className="flex gap-10">
                        <div className="flex gap-2 items-center">
                            <p className="text-sm font-semibold">Find a book: </p>
                            <input
                                className="text-sm border px-2 rounded-sm py-1"
                                type="search"
                                placeholder="Input a title here"
                                value={search}
                                onChange={handleSearchChange}
                            />
                        </div>
                        <div className="flex gap-2 items-center">
                            <p className="text-sm font-semibold">Select Genre: </p>
                            <select
                                className="border text-sm rounded-sm w-52 py-1"
                                value={selectedGenre}
                                onChange={handleGenreChange}
                            >
                                <option value="">All</option>
                                {[...new Set(books.map(book => book.genre))].map(genre => (
                                    <option key={genre} value={genre}>
                                        {genre}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="flex gap-2 items-center">
                            <p className="text-sm font-semibold">Availability:</p>
                            <select
                                className="border text-sm w-52 py-1"
                                value={selectedAvailability}
                                onChange={handleAvailabilityChange}
                            >
                                <option value="">All</option>
                                <option value="Available">Available</option>
                                <option value="Booked">Booked</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex gap-2 text-white">
                        <button className="text-sm bg-green-600 px-3 py-1.5 rounded-sm flex gap-2 items-center justify-center">
                            <img className="h-5 " src={Download} /> Download Report
                        </button>
                    </div>
                </div>
                <div className="max-h-[45rem] overflow-y-scroll border">
                    <table className="w-[100rem] font-thin">
                        <thead className="bg-gray-200 h-14 text-sm sticky top-0">
                            <tr className="text-slate-800">
                                <th className="border border-gray-300">Book ID</th>
                                <th className="border border-gray-300">Title</th>
                                <th className="border border-gray-300">Author</th>
                                <th className="border border-gray-300">Genre</th>
                                <th className="border border-gray-300">Publisher</th>
                                <th className="border border-gray-300">Publication Date</th>
                                <th className="border border-gray-300">Edition</th>
                                <th className="border border-gray-300">Language</th>
                                <th className="border border-gray-300">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredBooks.length > 0 ? (
                                filteredBooks.map((book) => (
                                    <tr key={book.id} className="border text-center text-sm h-14">
                                        <td className="border text-sky-600">{book.bookID}</td>
                                        <td className="border">{book.title}</td>
                                        <td className="border text-sky-600">{book.author}</td>
                                        <td className="border">{book.genre}</td>
                                        <td className="border">{book.publisher}</td>
                                        <td className="border">{new Date(book.publicationDate).toLocaleDateString()}</td>
                                        <td className="border">{book.edition}</td>
                                        <td className="border">{book.language}</td>
                                        <td className={`border font-semibold ${book.availability ? 'text-green-600' : 'text-red-600'}`}>
                                            {book.availability ? 'Available' : 'Booked'}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={9} className="text-center p-5">
                                        No books available.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default BookCatalog;
