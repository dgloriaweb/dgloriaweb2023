import axios from 'axios';

export async function loadProjects() {
  const { data } = await axios.get('/data/projects.json');
  return data;
}
