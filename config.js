﻿
        module.exports = {
            bot: {
                token: "",
                prefix: "",
                owners: [""],
                mongourl: "",
                servers: {
                    token: "",
                    prefix: ""
                }
            },
        
            website: {
                callback: "https://your.domain.com/callback",
                secret: "", // bot client secrect
                clientID: "", // bot id
                tags: [ "Moderation", "Fun", "Minecraft","Economy","Guard","Anime","Invite","Music","Logging", "Web Dashboard", "Reddit", "Youtube", "Twitch", "Crypto", "Leveling", "Game", "Roleplay", "Utility", "Turkish" ],
                languages: [
                    { flag: 'gb', code: 'en', name: 'English' },
                    { flag: 'tr', code: 'tr', name: 'Türkçe' },
                    { flag: 'de', code: 'de', name: 'Deutsch' }
                ],
                servers: {
                    tags: [
                    {
                        icon: "fal fa-code",
                        name: "Development"
                    },
                    {
                        icon: "fal fa-play",
                        name: "Stream"
                    },
                    {
                        icon: "fal fa-camera",
                        name: "Media"
                    },
                    {
                        icon: 'fal fa-building',
                        name: 'Company'
                    },
                    {
                        icon: 'fal fa-gamepad',
                        name: 'Game'
                    },
                    {
                        icon: 'fal fa-icons',
                        name: 'Emoji'
                    },
                    {
                        icon: 'fal fa-robot',
                        name: 'Bot List'
                    },
                    {
                        icon: 'fal fa-server',
                        name: 'Server List'
                    },
                    {
                        icon: 'fal fa-moon-stars',
                        name: 'Turkish'
                    },
                    {
                        icon: 'fab fa-discord',
                        name: 'Support'
                    },
                    {
                        icon: 'fal fa-volume',
                        name: 'Sound'
                    },
                    {
                        icon: 'fal fa-comments',
                        name: 'Chatting'
                    },
                    {
                      icon: "fal fa-comment-slash",
                      name: "Challange"
                    },
                    {
                      icon: "fal fa-hand-rock",
                      name: "Protest"
                    },
                    {
                      icon: "fal fa-headphones-alt",
                      name: "Roleplay"
                    },
                    {
                      icon: "fal fa-grin-alt",
                      name: "Meme"
                    },
                    {
                      icon: "fal fa-shopping-cart",
                      name: "Shop"
                    },
                    {
                      icon: "fal fa-desktop",
                      name: "Technology"
                    },
                    {
                      icon: "fal fa-laugh",
                      name: "Fun"
                    },
                    {
                      icon: "fal fa-share-alt",
                      name: "Social"
                    },
                    {
                      icon: "fal fa-laptop",
                      name: "E-Spor"
                    },
                    {
                      icon: 'fal fa-palette',
                      name: 'Design'
                    },
                    {
                      icon: 'fal fa-users',
                      name: 'Community'
                    }
                    ]                
                }
            },
        
            server: {
                id: "",
                invite: "https://discord.gg/CqgCUE2Dsf",
                roles: {
                    administrator: "",
                    moderator: "",
                    profile: {
                        sitecreator : "",
                        booster: "",
                        sponsor: "",
                        supporter: "",
                        partnerRole: ""
                    },
                    codeshare: {
                        javascript: "",
                        html: "",
                        substructure: "",
                        bdfd: "", 
                        fiveInvite: "",
                        tenInvite: "",
                        fifteenInvite: "",
                        twentyInvite: ""
                    },
                    botlist: {
                        developer: "",
                        certified_developer: "",
                        bot: "",
                        certified_bot: "",
                    }
                },
                channels: {
                    codelog: "",
                    login: "",
                    webstatus: "",
                    uptimelog: "",
                    botlog: "",
                    votes: ""
                }
            }
        
        
        }
