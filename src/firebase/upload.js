import { collection, addDoc } from "firebase/firestore"
import MOCK_DATA from "../components/Data/MOCK_DATA.json" assert { type: "json"}
//import { db } from "./config.js"

const productosRef = collection(db, "productos") 

//se borra propiedad id de array:
MOCK_DATA.forEach((item) => {
    delete item.id

    addDoc(productosRef, item)
})