import { createContext, useState } from "react"  // ← remove unused imports

export const SongContext = createContext()

export const SongProvider = ({ children }) => {  // ← lowercase children, renamed export

  const [song, setSong] = useState({
    url: "https://ik.imagekit.io/spider123/cohort-2/moodify/songs/Restart_-_Rap__N__Folk__From__12th_Fail___siHlJW6GO.mp3",
    posterUrl: "https://ik.imagekit.io/spider123/cohort-2/moodify/posters/Restart_-_Rap__N__Folk__From__12th_Fail___pDBsHhtOX.jpeg",
    title: "Restart - Rap 'N' Folk (From \"12th Fail\")",
    mood: "happy",
  })

  const [loading, setLoading] = useState(false)

  return (
    <SongContext.Provider value={{ loading, setLoading, song, setSong }}>
      {children}  {/* ← lowercase */}
    </SongContext.Provider>
  )
}