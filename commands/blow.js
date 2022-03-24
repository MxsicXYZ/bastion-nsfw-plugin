/*!
 * @plugin bastion-nsfw-plugin
 * @author Xanathero (@Xynnix)
 * @license MIT
 */

"use strict";

const tesseract = require("@bastion/tesseract");
const fetch = require("node-fetch");

class animeBoobsCommandPlugin extends tesseract.Command {
    constructor() {
        super("blow", {
            description: "Lets you gif oral to a member~",
            triggers: [ "suck", "blowOff", "oral" ],
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
        const user = message.mentions.members;
        if (user.size < 1) return message.channel.send(`Please use the --help option with this command to see proper arguments!`)
        await fetch("https://ahni.dev/nsfw/?blow")
                .then(res => res.json())
                .then(json =>{
        message.channel.send({embed: { description: `${message.author} gives a blowjob to ${user.first()}~`, image: { url: json }}}).catch(err =>{ console.log(err.message)});
        })
    }
}

module.exports = animeBoobsCommandPlugin;
