
const flights =  require("../flights.json");


exports.listAll = (req, res) => {
    return res.status(200).json(flights);
}

exports.listOne = (req, res) => {
    const { id } =  req.params;

    return res.status(200).json(flights.filter((flight)=> flight.id === id));
}

exports.create = (req, res) => {
    const { newFlight } =  req.body;

    flights.push(newFlight);
    return res.status(200).json({"message": "New flight created"});
}


