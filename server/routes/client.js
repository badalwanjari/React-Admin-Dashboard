import express from "express";
import {getProducts, getCustomers, getTransactions, getGeography} from "../controllers/client.js"
const router = express.Router();

router.get("/products", getProducts);
router.get("/customers", getCustomers);
router.get("/transactions", getTransactions);
router.get("/geography", getGeography);

router.post("/test", (req, res)=>{
    const {name} = req.body || {name: "sir/mam"}
    res.send(`Hello ${name}`)
})


export default router;