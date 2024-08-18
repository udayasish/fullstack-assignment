import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Card } from "../models/card.model.js";

const createCard = asyncHandler(async (req, res) => {
  const { title, description, link } = req.body;

  // Validation
  if ([title, description, link].some((field) => field?.trim() === "")) {
    throw new ApiError(400, "All fields are required");
  }

  // Check if card with the same title already exists
  const existingCard = await Card.findOne({ title });
  if (existingCard) {
    throw new ApiError(409, "Card with this title already exists");
  }

  // Create card
  const card = await Card.create({
    title,
    description,
  });

  const createdCard = await Card.findById(card._id);

  if (!createdCard) {
    throw new ApiError(500, "Something went wrong while creating the card");
  }

  return res
    .status(201)
    .json(new ApiResponse(201, "Card created successfully", createdCard));
});

const getAllCards = asyncHandler(async (req, res) => {
  const cards = await Card.find();

  if (!cards || cards.length === 0) {
    return res.status(200).json(new ApiResponse(200, "No cards found", []));
  }

  return res
    .status(200)
    .json(new ApiResponse(200, "Cards retrieved successfully", cards));
});

const getCardByTitle = asyncHandler(async (req, res) => {
  const { title } = req.query;

  if (!title) {
    throw new ApiError(400, "Title query parameter is required");
  }

  // Find cards with titles that match the search term, case insensitive
  const cards = await Card.find({ title: { $regex: title, $options: "i" } });

  if (cards.length === 0) {
    throw new ApiError(404, "No cards found with the specified title");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, "Cards retrieved successfully", cards));
});

export { createCard, getAllCards, getCardByTitle };
