
const flights =  require("../flights.json");


exports.listAll = (req, res) => {
    return res.status(200).json(flights);
}

exports.listOne = (req, res) => {
    const { id } =  req.params;

    return res.status(200).json(flights.filter((id)=> flights.id === id));
}


