const musicAlbum = document.getElementById("music-album")
const musicPlayer = document.getElementById("music-player")
const musicTitle = document.getElementById("music-title")
const banda = document.getElementById("banda")

const proxima = document.getElementById("proxima")
const play = document.getElementById("play")
const anterior = document.getElementById("anterior")

const progress = document.getElementById("progress")
const currentTime = document.getElementById("current-time")
const endTime = document.getElementById("end-time")

const musics = [
    {
        caminhoDAMusica: "./music/m1.mp3",
        tituloDaMusica: "musica 01",
        artista: "neelix",
        album: "./assets/music-img.png",
    },
    {
        caminhoDAMusica: "./music/m2.mp3",
        tituloDaMusica: "musica 02",
        artista: "acdc",
        album: "./assets/music-img.png",
    },
    {
        caminhoDAMusica: "./music/m3.mp3",
        tituloDaMusica: "musica 03",
        artista: "borjes",
        album: "./assets/music-img.png"
    }
]

function getmusic() {
    musicPlayer.src = musics[0].caminhoDAMusica
    musicAlbum.src = musics[0].album
    musicTitle.innerText = musics[0].tituloDaMusica
    banda.innerText = musics[0].artista


}

getmusic()

play.addEventListener("click", function () {
    musicPlayer.play()
}
)
