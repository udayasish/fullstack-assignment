import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import SearchSection from "./components/SearchSection";
import CardGrid from "./components/CardGrid";
import Footer from "./components/Footer";

interface Card {
  _id: string;
  title: string;
  description: string;
}

const App: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [filteredCards, setFilteredCards] = useState<Card[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);

  useEffect(() => {
    fetchAllCards();
  }, []);

  const fetchAllCards = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/v1/card");
      if (!response.ok) {
        throw new Error("Failed to fetch cards");
      }
      const data = await response.json();

      setCards(data.data);
      setFilteredCards(data.data);
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  };

  const handleSearch = async (query: string) => {
    if (query.length >= 3) {
      setIsSearching(true);

      try {
        const response = await fetch(
          `http://localhost:8000/api/v1/card/search?title=${query}`
        );

        if (!response.ok) {
          throw new Error("Failed to search cards");
        }

        const data = await response.json();

        if (data.data && data.data.length > 0) {
          setFilteredCards(data.data);
        } else {
          setFilteredCards([]); // No results found
        }
      } catch (error) {
        console.error("Error searching cards:", error);
        setFilteredCards([]); // Set to empty if there's an error
      }
    } else {
      setIsSearching(false);
      setFilteredCards(cards); // Reset to all cards if query is less than 3 characters
    }
  };

  const handleBackClick = () => {
    setIsSearching(false);
    setFilteredCards(cards);
  };

  return (
    <div className="App">
      <Navbar fetchAllCards={fetchAllCards} />
      <SearchSection onSearch={handleSearch} />
      <CardGrid
        cards={filteredCards}
        isSearching={isSearching}
        onBackClick={handleBackClick}
      />
      <Footer />
    </div>
  );
};

export default App;
