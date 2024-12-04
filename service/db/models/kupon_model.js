import { model, Schema } from "mongoose";

const KuponSchema = new Schema({
    tahminOne: { type: String, required: true }, // Tahmin 1 için sayı
    emsalOne: { type: String, required: true }, // Emsal 1 için sayı
    author: { type: String, required: true }, // Kuponu oluşturan kişi

    tahminTwo: { type: String, required: true }, // Tahmin 2 için sayı
    emsalTwo: { type: String, required: true }, // Emsal 2 için sayı
    sonucOne: { type: String, required: true }, // Sonuç 1 (örn: win/lose)
    sonucTwo: { type: String, required: true }, // Sonuç 2 (örn: win/lose)

    groupOneImage: { type: String, required: true }, // Grup 1 resmi yolu
    groupTwoImage: { type: String, required: true }, // Grup 2 resmi yolu
    groupThirtyImage: { type: String, required: true }, // Grup 30 resmi yolu
    groupFortyImage: { type: String, required: true }, // Grup 40 resmi yolu

    groupNameOne: { type: String, required: true }, // Grup 1 adı
    groupNameTwo: { type: String, required: true }, // Grup 2 adı
    groupNameThirty: { type: String, required: true }, // Grup 30 adı
    groupNameForty: { type: String, required: true }, // Grup 40 adı

    matchTimeOne: { type: String, required: true }, // Maç 1 zamanı
    matchDateOne: { type: String, required: true }, // Maç 1 tarihi
    matchTimeTwo: { type: String, required: true }, // Maç 2 zamanı
    matchDateTwo: { type: String, required: true }, // Maç 2 tarihi
}, {
    timestamps: true // Oluşturulma ve güncellenme zamanlarını otomatik ekler
});

// Modeli oluşturma
const Kupon = model('Kupon', KuponSchema);
export default Kupon;
