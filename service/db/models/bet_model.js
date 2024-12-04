import {model, Schema} from "mongoose";

const TahminSchema = new Schema({
    tahmin: String,
    emsal: String,
    author: String,
    sonuc: String,
    groupOneImage: String,
    groupTwoImage: String,
    groupNameOne: String,
    groupNameTwo: String,
    mathTime: String,
    matchDate: String
});

const Tahmin = model('Tahmin', TahminSchema);
export default Tahmin;
