
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

    newFlight.id = flights.length + 1;

    flights.push(newFlight);
    return res.status(200).json({"message": "New flight created"});
}

exports.delete = (req, res) => {
    const { id } = req.params;

    flights = flights.filter((flight) => flight.id !== id);
    return res.status(200).json({"message": `Flight with id ${id} deleted`});
}

exports.update = (req, res) => {
    const { id } = req.params;
    const { updatedFlight } = req.body;

    const flight = flights.filter((flight) => flight.id === id);

    if (flights.length < 1)
        res.status(400).json({"message": `Flight with id ${id} does not exist`});

    flight = { ... flight, ...updatedFlight };

    return res.status(200).json({"message": `Flight with id ${id} updated`});
}



