/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

/*const multi = `Once upon a time,
In a land far far away,
there lived a witch,
who could change night into day`
console.log(multi)


let a = prompt("first number");
let b = prompt("second number");

function multiply(a, b) {
  return a * b
}

let answer = multiply(a, b)
console.log(answer)

document.write("you answer is " + answer + " ! <br>");
*/
console.log("Hello from the Web App Dev 1 lab!");

const greenbtn = document.querySelector(".green");

greenbtn &&
  greenbtn.addEventListener("click", () => alert("Thanks! You're okay too"));

const bluebtn = document.querySelector(".blue");

bluebtn &&
  bluebtn.addEventListener("click", () => {
    let readMoreDiv = document.querySelector("#readmore");
    if (readMoreDiv.style.display === "block") {
      readMoreDiv.style.display = "none";
    } else {
      readMoreDiv.style.display = "block";
    }
  });

const redbtn = document.querySelector(".red");

const welcomeUserDiv = document.querySelector("#welcomeuser");

redbtn &&
  redbtn.addEventListener("click", () => {
    let username = prompt("What's your name?");
    welcomeUserDiv.style.display = "block";
    document.querySelector("#welcomeuser").innerHTML = `<p> Hello, ${username},
    looking forward to hearing your playlists! Click this message to close it.</p>`;
    welcomeUserDiv.style.cursor = "pointer";
  });

welcomeUserDiv &&
  welcomeUserDiv.addEventListener("click", (evt) => {
   // evt.currentTarget.style.display = "none";
    welcomeUserDiv.style.display = "none";
  });

const sonatas = {
  title: 'Beethoven Sonatas',
  songs: [
    {
      title: 'Piano Sonata No. 3',
      artist: 'Beethoven',
    },
    {
      title: 'Piano Sonata No. 7',
      artist: 'Beethoven',
    },
    {
      title: 'Piano Sonata No. 10',
      artist: 'Beethoven',
    },
    {
      title: 'Nocturne Op 9 No 2 (E Flat Major)',
      artist: 'Chopin',
    }
  ],
getRating() {
    let userRating = parseInt(prompt("Rate this collection (from 1 to 5 stars)"));
    if (userRating > 5 || userRating < 1 || isNaN(userRating)) {
      alert("Try again with a number between 1 and 5!");
    } 
    else {
      document.querySelector("#rating").innerHTML = `You gave a rating of: `;
    for (let i = 1; i <= userRating; i++) {
      document.querySelector("#rating").innerHTML += `<i class='yellow star icon'></i>`;
    }
  }
    }

};


$("#tableoutput").html(`<h2 class='ui header'> ${sonatas.title}</h2>`);
$("#tableoutput").append(
    `<table class='ui fixed striped table'><thead><tr><th>Song</th>
                 <th>Artist</th></tr>
     </thead>
     <tbody>`
);

for (let thesong of sonatas.songs) {
    $("#tableoutput tbody").append(
      `<tr><td>${thesong.title}</td><td>${thesong.artist}</td></tr>`);
}

$("#tableoutput").append(`</tbody></table>`);
$("#tableoutput").append(`<p><span id="rating"> </span></p>`);
$("#tableoutput").append(
    `<button class="ui blue button" id = "ratingbtn"> Rate it! 
            <i class="star icon"></i>
    </button>`
);

  let rbtn = $('#ratingbtn');
  rbtn.on('click', () => {
    sonatas.getRating();
  })

