import Kupon from "../db/models/kupon_model.js";

// Create Kupon
export const createKupon = async (req, res) => {
    try {
        const {
            tahminOne,
            emsalOne,
            author,
            sonucOne,
            groupNameOne,
            groupNameTwo,
            matchTimeOne,
            matchDateOne,
            tahminTwo,
            emsalTwo,
            sonucTwo,
            groupNameThirty,
            groupNameForty,
            matchTimeTwo,
            matchDateTwo
        } = req.body;

        // Dosya kontrolü
        if (!req.files || !req.files.groupOneImage || !req.files.groupTwoImage ||
            !req.files.groupThirtyImage || !req.files.groupFortyImage) {
            return res.status(400).json({ error: "All image files are required" });
        }

        const groupOneImage = req.files.groupOneImage[0]?.path || "";
        const groupTwoImage = req.files.groupTwoImage[0]?.path || "";
        const groupThirtyImage = req.files.groupThirtyImage[0]?.path || "";
        const groupFortyImage = req.files.groupFortyImage[0]?.path || "";

        const newKupon = new Kupon({
            tahminOne,
            emsalOne,
            author,
            sonucOne,
            tahminTwo,
            emsalTwo,
            sonucTwo,
            groupNameOne,
            groupNameTwo,
            groupNameThirty,
            groupNameForty,
            matchTimeOne,
            matchDateOne,
            matchTimeTwo,
            matchDateTwo,
            groupOneImage,
            groupTwoImage,
            groupThirtyImage,
            groupFortyImage,
        });

        await newKupon.save();
        res.status(201).json(newKupon);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get All Kupon
export const getAllKupon = async (req, res) => {
    try {
        const kuponlar = await Kupon.find().sort({ createdAt: -1 });
        res.json(kuponlar);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update Kupon
export const updateKupon = async (req, res) => {
    try {
        const updatedKupon = await Kupon.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedKupon) {
            return res.status(404).json({ error: "Kupon not found" });
        }
        res.json(updatedKupon);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete Kupon
export const deleteKupon = async (req, res) => {
    try {
        const deletedKupon = await Kupon.findByIdAndDelete(req.params.id);
        if (!deletedKupon) {
            return res.status(404).json({ error: "Kupon not found" });
        }
        res.json({ message: "Kupon deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
