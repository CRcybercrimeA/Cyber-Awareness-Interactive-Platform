const axios = require("axios");
const { GOOGLE_SAFE_BROWSING_API_KEY } = require("../config/env");

async function checkReputation(url) {
  if (!GOOGLE_SAFE_BROWSING_API_KEY) {
    return {
      reputation: "Unknown",
      flagged: false
    };
  }

  const endpoint = `https://safebrowsing.googleapis.com/v4/threatMatches:find?key=${GOOGLE_SAFE_BROWSING_API_KEY}`;

  const payload = {
    client: {
      clientId: "cyber-awareness-platform",
      clientVersion: "1.0.0"
    },
    threatInfo: {
      threatTypes: [
        "MALWARE",
        "SOCIAL_ENGINEERING",
        "UNWANTED_SOFTWARE",
        "POTENTIALLY_HARMFUL_APPLICATION"
      ],
      platformTypes: ["ANY_PLATFORM"],
      threatEntryTypes: ["URL"],
      threatEntries: [{ url }]
    }
  };

  try {
    const response = await axios.post(endpoint, payload);
    const matches = response.data.matches || [];

    if (matches.length > 0) {
      return { reputation: "Flagged", flagged: true };
    }

    return { reputation: "Trusted", flagged: false };
  } catch (error) {
    return { reputation: "Unknown", flagged: false };
  }
}

module.exports = { checkReputation };