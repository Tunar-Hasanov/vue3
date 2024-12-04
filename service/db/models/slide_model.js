import {model, Schema} from "mongoose";

const SlideSchema = new Schema({
  name: String,
  slideImage: String,
});

const Slide = model('Slide', SlideSchema);
export default Slide;
