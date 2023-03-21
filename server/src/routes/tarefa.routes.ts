import { Router } from "express"
import database from "../database"

const router = Router()

router.get("/", async (req, res) => {
  console.log("READED ITENS")
  const db = await database()
  const result = await db.all('SELECT * FROM todo')
  res.json(result)
})

router.get("/:id", async (req, res) => {
  console.log("READED ITEN")
  const db = await database()
  const result = await db.all('SELECT * FROM todo WHERE id=?', [req.params.id])
  res.json(result)
})

router.post("/", async (req, res) => {
  console.log("CREATED NEW ITEM")
  const db = await database()
  const result = await db.run('INSERT INTO todo(texto) VALUES(?)', [req.body.texto])
  res.json({ id: result.lastID })
})




router.put("/:id", (req, res) => {
  console.log("")
 const db = await database()
  res.send("# Alterar todos os dados de uma tarefa")
})

router.patch("/:id", (req, res) => {
  console.log("VALUE UPDATED")
  const db = await database()
  res.send("UPDATE ")
})

router.delete("/:id", (req, res) => { 
 console.log("ITEM DELETED")
 const db = await database()
 const result = await db.run("DELETE FROM todo WHERE id=?"
})

export default router