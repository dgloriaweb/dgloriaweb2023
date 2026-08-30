import axios from 'axios';

export async function loadPortfolioTabs() {
  const { data } = await axios.get('/data/portfolio-tabs.json');
  return data;
}
