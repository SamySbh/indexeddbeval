import React, { useState } from "react";
import Modal from 'react-modal';
import { useAppContext, useAppActionsContext } from "../context/AppContext";
import bookImage from "../assets/book.png";

const appRootElement = document.getElementById("root");
Modal.setAppElement(appRootElement);

export default function ListBooks() {
    const { setModalIsOpen, setBooks, setFormData, setSelectedBook } = useAppActionsContext();
    const { modalIsOpen, books, formData, selectedBook } = useAppContext();

    function openModal() {
        setModalIsOpen(true);
    }

    function closeModal() {
        setModalIsOpen(false);
    }

    function deleteBook(book) {
        const updatedBooks = books.filter((b) => b.id !== book.id);
        setBooks(updatedBooks);
    }

    function editBook(book) {
        setSelectedBook(book);
        setFormData({
            title: book.title,
            description: book.description,
            category: book.category,
            image: book.image,
        });
        openModal();
    }
    function saveChanges() {
        if (selectedBook) {
            // Créez un objet représentant les modifications du livre
            const modifiedBook = {
                ...selectedBook,
                title: formData.title,
                description: formData.description,
                category: formData.category,
                image: formData.image,
            };

            // Créez une copie du tableau books avec les modifications
            const updatedBooks = books.map((book) => {
                if (book.id === selectedBook.id) {
                    return modifiedBook;
                }
                return book;
            });

            // Mettez à jour le tableau books avec la nouvelle copie
            setBooks(updatedBooks);

            // Fermez la modal
            closeModal();
        }
    }

    return (
        <>
            <div className="container">
                <ul className="books">
                    {books.map(book => (
                        <li className="book" key={book.id}>
                            <div className="imgbook">
                                <img src={bookImage} alt={book.title} />
                            </div>
                            <div className="infosbook">
                                <span className="title">{book.title}</span>
                                <span className="description">{book.description}</span>
                                <span className="category">{book.category}</span>
                            </div>
                            <div className="buttons">
                                <button className="edit" onClick={() => editBook(book)}>
                                    Éditer
                                </button>
                                <button className="delete" onClick={() => deleteBook(book)}>
                                    Supprimer
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
            >
                <div className="modal">
                    <div className="modal-header">
                        <h1>Modifier le livre</h1>
                        <button onClick={closeModal}>Fermer</button>
                    </div>
                    <div className="modal-content">
                        <form>
                            <div className="group-form">
                                <label htmlFor="title">Titre</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                />
                            </div>
                            <div className="group-form">
                                <label htmlFor="description">Description</label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                ></textarea>
                            </div>
                            <div className="group-form">
                                <label htmlFor="category">Catégorie</label>
                                <input
                                    type="text"
                                    name="category"
                                    value={formData.category}
                                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                />
                            </div>
                            <div className="group-form">
                                <label htmlFor="image">Image</label>
                                <input
                                    type="text"
                                    name="image"
                                    value={formData.image}
                                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                                />
                            </div>
                            <div className="group-form">
                                <button type="button" onClick={saveChanges}>
                                    Enregistrer les modifications
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>
        </>
    );
}
