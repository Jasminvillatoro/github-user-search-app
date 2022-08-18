// DOM Elements
const userImg = document.getElementById('img');
const actualName = document.querySelector('.name');
const userName = document.querySelector('.user-name');
const joinDate = document.querySelector('.join-date');
const bio = document.querySelector('.bio');
const reposAmount = document.querySelector('.repos-amount');
const followersAmount = document.querySelector('.followers-amount');
const followingAmount = document.querySelector('.following-amount');
const userLocation = document.querySelector('.location');
const websiteLink = document.querySelector('.website-link');
const twitterLink = document.querySelector('.twitter-link');
const company = document.querySelector('.company');

const renderUserData = (data) => {
  userImg.src = data.avatar_url === null ? 'Not Available' : data.avatar_url;
  actualName.innerText = data.name === null ? 'Not Available' : data.name;
  userName.innerText = data.login === null ? 'Not Available' : '@' + data.login;
  joinDate.innerText =
    data.created_at === null ? 'Not Available' : data.created_at;
  bio.innerText = data.bio === null ? 'Bio Not Available' : data.bio;
  reposAmount.innerText = data.public_repos;
  followersAmount.innerText =
    data.followers === null ? 'Not Available' : data.followers;
  followingAmount.innerText =
    data.following === null ? 'Not Available' : data.following;
  userLocation.innerText =
    data.location === null ? 'Not Available' : data.location;
  websiteLink.href = data.blog === null ? 'Not Available' : data.blog;
  twitterLink.innerText =
    data.twitter_username === null ? 'Not Available' : data.twitter_username;
  company.innerText = data.company === null ? 'Not Available' : data.company;
};

fetch('https://api.github.com/users/jasminvillatoro')
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    renderUserData(data);
  });
