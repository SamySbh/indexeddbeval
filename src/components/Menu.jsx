import React, { useState } from "react";
import Modal from 'react-modal';
import { useAppActionsContext, useAppContext } from "../context/AppContext";

export default function Menu() {
    const { setModalIsOpen, setBooks, setFormData } = useAppActionsContext();
    const { modalIsOpen, books, formData, indexedDB } = useAppContext();

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <button>
                            Accueil
                        </button>
                    </li>
                    <li>
                        <button>
                            <Link to="/ajouter-livre">
                                Ajouter un livre
                            </Link>
                        </button>
                    </li>
                </ul>
            </nav>
        </>
    );
}
