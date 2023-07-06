const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the schema
const stockSchema = new Schema({
    StockName: {
        type: String,
        required: true
    },
    Symbol: {
        type: String,
        required: true
    },
    sector: {
        type: String,
        required: true
    },
    ISIN: {
        type: String,
        required: true
    },
    shortName: {
        type: String,
        required: true
    },
    bseCode: {
        type: String,
        required: true
    },
    nseCode: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: true
    },
    marketCap: {
        type: String,
        required: true
    },
    currentPrice: {
        type: String,
        required: true
    },
    highLow: {
        high: {
            type: String,
            required: true
        },
        low: {
            type: String,
            required: true
        }
    },
    stockPE: Number,
    bookValue: {
        type: String,
        required: true
    },
    dividendYield: {
        type: String,
        required: true
    },
    roce: {
        type: String,
        required: true
    },
    roe: {
        type: String,
        required: true
    },
    faceValue: {
        type: String,
        required: true
    }
});

// Create a model using the schema
const Stock = mongoose.model('Stock', stockSchema);

// Export the model
module.exports = Stock;
