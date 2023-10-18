import React from "react";
import { useAppContext, useAppActionsContext } from "../context/AppContext";

function AddBook() {
    const { setBooks, setFormData } = useAppActionsContext();
    const { formData, books } = useAppContext();

    const addBook = () => {
        const newBook = {
            id: Date.now(),
            title: formData.title,
            description: formData.description,
            category: formData.category,
            image: formData.image,
        };

        const updatedBooks = [...books, newBook];

        setBooks(updatedBooks);

        setFormData({
            title: "",
            description: "",
            category: "",
            image: "",
        });
    };

    return (
        <div className="container">
            <form className="addbook">
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
                        placeholder="url image"
                        value={formData.image}
                        onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    />
                </div>
                <div className="group-form">
                    <button type="button" onClick={addBook}>
                        Ajouter le livre
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AddBook;
