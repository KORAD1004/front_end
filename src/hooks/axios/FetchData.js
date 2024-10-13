import axios from "axios";

export const fetchRecentRadiation = async () => {
    const { data } = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/api/scrap/radiation/recent/avg`
      );
      return data;
}

export const fetchAvgRadiation = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/api/scrap/radiation/average`
    );
    return data;
};