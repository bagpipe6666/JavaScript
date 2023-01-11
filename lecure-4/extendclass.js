class media {
    constructor(info) {
        this.publishDate = info.publishDate;
        this.name = info.name;
    }
}

class song extends media {
    constructor(songDate) {
        super(songDate);
        this.artist = songDate.artist;
    }
}

const mySong = new song({
    artist: "Queen",
    name: "Pirot",
    publishDate: 1978
});

console.log(mySong);