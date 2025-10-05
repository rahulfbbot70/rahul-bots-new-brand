// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;

global.session = "https://ali-pair-xode.onrender.com"; 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ALI-MD~H4sIAAAAAAAAA5VUy46jRhT9lai2tsbGgLEttRTA+I2Njc2jo1mUocDVQIGhsMGj3ibKLlKvO6Mos8komyyiKIvMx/QX+BMi3N0zs0gmHVZF1dW5595z7n0DSIwzNEUl6L0BSYoPkKLqSMsEgR6Qcs9DKagDF1IIemAxoTt2bhjJzZrtZmGjYRgL43iqSdLU7/KNjhFGETWn8nzDXYHbOkjybYidLwBOioCxJvxQdMnCPIyVSFddRpcMablMWLXr+3Fm54GUX/vHK3BbIUKcYuIryQ5FKIXhFJUaxOnL6PsS194PluJkfBRyVTl4i5DNMeFZtpkfIdvKaG4kTlpOBy+kj4NRbJp6Fyuj1oTuOG4cFLo8kdeHWS6FCl/grZDN+JCwwSP9DPsEuWMXEYpp+eK+B8Ng7A9U6nmhUetbkRalenCab+ea3Tpkcadce7aUrBvuS4kLW7+z1vLBYd4szcCRyKHlXlu8ZZf9JSvW1Otay58J+YIMl58T19JnrwT/p+9l3wxHjXl4rVonv30tT9GQLoNYuh7YgWFOmzCX+aLPWXoUv4z+LBkFnk/idVqosxhOBOTO2aVX8nlBNcWPLd+bNwMcxFbzE31I8/RLLLfkYCQyc6ytrN2uEzYabbbtr1yBwEy+SQthPJ4N4936lF9vTGjBzSTkPNu2j4NaXC5FfRxvNb5z3EqD/nASDTnpBssMFq8uFQWoHLugx9zWQYp8nNEUUhyTy12zUwfQPejISRG9tBdIHKZKIm06N2hDyUbj5CnnbP3TUWBaMG7za0UQi5WIV0P7CtRBksYOyjLkjnBG47RUUZZBH2Wg983rOiCooI/CVelYpg48nGZ0Q/IkjKH7rOrzI3ScOCdUL4kjVweUgl7z0zWiFBM/q/qYE5g6O3xA8g7SDPQ8GGboY4UoRS7o0TRHH6dWjt2q8ZwqDGXWlEAdRBdBsAt6oMsITUZo812mxfXaza+zV8cKFibJK4IoqIPwEsZ0mQ7fYttsl2+3hHYVWT3UAYEVGHh49+Hhx/uvzvd3P53v796f7+9+O9/ffTjf3/3+8O2vD+/+PL/94fvz21/+OL99/9fDdz9X6jzVVlFxEYU4zEAPyLMac1SVkbIwQ6w6w6Go+KLsi+BTL55N9SjajYoYBgVFsjlSZlszbZRQK9Z1sRixpWtsZDfVfBw33cK/+gcQ0AMbm6GLNC6IlhUHTRfMCXKs9X4V7DrRLrJWQ8bQuwu3ObDniHWOyVij6X4jKydmP1nsio7VEDaRYddMxT5Mj2x7aov9fuXAOnDRATvo82RdlREYzc41V8oa0n5QM5vrKBgS2B9PC85miUK2hNGNxXEmDDZwmWaThX3Yqpv9zjeaRbbq891hgWRPlJGCp0zii97N8tHul3ELn9YcvhixUrn69TC6bI0nuf5T9UfilTmbt/XPMJ720L/MsmSfRtS1EhUa6sw1G2E02m+NthL46qrbIYYhEnjixvv5yLHB7e3rOkhCSL04jUAPQOKm8cVTaZxXbh8TL/5CMlkcjxX/sfIQZlT8NEFrHKGMwigBPUbgu22uzXHNxygtjZMRzHYVAOdN5tU0lGKS6BTS53kEYvVN1j64/RuUto1tqwcAAA==", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by ALI-MD", // // Input Yours custom...
MODE: process.env.MODE || "public", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "917017659124", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "𝓡𝓪𝓱𝓾𝓵^᪲᪲᪲ 輪", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "6.5.0",
ANTILINK: process.env.ANTILINK || "false", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*📞 ᴄαℓℓ ɴσт αℓℓσωє∂ ιɴ тнιѕ ɴᴜмвєʀ уσυ ∂σɴт нανє ᴘєʀмιѕѕισɴ 📵*",
AUTO_REACT: process.env.AUTO_REACT || "false",
OWNER_REACT: process.env.OWNER_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "𓆩ု᪳𝐀ɭīī 𝐌Ɗှ᪳𓆪", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://files.catbox.moe/2ka956.jpg", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "ALI MD ALIVE",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
//not working for the moment do don't on it
GOODBYE: process.env.GOODBYE || "false", //not working for the moment do don't on it
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Asia/Karachi", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
