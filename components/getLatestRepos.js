import axios from "axios";

const getLatestRepos = async (data) => {
  console.log("data", data);
  try {
    const username = data.githubUsername;

    const res = await axios.get(
      `https://api.github.com/search/repositories?q=user:${joelchua2403}+sort:author-date-asc`
    );

    let repos = res.data.items;
    console.log("repos", repos);
    let latestSixRepos = repos.splice(0, 6);
    return latestSixRepos;
  } catch (err) {
    console.log(err);
  }
};

export default getLatestRepos;