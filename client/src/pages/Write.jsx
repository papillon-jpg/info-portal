import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";

const Write = () => {
  const state = useLocation().state;
  const navigate = useNavigate();

  // ✅ ispravno: title = naslov, value = tekst/desc
  const [title, setTitle] = useState(state?.title || "");
  const [value, setValue] = useState(state?.desc || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/upload", formData);
      return res.data; // očekuješ da backend vrati URL/ime fajla
    } catch (err) {
      console.log(err);
      return "";
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();

    const imgUrl = file ? await upload() : "";

    try {
      if (state) {
        await axios.put(`/posts/${state.id}`, {
          title,
          desc: value,
          cat,
          img: imgUrl, // ako nema file -> ""
        });
      } else {
        await axios.post(`/posts`, {
          title,
          desc: value,
          cat,
          img: imgUrl, // ako nema file -> ""
          date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
        });
      }

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="add">
      <div className="content">
        <input
          type="text"
          placeholder="Naslov"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <div className="editorContainer">
          <textarea
            className="editor"
            placeholder="Napišite nešto..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      </div>

      <div className="menu">
        {/* OBJAVI */}
        <div className="item">
          <h1>Objavi</h1>

          <span>
            <b>Status: </b> Skica
          </span>
          <span>
            <b>Vidljivost: </b> Javno
          </span>

          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label className="file" htmlFor="file">
            Ubaci sliku
          </label>

          <div className="buttons">
            <button type="button">Spremi kao skicu</button>
            <button type="button" onClick={handleClick}>
              {state ? "Ažuriraj" : "Objavi"}
            </button>
          </div>
        </div>

        {/* KATEGORIJA */}
        <div className="item">
          <h1>Kategorija</h1>

          <div className="cat">
            <input
              type="radio"
              checked={cat === "sport"}
              name="cat"
              value="sport"
              id="sport"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="sport">SPORT</label>
          </div>

          <div className="cat">
            <input
              type="radio"
              checked={cat === "biznis"}
              name="cat"
              value="biznis"
              id="biznis"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="biznis">BIZNIS</label>
          </div>

          <div className="cat">
            <input
              type="radio"
              checked={cat === "lifestyle"}
              name="cat"
              value="lifestyle"
              id="lifestyle"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="lifestyle">LIFESTYLE</label>
          </div>

          <div className="cat">
            <input
              type="radio"
              checked={cat === "auto"}
              name="cat"
              value="auto"
              id="auto"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="auto">AUTO</label>
          </div>

          <div className="cat">
            <input
              type="radio"
              checked={cat === "umjetnost"}
              name="cat"
              value="umjetnost"
              id="umjetnost"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="umjetnost">UMJETNOST</label>
          </div>

          <div className="cat">
            <input
              type="radio"
              checked={cat === "hrana"}
              name="cat"
              value="hrana"
              id="hrana"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="hrana">HRANA</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
