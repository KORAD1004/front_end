import axios from "axios";
import radiationMock from "../../assets/data/radiation.json";
import avgRadMock from "../../assets/data/avgRad.json";

const USE_MOCK = true;

export const fetchRecentRadiation = async () => {
    if (USE_MOCK) return radiationMock;
    const { data } = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/api/scrap/radiation/recent/avg`
      );
      return data;
}

export const fetchAvgRadiation = async () => {
    if (USE_MOCK) return avgRadMock;
    const { data } = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/api/scrap/radiation/average`
    );
    return data;
};