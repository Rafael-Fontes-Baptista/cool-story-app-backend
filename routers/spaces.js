const { Router } = require("express")
const Space = require("../models/").space

const router = new Router()

router.get("/", async (req, res, next) => {
  try {
    const spaces = await Space.findAll()

    return res.status(200).send(spaces)
  } catch (error) {
    next(error)
    console.log(error)
    return res.status(400).send({ message: "Something went wrong, sorry" })
  }
})

module.exports = router
