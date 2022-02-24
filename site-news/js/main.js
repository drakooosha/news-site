import outCards from "./outCards.js";
import newsMainCardConfig from "./newsMainCardConfig.js";
import trensNewsCardConfig from "./trensNewsCardConfig.js";
import lastNewsCardConfig from './lastNewsCardConfig.js';

export function activeMainPage(fullNews) {
    outCards(fullNews, trensNewsCardConfig);
    outCards(fullNews, newsMainCardConfig);
    outCards(fullNews, lastNewsCardConfig);
}

