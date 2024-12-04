import Slide from "../db/models/slide_model.js";

// Create Tahmin
export const createSlide = async (req, res) => {
    try {
        const { name } = req.body;
        const slideImage = req.files.slideImage[0].path;

        const newSlide = new Slide({ name, slideImage });
        await newSlide.save();
        res.status(201).json(newSlide);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get All Tahmin
export const getAllSlide = async (req, res) => {
    try {
        const slides = await Slide.find();
        res.json(slides);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update Tahmin
export const updateSlide = async (req, res) => {
    try {
        const updatedSlide = await Slide.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedSlide);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete Tahmin
export const deleteSlide = async (req, res) => {
    try {
        await Slide.findByIdAndDelete(req.params.id);
        res.json({ message: 'adv slide banner deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
