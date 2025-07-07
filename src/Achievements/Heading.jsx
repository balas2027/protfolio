import React from 'react'

function Heading() {
  return (
    <div id="achievements"> 
       <div className="text-center mb-3 ">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-900 to-purple-400 rounded-full animate-spin" />
            <span className="text-sm text-gray-400 font-medium animate-pulse">
              Milestones
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Achievements
            </span>
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent ml-4">
              Unlocked
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-center shiny-text max-w-2xl mx-auto leading-relaxed">
            Celebrating milestones that mark dedication, creativity, and
            impactful contributions across tech and innovation.
          </p>
        </div>
    </div>
  )
}

export default Heading
