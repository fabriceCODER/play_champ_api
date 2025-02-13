import axios from "axios";

const IGDB_BASE_URL = "https://api.igdb.com/v4/games";
const CLIENT_ID = process.env.TWITCH_CLIENT_ID;
const ACCESS_TOKEN = process.env.TWITCH_ACCESS_TOKEN;

export const fetchRealWorldGames = async (req, res) => {
    try {
        const response = await axios.post(
            IGDB_BASE_URL,
            `fields name, genres.name, platforms.name, first_release_date, summary;
       limit 10; sort first_release_date desc;`,
            {
                headers: {
                    "Client-ID": CLIENT_ID,
                    Authorization: `Bearer ${ACCESS_TOKEN}`,
                },
            }
        );

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: "Error fetching games", error: error.message });
    }
};
