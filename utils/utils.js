exports.errorFunction = (error, res, notFound) => {
    if (notFound) {
      res.status(404).json({ error });
    } else {
      res.status(400).json({ error });
    }
  };