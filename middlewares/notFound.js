const notFound = (req, res) => {
    res.json({
      message: "Route not found",
    });
  }



module.exports = notFound