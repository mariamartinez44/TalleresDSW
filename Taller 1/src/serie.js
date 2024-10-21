"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Serie = void 0;
// Serie.ts
class Serie {
    constructor(id, title, channel, seasons, description, link, imageUrl) {
        this.id = id;
        this.title = title;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.link = link;
        this.imageUrl = imageUrl;
    }
    // Getters
    getId() {
        return this.id;
    }
    getTitle() {
        return this.title;
    }
    getChannel() {
        return this.channel;
    }
    getSeasons() {
        return this.seasons;
    }
    getDescription() {
        return this.description;
    }
    getLink() {
        return this.link;
    }
    getImage() {
        return this.imageUrl;
    }
}
exports.Serie = Serie;
