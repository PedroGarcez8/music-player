const musicAlbum = document.getElementById("music-album")
const musicPlayer = document.getElementById("music-player")
const musicTitle = document.getElementById("music-title")
const banda = document.getElementById("banda")

const proxima = document.getElementById("proxima")
const play = document.getElementById("play")
const pause = document.getElementById("pause")
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

var musicaAtual= 0

function getmusic(indexMusica) {
    musicPlayer.src = musics[indexMusica].caminhoDAMusica
    musicAlbum.src = musics[indexMusica].album
    musicTitle.innerText = musics[indexMusica].tituloDaMusica
    banda.innerText = musics[indexMusica].artista

    musicaAtual = indexMusica


}


getmusic(musicaAtual)

function nextmusic() {
   getmusic(musicaAtual + 1)

   musicPlayer.play()
}

function previousMusic() {
   getmusic(musicaAtual - 1)

   musicPlayer.play()
}


play.addEventListener("click", function () {
    musicPlayer.play()

    play.style.display = "none"
    pause.style.display = "flex"
}
)

pause.addEventListener("click", function () {
    musicPlayer.pause()

    play.style.display = "flex"
    pause.style.display = "none"
}
)

pause.addEventListener("click", function () {
    musicPlayer.pause()

    play.style.display = "flex"
    pause.style.display = "none"
}
)
proxima.addEventListener("click", function () {
    nextmusic()

}
)

anterior.addEventListener("click", function () {
    previousMusic()

   
}
)

