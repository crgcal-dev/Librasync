import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/index.css';
import Login from './components/Login';
import BookCatalog from "./components/BookCatalog";
import BorrowedBooks from "./components/BorrowedBook";

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/catalog" element={<BookCatalog/>} />
        <Route path="/borrowed-books" element= {<BorrowedBooks/>} />
      </Routes>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById('root') as HTMLElement;

const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
