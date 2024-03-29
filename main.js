import "./style.css";
import cv from "/cv.json";

const app = document.querySelector("#app");

const skills = cv.skills
  .map((skill) => {
    return `
    <p>${skill}</p>
    `;
  })
  .join("");

const langues = cv.langues.map((lang) => {
  return;
  <p>${lang}</p>;
});

const experience = cv.experience.map((exp) => {
  return;
  <p>${exp}</p>;
});

app.innerHTML = `
<main>
      <h2 align="center">${cv.nom} ${cv.prenom}</h2>
      <div class="conteneur">
        <section class="cont-col-gauche">
          <figure class="avatar">
            <img
              src="./public/images/avatar.png"
              alt=""
              style="width: 100%; height: auto"
            />
          </figure>
          <div class="infocontact">
            <p>
              <i class="fa-solid fa-briefcase espace-icone"></i>${cv.metier}
            </p>
            <p><i class="fa-solid fa-location-dot espace-icone"></i>${cv.location}</p>
            <p>
              <i class="fa-solid fa-envelope espace-icone"></i>${cv.email}
            </p>
            <p><i class="fa-solid fa-phone espace-icone"></i>${cv.telephone}</p>
            <hr />
            <div class="skills">
              <h3 class="espace-titre">
                <i class="fa-solid fa-asterisk espace-icone icone-color"></i
                >Skills
              </h3>
              <p>HTML, HTML5</p>
              <div class="contprogress">
                <div class="progress" style="width: 90%">90%</div>
              </div>
              <p>CSS</p>
              <div class="contprogress">
                <div class="progress" style="width: 90%">90%</div>
              </div>
              <p>Javascript</p>
              <div class="contprogress">
                <div class="progress" style="width: 60%">60%</div>
              </div>
              <p>Adobe Photoshop</p>
              <div class="contprogress">
                <div class="progress" style="width: 85%">85%</div>
              </div>
              <p>Adobe Illustrator</p>
              <div class="contprogress">
                <div class="progress" style="width: 70%">70%</div>
              </div>
              <p>Word Press</p>
              <div class="contprogress">
                <div class="progress" style="width: 65%">65%</div>
              </div>
            </div>
            <br />
            <hr />
            <div class="Langue">
              <h3 class="espace-titre">
                <i class="fa-solid espace-icone icone-color fa-globe"></i
                >Language
              </h3>
              <p>Français</p>
              <div class="contprogress">
                <div class="progress" style="width: 90%">&nbsp;</div>
              </div>
              <p>Néerlandais</p>
              <div class="contprogress">
                <div class="progress" style="width: 80%">&nbsp;</div>
              </div>
              <p>Anglais</p>
              <div class="contprogress">
                <div class="progress" style="width: 65%">&nbsp;</div>
              </div>
              <p>Allemand</p>
              <div class="contprogress">
                <div class="progress" style="width: 50%">&nbsp;</div>
              </div>
            </div>
          </div>
        </section>
        <div class="cont-col-droite">
          <section class="work-experience">
            <h2><i class="fa-sharp fa-solid fa-hammer"></i>Work Experience</h2>
            <br />
            <h3>Boulot</h3>
            <h4>
              <i class="fa-solid fa-calendar-days"></i> Oct 2020 - Current
            </h4>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae, ultricies eget, tempor sit amet, ante. Donec eu libero
            </p>
            <br />
            <h3>Boulot</h3>
            <h4>
              <i class="fa-solid fa-calendar-days"></i> Oct 2020 - Current
            </h4>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae, ultricies eget, tempor sit amet, ante. Donec eu libero
            </p>
            <br />
            <h3>Boulot</h3>
            <h4>
              <i class="fa-solid fa-calendar-days"></i> Oct 2020 - Current
            </h4>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae, ultricies eget, tempor sit amet, ante. Donec eu libero
            </p>
            <br />
          </section>
          <hr />
          <br />
          <section class="education">
            <h2><i class="fa-solid fa-school"></i>Education</h2>
            <br />
            <h3>CESS</h3>
          </section>
        </div>
      </div>
    </main>
`;
