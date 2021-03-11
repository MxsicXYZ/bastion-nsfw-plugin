/*!
 * @plugin bastion-example-plugin
 * @author Sankarsan Kampa (k3rn31p4nic)
 * @license MIT
 */

"use strict";

const tesseract = require("@bastion/tesseract");
const fetch = ("node-fetch");

class buttsCommandPlugin extends tesseract.Command {
    constructor() {
        super("butts", {
            description: "Sends an NSFW image into the channel",
            triggers: [ "butt", "booty" ],
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
        const { body } = await fetch.get("https://lewds.ga/v1/nsfw/ass")
        message.channel.send(body.result);
        console.log("COMMAND: ", this);
        console.log("MESSAGE: ", message);
        console.log("ARGUMENTS: ", argv);
    }
}

module.exports = ExampleCommandPlugin;
