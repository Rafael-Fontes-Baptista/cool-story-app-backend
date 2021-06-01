const { Router } = require("express")
const Space = require("../models/").space
const Story = require("../models/").story
const auth = require("../auth/middleware")

const router = new Router()

router.get("/", async (req, res, next) => {
  try {
    const spaces = await Space.findAll({
      include: [Story],
      order: [[Story, "createdAt", "DESC"]],
    })

    return res.status(200).send(spaces)
  } catch (error) {
    next(error)
    console.log(error)
    return res.status(400).send({ message: "Something went wrong, sorry" })
  }
})

router.get("/:spaceId", async (req, res, next) => {
  try {
    const spaceId = parseInt(req.params.spaceId)

    if (!spaceId) {
      res.status(400).json("Missing parameters")
    } else {
      const space = await Space.findByPk(spaceId, {
        include: [Story],
        order: [[Story, "createdAt", "DESC"]],
      })

      return res.status(200).send(space)
    }
  } catch (e) {
    next(e)
  }
})

router.patch("/:spaceId", auth, async (req, res) => {
  const space = await Space.findByPk(req.params.spaceId)
  if (!space.userId === req.user.id) {
    return res
      .status(403)
      .send({ message: "You are not authorized to update this space" })
  }

  const { title, description, backgroundColor, color } = req.body

  await space.update({ title, description, backgroundColor, color })

  return res.status(200).send({ space })
})

module.exports = router
