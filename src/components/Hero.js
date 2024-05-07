import React from 'react'

function Hero() {
  return (
    <div className="flex flex-row justify-around">
    <div className="text flex flex-col ">
        <h1>Learning with iNeuron made</h1>
        <h2 className="text-blue-600">
            <span className="text-4xl">&#x2039;</span> Practical{" "}
            <span className="text-4xl">&#8250;</span>
        </h2>
        <p className="text-justify ">
            Take your career to the next level with industry-ready programs. An entire learning ecosystem at your fingertips to make learning fun. Choose from a range of tech programs and make your next big career switch.
        </p>
        <button className="btn btn-outline-success" style={{ backgroundColor: "#354C99", width: '160px', padding: "10px", color: "#fff" }}>Explore Courses</button>
    </div>
    <div className="image flex">
        <img src="https://ineuron.ai/_next/image?url=%2Fimages%2FhomePage%2Fhero-bg.webp&w=640&q=50" alt="iNeuron Hero" />
    </div>
</div>

  )
}

export default Hero