import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/index.css';
import Login from './components/Login';
import BookCatalog from "./components/admin/BookCatalog";
import ManageBook from "./components/admin/ManageBook";

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/book-catalog" element={<BookCatalog />} />
        <Route path="/manage-books" element={<ManageBook />} />
      </Routes>
    </BrowserRouter> 
  );
}

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
