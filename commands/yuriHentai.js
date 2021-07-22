/*!
 * @plugin bastion-nsfw-plugin
 * @author Xanathero (@Xynnix)
 * @license MIT
*/
"use strict";

const tesseract = require("@bastion/tesseract");
const fetch = require("node-fetch");

class yuriHentaiCommandPlugin extends tesseract.Command {
    constructor() {
        super("yuriHentai", {
            description: "Sends an NSFW image into the channel",
            triggers: ["yuri"],
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
            syntax: [],
            condition: () => true,
        });
    }

    exec = async (message, argv) => {
        await fetch("https://api.lewds.fun/api/nsfw/yuri")
                .then(res => res.json())
                .then(json =>{
        message.channel.send({embed: { image: { url: json.result }}});
        })
    }
}

module.exports = yuriHentaiCommandPlugin;
