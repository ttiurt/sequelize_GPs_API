const { GPs } = require('../models')

const create = async (req, res) => {
  try {
    const gp = await GPs.create(req.body)
    res.status(200).json(gp)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

const index = async (req, res) => {
  try {
    const gp = await GPs.findAll()
    res.status(200).json(gp)
  } catch (error) {
    res.status(500).json(error)
  }
}

const update = async (req, res) => {
  try {
    const gp = await GPs.update(
      req.body,
      { where: { id: req.params.gpId }, returning: true }
    )
    res.status(200).json(gp)
  } catch (error) {
    res.status(500).json(error)
  }
}

const deleteGP = async (req, res) => {
  try {
    const gp = await GPs.findByPk(req.params.gpId)
    await gp.destroy()
    res.status(200).json(gp)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  create,
  index,
  update,
  delete: deleteGP
}