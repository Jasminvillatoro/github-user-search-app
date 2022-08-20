// DOM Elements
const form = document.getElementById('form');
const input = document.querySelector('#input');
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
  // Helper Function for date formating
  const dateFormater = () => {
    let dtFormat = new Intl.DateTimeFormat('en-Us', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });

    const date = new Date(data.created_at);
    const formatedDate = dtFormat.format(date);
    return formatedDate;
  };

  userImg.src = data.avatar_url === null ? 'Not Available' : data.avatar_url;
  actualName.innerText = data.name === null ? 'Not Available' : data.name;
  userName.innerText = data.login === null ? 'Not Available' : '@' + data.login;
  joinDate.innerText =
    data.created_at === null ? 'Not Available' : 'Joined ' + dateFormater();
  bio.innerText = data.bio === null ? 'Bio Not Available' : data.bio;
  reposAmount.innerText = data.public_repos;
  followersAmount.innerText =
    data.followers === null ? 'Not Available' : data.followers;
  followingAmount.innerText =
    data.following === null ? 'Not Available' : data.following;
  userLocation.innerText =
    data.location === null ? 'Not Available' : data.location;
  websiteLink.innerText =
    data.blog === ''
      ? 'Not Available'
      : data.blog.split('').splice(12).toString().replace(/,/g, '');
  websiteLink.href = data.blog === null ? 'Not Available' : data.blog;
  twitterLink.innerText =
    data.twitter_username === null ? 'Not Available' : data.twitter_username;
  company.innerText = data.company === null ? 'Not Available' : data.company;
};

const invalidUser = () => {
  userImg.style.display = 'none';
  actualName.innerText = 'User Not Found';
  userName.innerText = '';
  joinDate.innerText = '';
  reposAmount.innerText = '';
  followersAmount.innerText = '';
  followingAmount.innerText = '';
  userLocation.innerText = '';
  websiteLink.innerText = '';
  twitterLink.innerText = '';
  company.innerText = '';
};

const getUser = (username) => {
  fetch(`https://api.github.com/users/${username}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      renderUserData(data);
    })
    .catch((err) => {
      console.log(`${err} ' User Not Found'`);
      invalidUser();
    });
};

window.onload = () => {
  getUser('octocat');
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  // console.log(input);
  const username = input.value;
  getUser(username);
});
