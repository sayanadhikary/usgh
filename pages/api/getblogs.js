// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'node:fs';

export default function handler(req, res) {
  fs.readFile(`blogdata/${req.query.slug}.json`, (err, data) => {
    if (err) {
      res.status(500).json({ error: "No Such Blog Found" })
    }
    res.status(200).json(JSON.parse(data))
  })
}
