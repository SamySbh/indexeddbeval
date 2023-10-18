import React from "react";

function AddBookForm() {

    return (
        <>
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
        </>
    );
}

export default AddBookForm;