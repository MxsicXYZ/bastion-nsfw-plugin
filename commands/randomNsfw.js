/*!
 * @plugin bastion-nsfw-plugin
 * @author Xanathero (@Xynnix)
 * @license MIT
 */

"use strict";

const tesseract = require("@bastion/tesseract");
const fetch = require("node-fetch");

class randomNsfwCommandPlugin extends tesseract.Command {
    constructor() {
        super("randomNsfw", {
            description: "Sends a random NSFW image into the channel",
            triggers: [],
            arguments: {},
            scope: "guild",
            owner: false,
            typing: true,
            schedulable: true,
            unsafe: false,
            nsfw: true,
            cooldown: 5,
            ratelimit: 1,
            clientPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
            userPermissions: [],
            syntax: ["@userMention", "userId"],
            condition: () => true,
        });
    }

    exec = async (message, argv) => {
        const list = ["ass","assgif","athighs","bbw","bdsm","blow","boobs","feet","furfuta","furgif","futa","gifs","hboobs","hentai","hfeet","irlfemb","jackopose","kink","milk","pantsu","sex","slime","thighs","trap","yuri"];
        const end = list[Math.floor((Math.random() * list.length))];
                await fetch("https://api.lewds.fun/api/nsfw/"+end)
                .then(res => res.json())
                .then(json =>{
        message.channel.send({embed: { image: { url: json.url }}});
        })
    }
}

module.exports = randomNsfwCommandPlugin;
