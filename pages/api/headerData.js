// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    name: "Anil Kumar Sheoran",
    title: "Frontend Developer",
    nav:[{text: "About",url: '/about'}]
  })
}
