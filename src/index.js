import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import Navbar2 from './components/Navbar2';
import Hero from './components/Hero';
import Card from './components/Card';
import { Axios } from 'axios';
const web = ReactDOM.createRoot(document.getElementById("root"));
web.render(<><Navbar/> 
<Navbar2/>
<Hero/>
<Card pic = "https://ineuron.ai/_next/image?url=%2Fimages%2FhomePage%2Fstatistics1.png&w=48&q=75" percent = "55%" text ="Average Salary Hike" />
<Card pic = "https://ineuron.ai/_next/image?url=%2Fimages%2FhomePage%2Fstatistics2.png&w=48&q=75" percent = "400+" text ="Different Courses" />
<Card pic = "https://ineuron.ai/_next/image?url=%2Fimages%2FhomePage%2Fstatistics3.png&w=48&q=75" percent ="10000+" text ="Career Transitions" />
<Card pic = "https://ineuron.ai/_next/image?url=%2Fimages%2FhomePage%2Fstatistics2.png&w=48&q=75" percent = "400+" text ="Hiring Partners" />
</>
);