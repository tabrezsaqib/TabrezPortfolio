import shopifyThumbnail from "../assets/projects/Shopify.png"
import dogThumbnail from "../assets/projects/Dog.png"
import todoThumbnail from "../assets/projects/to-do.png"
import plantsThumbnail from "../assets/projects/NBPlants.png"
import wildrydeThumbnail from "../assets/projects/WildRyde.jpg"
import numbergameThumbnail from "../assets/projects/2048.jpg"
import trekmapThumbnail from "../assets/projects/trekmap.jpg"

export const projects = [
  {
    title: "NB Plants Website",
    thumbnail: plantsThumbnail,
    info: "A graphic user interface for the Fredericton Botanical Garden Association using React.js, Next.js and WordPress to display the plants of New Brunswick and deployed them using Azure Pipelines.",
    codeLink: "https://github.com/tabrezsaqib/NBplantsBackup.git",
    liveLink: "https://newbrunswickplants.ca/",
  },
  {
    title: "Trekking Maps App",
    thumbnail: trekmapThumbnail,
    info: "A trekking maps app of the regional parks walking trails app that automates the deployment and configuration of this server using Nginx on a group of Ubuntu servers."
  },
  {
    title: "2048 Game",
    thumbnail: numbergameThumbnail,
    info: "A responsive 2048 number game with the utilization of Dockerfile and docker containers, deployed on AWS Elastic Beanstalk."
  },
  {
    title: "Wild Ryde App",
    thumbnail: wildrydeThumbnail,
    info: "A ride-sharing app built using different services such as VCS, Amplify, Cognito, Lambda, API Gateway and Dynamo DB."
  },
];
