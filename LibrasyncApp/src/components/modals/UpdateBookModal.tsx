import { UpdateBookProps } from "../../types/UpdateBookProps";
import { useState } from "react";
import { Books } from "../../types/Books";

const UpdateBook: React.FC<UpdateBookProps> = ( { isOpen, onClose, book } ) => {
    if (!isOpen || !book) return null;

    const [updatedBook, setUpdatedBook] = useState<Books>({
        id: 0,
        bookID: book.bookID,
        title: book.title,
        author: book.author,
        genre: book.genre,
        publisher: book.publisher,
        publicationDate: book.publicationDate,
        edition: book.edition,
        language: book.language,
        availability: book.availability
    });

    const removeT = (data: any) => {
        const dateIndex = data.indexOf("T")
        const dateSlice = data.slice(0, dateIndex   );
        
        return dateSlice;
    }

    
    return (
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
            <form className="flex flex-col w-[40.5rem] h-[33rem] rounded-md border border-gray-300 bg-white p-5">
                <div className="flex flex-row justify-between w-full">
                    <h2 className="text-xl font-bold">Update Book</h2>
                    <button className="text-sm font-semibold" onClick={onClose}>
                        x
                    </button>
                </div>
                <div className="flex justify-evenly gap-4 mt-5 h-full">
                    <div className="flex flex-col h-full w-1/2 gap-5">
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-semibold">Book ID:</p>
                            <input 
                                className="border px-2 h-10 rounded-md text-sm"
                                type="text" 
                                name="bookID" 
                                value={updatedBook.bookID}
                                disabled
                                onChange={(e) => setUpdatedBook({...updatedBook, bookID: e.target.value})}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-semibold">Title:</p>
                            <input 
                                className="border px-2 h-10 rounded-md text-sm"
                                type="text" 
                                name="title" 
                                value={updatedBook.title}
                                onChange={(e) => setUpdatedBook({...updatedBook, title: e.target.value})}/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-semibold">Author:</p>
                            <input 
                                className="border px-2 h-10 rounded-md text-sm"
                                type="text" 
                                name="author" 
                                value={updatedBook.author}
                                onChange={(e) => setUpdatedBook({...updatedBook, author: e.target.value})}/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-semibold">Genre:</p>
                            <input 
                                className="border px-2 h-10 rounded-md text-sm"
                                type="text" 
                                name="genre" 
                                value={updatedBook.genre}
                                onChange={(e) => setUpdatedBook({...updatedBook, genre: e.target.value})}/>
                        </div>
                    </div>

                    <div className="flex flex-col h-full w-1/2 gap-5">
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-semibold">Publisher:</p>
                            <input 
                                className="border px-2 h-10 rounded-md text-sm"
                                type="text" 
                                name="publisher" 
                                value={updatedBook.publisher}
                                onChange={(e) => setUpdatedBook({...updatedBook, publisher: e.target.value})}/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-semibold">Publication Date:</p>
                            <div className="flex text-sm items-center justify-between">
                                <p>{new Date (updatedBook.publicationDate).toLocaleDateString()}</p>
                                <input 
                                    className="border px-2 h-10 w-52 rounded-md text-sm"
                                    type="date" 
                                    name="publicationDate" 
                                    value={updatedBook.publicationDate}
                                    onChange={(e) => setUpdatedBook({...updatedBook, publicationDate: e.target.value})}/>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-semibold">Edition:</p>
                            <input 
                                className="border px-2 h-10 rounded-md text-sm"
                                type="text" 
                                name="edition" 
                                value={updatedBook.edition}
                                onChange={(e) => setUpdatedBook({...updatedBook, edition: e.target.value})}/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-semibold">Language:</p>
                            <input 
                                className="border px-2 h-10 rounded-md text-sm"
                                type="text" 
                                name="language" 
                                value={updatedBook.language}
                                onChange={(e) => setUpdatedBook({...updatedBook, bookID: e.target.value})}/>
                        </div>
                    </div>
                </div>

            </form>
        </div>
    );
}

export default UpdateBook;