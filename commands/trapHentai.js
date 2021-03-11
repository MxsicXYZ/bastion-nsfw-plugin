/*!
 * @plugin bastion-nsfw-plugin
 * @author Xanathero (@Xynnix)
 * @license MIT
*/
"use strict";

const tesseract = require("@bastion/tesseract");
const fetch = require("node-fetch");

class trapHentaiCommandPlugin extends tesseract.Command {
    constructor() {
        super("slimeHentai", {
            description: "Sends an NSFW image into the channel",
            triggers: ["traps"],
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
        await fetch("https://lewds.ga/v1/nsfw/trap")
                .then(res => res.json())
                .then(json =>{
        message.channel.send(json.result);
        }
    }
}

module.exports = trapHentaiCommandPlugin;
