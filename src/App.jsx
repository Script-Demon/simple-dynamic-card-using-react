import React from "react";
import Header from "./components/Header"
import MovieCard from "./components/MovieCard"

export default function App() {

  const movieData = [
    {
      movieID: 1,
      moviePoster: "https://resizing.flixster.com/dNCzTv4xB_-o9JL9NbOBOwndtTA=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p7951929_v_v10_af.jpg",
      movieName: "3 Idiots",
      movieDirector: "Rajkumar Hirani",
      release: true,
    },
    {
      movieID: 2,
      moviePoster: "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Dangal_Poster.jpg/220px-Dangal_Poster.jpg",
      movieName: "Dangal",
      movieDirector: "Nitesh Tiwari",
      release: true,
    },
    {
      movieID: 3,
      moviePoster: "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/Bajrangi_Bhaijaan_Poster.jpg/220px-Bajrangi_Bhaijaan_Poster.jpg",
      movieName: "Bajrangi Bhaijaan",
      movieDirector: "Kabir Khan",
      release: true,
    },
    {
      movieID: 4,
      moviePoster: "https://miro.medium.com/v2/resize:fit:936/0*c1JhJwTFSHXBydcN",
      movieName: "PK",
      movieDirector: "Rajkumar Hirani",
      release: true,
    },
    {
      movieID: 5,
      moviePoster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLac98VbIcuCG3-93RG0twAL_w_nHJkjGKKFphfJrzmzFr3VpA7__qKnH8NJm4NKzfjPA&usqp=CAU",
      movieName: "Baahubali: The Beginning",
      movieDirector: "S. S. Rajamouli",
      release: true,
    },
    {
      movieID: 6,
      moviePoster: "https://m.media-amazon.com/images/M/MV5BMDk2MWNhNDgtNjI3ZS00MmQ3LThmYzEtM2VlYjM4M2UyY2IwXkEyXkFqcGdeQXVyMTQyMTMwOTk0._V1_.jpg",
      movieName: "Sultan",
      movieDirector: "Ali Abbas Zafar",
      release: true,
    },
    {
      movieID: 7,
      moviePoster: "https://m.media-amazon.com/images/M/MV5BZWM1NDdhMTEtNWViZi00ZmM0LWJjZmEtZDVkN2RlYWM1ZDZjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg",
      movieName: "Sanju",
      movieDirector: "Rajkumar Hirani",
      release: true,
    },
    {
      movieID: 8,
      moviePoster: "https://m.media-amazon.com/images/M/MV5BMTkzM2JjOGMtN2FkZS00NTQ5LWI3ODktMjk5ZmIzZDdhNDUxXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
      movieName: "Padmaavat",
      movieDirector: "Sanjay Leela Bhansali",
      release: true,
    },
    {
      movieID: 9,
      moviePoster: "https://qph.cf2.quoracdn.net/main-qimg-8a34f02b46505f4de263534c67fcaffb-lq",
      movieName: "Andhadhun",
      movieDirector: "Sriram Raghavan",
      release: true,
    },
    {
      movieID: 10,
      moviePoster: "https://upload.wikimedia.org/wikipedia/en/d/dc/Kabir_Singh.jpg",
      movieName: "Kabir Singh",
      movieDirector: "Sandeep Reddy Vanga",
      release: true,
    },
  ];


  return (
    <>
        <Header />
        <div className="grid grid-cols-3 gap-4 mx-auto"> 
        {
          movieData.map ((movie)=>(<MovieCard movieInfo={movie}/>))
        }
        </div>
    </>
  )
}
