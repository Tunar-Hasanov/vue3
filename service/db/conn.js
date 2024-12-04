import { connect } from "mongoose";

const connection_database = async () => {
  try {
    connect("mongodb+srv://admin:ruslan1234@mercaz.rilo9.mongodb.net/?retryWrites=true&w=majority&appName=mercaz");
    console.log("Database connection Successfully");
  } catch(error) {
    console.log(error);
  }
}
export default connection_database;
