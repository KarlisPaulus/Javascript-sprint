function createLinks (teams) {

    // deletes existing list
    const existingList = document.getElementById("team-list-nav");
    if (existingList) {
        existingList.remove();
    }

    // unordered list
    const ul = document.createElement("ul");
    ul.id = "team-list-nav";
    ul.classList.add("team-links");
    document.body.append(ul);

    // creates list for all teams inputted
    teams.forEach(team => {
        const li = document.createElement("li");
        li.style.backgroundColor = team.primary;

        // creates anchor inside list
        const a = document.createElement("a");
        a.href = team.url
        a.style.color = team.secondary;
        a.textContent = team.name;

        // hovering with pointer
        li.addEventListener("mouseenter", () => {
            a.style.fontWeight = "bold";
        });

        li.addEventListener("mouseleave", () => {
            a.style.fontWeight = "normal";
        })

        // copy button, copies to clipboard
        const span = document.createElement("span");
        span.textContent = "[copy]"
        span.addEventListener("click", () => {
            navigator.clipboard.writeText(a.href);
        })
        
        li.appendChild(a);
        ul.appendChild(li);
        li.appendChild(span);
    });
    
}

/*
const teams = [
    {
      "name": "Brazil",
      "url": "https://en.wikipedia.org/wiki/Brazil_national_football_team",
      "primary": "#ffdf00",
      "secondary": "#009c3b"
    },
    {
      "name": "Netherlands",
      "url": "https://en.wikipedia.org/wiki/Netherlands_national_football_team",
      "primary": "#f36c21",
      "secondary": "#ffffff"
    }
  ]
  createLinks(teams);
*/