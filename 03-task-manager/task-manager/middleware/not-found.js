const notFound = (req,res) => {
    res
    .status(404)
    .send("We couldnt find the page you are looking for.")
}

module.exports = notFound