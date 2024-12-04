import Tahmin from "../db/models/bet_model.js";

// Create Tahmin
export const createTahmin = async (req, res) => {
    try {
        const { tahmin, emsal, author, sonuc, groupNameOne, groupNameTwo, matchTime, matchDate } = req.body;
        const groupOneImage = req.files.groupOneImage[0].path;
        const groupTwoImage = req.files.groupTwoImage[0].path;

        const newTahmin = new Tahmin({ tahmin, emsal, author, sonuc, groupOneImage, groupTwoImage, groupNameOne, groupNameTwo, matchTime, matchDate });
        await newTahmin.save();
        res.status(201).json(newTahmin);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get All Tahmin
export const getAllTahmin = async (req, res) => {
    try {
        const tahminler = await Tahmin.find();
        res.json(tahminler);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update Tahmin
export const updateTahmin = async (req, res) => {
    try {
        const updatedTahmin = await Tahmin.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedTahmin);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete Tahmin
export const deleteTahmin = async (req, res) => {
    try {
        await Tahmin.findByIdAndDelete(req.params.id);
        res.json({ message: 'Tahmin deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
