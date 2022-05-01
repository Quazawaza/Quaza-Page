<script>
    import discord from "../assets/logos/discord.svg";
    import github from "../assets/logos/github.svg";
    import lastfm from "../assets/logos/lastfm.svg";
    import spotify from "../assets/logos/spotify.svg";
    import steam from "../assets/logos/steam.svg";
    import telegram from "../assets/logos/telegram.svg";
    import twitter from "../assets/logos/twitter.svg";
    import youtube from "../assets/logos/youtube.svg";
    import reddit from "../assets/logos/reddit.svg"

export default {
      computed: {
    discordSrc() { return discord; },
    githubSrc() { return github; },
    lastfmSrc() { return lastfm; },
    spotifySrc() { return spotify; },
    steamSrc() { return steam; },
    telegramSrc() { return telegram; },
    twitterSrc() { return twitter; },
    youtubeSrc() { return youtube; },
    redditSrc() { return reddit}
    
  },
}
</script>

<template>
<nav class="navbar navbar-expand-md navbar-dark navbar_color border border-3 border-dark">
    <div class="container-fluid">
      <span class="navbar-brand" href="#">
        <img src="../assets/logos/logo.png" alt="Logo" width="40" height="40" class="d-inline-block align-text-center">
        Quaza
      </span>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link active Navlink">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/Gallery" class="nav-link active Navlink" aria-current="page" href="./Gallery.html">Gallery</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/Music" class="nav-link active Navlink">Music</RouterLink>
          </li>
        </ul>
        <div class="d-flex align-items-center">
          <a class="d-flex p-1" href="https://github.com/Quazawaza">
            <img :src="githubSrc" alt="github" draggable="false" />
          </a>
          <a class="d-flex p-1" href="https://twitter.com/Quaza_azauQ">
            <img :src="twitterSrc" alt="twitter" draggable="false" />
          </a>
          <a class="d-flex p-1" href="https://steamcommunity.com/profiles/76561198974421009/">
            <img :src="steamSrc" alt="Steam" draggable="false" />
          </a>
          <a class="d-flex p-1 " href="https://t.me/Quaza_OwO">
            <img :src="telegramSrc" alt="Telegram" draggable="false" />
          </a>
          <a class="d-flex p-1" href="https://open.spotify.com/user/izxbjcsvywr7okqb95k7hffl8">
            <img :src="spotifySrc" alt="Spotify" draggable="false" />
          </a>
          <a class="d-flex p-1" href="https://www.reddit.com/user/quazawaza_2137">
            <img :src="redditSrc" alt="reddit" draggable="false" />
          </a>
          <a class="d-flex p-1" href="https://www.youtube.com/channel/UCNW2fiGEZb1nRrG7FZaAp1A">
                <img :src="youtubeSrc" alt="Youtybe" draggable="false" />
          </a>
          <a class="d-flex p-1" href="https://www.last.fm/pl/user/Quaza_0111">
                <img :src="lastfmSrc" alt="lastfm" draggable="false" />
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<style>
.Navlink {
  transition: 0.1s ease-out;
}
.Navlink:hover {
  font-weight: bold;
  text-shadow: 0 0 5px white, 0 0 10px white, 0 0 15px white;
}
</style>