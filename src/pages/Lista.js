import { useState, useEffect } from "react";
import api from "../apis/api";
import CardLivro from "../pages/Livros/CardLivro";
// import index from "../assets/styles/index.css";

function ListaLivro() {
  const [listaLivro, setListaLivro] = useState([]);

  useEffect(() => {
    async function fetchLivro() {
      try {
        const response = await api.get("/lista-livro");

        setListaLivro([...response.data]);
      } catch (err) {
        console.error(err);
      }
    }
    fetchLivro();
  }, []);

  return (
    <div className="container">
    <div className="row">
      <div className="row row-cols-md-3">
        {listaLivro.map((currentLivroObj) => (
          <CardLivro key={currentLivroObj._id} {...currentLivroObj} />
        ))}
      </div>
    </div>
    </div>
  );
}
export default ListaLivro;
