const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const path = require("path")



const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? process.env.FRONTEND_URL  // your render URL e.g. https://moodify.onrender.com
    : "http://localhost:5173",
  credentials: true
}))

/**
 * Routes
 */

const authRoutes = require("./routes/auth.route")
const songRoutes = require("./routes/song.route")

app.use("/api/auth",authRoutes)
app.use("/api/songs",songRoutes)

// Serve frontend — add AFTER your API routes
const frontendPath = process.env.NODE_ENV === 'production'
  ? '/opt/render/project/src/Frontend/dist'
  : path.join(__dirname, '../Frontend/dist')

app.use(express.static(frontendPath))

// Catch-all for React Router — must be LAST
app.get('/{*splat}', (req, res) => {
    res.sendFile(path.join(frontendPath, 'index.html'))
})
module.exports = app  