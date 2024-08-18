import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import Modal from 'react-modal';


interface NavbarProps {
  fetchAllCards: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ fetchAllCards }) => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSave = async () => {
    if (!title || !description) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/api/v1/card", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (response.ok) {
        
        fetchAllCards();
        closeModal();  
        setTitle("")
        setDescription("")

      } else {
        console.error("Failed to create card:", response.statusText);
      }
    } catch (error) {
      console.error("Error creating card:", error);
    }
  };

  return (
    <>
      <nav className="bg-black text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <span className="font-bold text-xl mr-2">Abstract</span>
            <span className="text-xl">|</span>
            <span className="ml-2 text-xl">Help Center</span>
          </div>
          <button className="bg-white text-black px-4 py-2 rounded" onClick={openModal}>
            Submit a request
          </button>
        </div>
      </nav>

      {/* Modal for creating a card */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="fixed inset-0 flex items-center justify-center p-4"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            aria-label="Close"
          >
            <FaTimes size={20} />
          </button>
          <h2 className="text-xl font-semibold text-center mb-4">
            Enter Card Details
          </h2>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Add title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="title.."
              className="mt-2 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mt-4">
              Add description
            </label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="description.."
              className="mt-2 w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="flex justify-center">
            <button
              onClick={handleSave}
              className="bg-[#5ca6f0] text-white py-2 px-6 rounded-md hover:bg-[#4497ea] "
            >
              Save
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Navbar;
