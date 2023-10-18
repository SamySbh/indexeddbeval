import React, { useState, createContext, useContext, useEffect } from "react";
import fetchedBooks from "../lib/datas";

const AppContext = createContext();
const AppActionsContext = createContext();

export const useAppContext = () => useContext(AppContext);
export const useAppActionsContext = () => useContext(AppActionsContext);

const AppProvider = (props) => {
    const [books, setBooks] = useState([]);
    const [selectedBook, setSelectedBook] = useState(null);
    const [indexedDB, setIndexedDB] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        category: "",
        image: "",
    });

    useEffect(() => {
        setBooks(fetchedBooks);

        if (window.indexedDB) {
            const openDB = window.indexedDB.open("booksDB", 1);

            openDB.onupgradeneeded = (event) => {
                const db = event.target.result;
                db.createObjectStore("books", { keyPath: "id" });
            };

            openDB.onsuccess = (event) => {
                const db = event.target.result;
                setIndexedDB(db);
            };
        } else {
            console.error("erreur");
        }
    }, []);

    return (
        <div>
            <AppActionsContext.Provider
                value={{
                    setBooks,
                    setIndexedDB,
                    setModalIsOpen,
                    setFormData,
                    setSelectedBook
                }}
            >
                <AppContext.Provider
                    value={{
                        books,
                        indexedDB,
                        modalIsOpen,
                        formData,
                        selectedBook
                    }}
                >
                    {props.children}
                </AppContext.Provider>
            </AppActionsContext.Provider>
        </div>
    );
};

export { AppProvider };
