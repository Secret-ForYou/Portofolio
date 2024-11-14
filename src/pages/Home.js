import React from "react";
import Header from "../components/Header";
import TitleBar from "../components/TitleBar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import '../styles/Home.css';
import image from '../images/profile.webp';
import { FiDownload } from 'react-icons/fi';
import MenuMobile from "../components/MenuMobile";
import { ReactTyped } from 'react-typed';  // Pastikan ini menggunakan ekspor bernama

function Home() {
  return (
    <div>
      <TitleBar />
      <section className="flex-container">
        <SideBar />
        <section className="main-container">
          <Header />
          <MenuMobile />
          <main className="main-wrapper home">
            <div className="home-content">
              <p><span className="span">{'<'}</span>Hello 👋, I'm</p>
              <h1>David Morris <span className="span">{'/>'}</span></h1>
              <ReactTyped  // Gunakan ReactTyped dengan benar
                steps={['Full-Stack Developer', 1000, 'Web Development Student', 1000, 'Mobile Development Student', 1000]}
                loop={Infinity}
                wrapper="h2"
              />
              <a
                href="#"
                target="_blank"
                className="btn-download" rel="noreferrer"
              >
                Download CV
                <FiDownload />
              </a>
            </div>

            <div className="home-img">
              <img
                src={image}
                alt="foto profile fajar ghifari nugroho"
                className="image-perfil"
              />
            </div>

          </main>
        </section>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
