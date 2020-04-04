const Thing = require("../model/Thing");
const utils = require("../utils/utils");

exports.createThing = (req, res) => {
  delete req.body._id;
  const thing = new Thing({
    ...req.body
  });
  thing
    .save()
    .then(() => res.status(201).json({ message: "objet enregistré !" }))
    .catch(utils.errorFunction(error, res));
};

exports.updateThing = (req, res, next) => {
  Thing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(thing => res.status(200).json({ message: "objet enregistré !" }))
    .catch(error => utils.errorFunction(error, res, true));
};

exports.getOneThing = (req, res, next) => {
  Thing.findOne({ _id: req.params.id })
    .then(thing => res.status(200).json(thing))
    .catch(error => utils.errorFunction(error, res, true));
};

exports.deleteThing = (req, res, next) => {
  Thing.deleteOne({ _id: req.params.id })
    .then(thing => res.status(200).json({ message: "objet supprimé !" }))
    .catch(error => utils.errorFunction(error, res, true));
};

exports.getAllThings = (req, res, next) => {
  Thing.find()
    .then(things => res.status(200).json(things))
    .catch(error => utils.errorFunction(error, res));
};
