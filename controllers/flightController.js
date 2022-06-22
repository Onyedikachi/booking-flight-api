
const flights =  require("../flights.json");


exports.listAll = (req, res) => {
    return res.status(200).json(flights);
}


