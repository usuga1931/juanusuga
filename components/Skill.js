import Link from "next/link";

const items = [
  {
    id: 1,
    name: "JavaScript",
    image: "assets/images/skills/javascript.png",
    value: "95",
  },
  {
    id: 2,
    name: "React",
    image: "assets/images/skills/react.png",
    value: "92",
  },
  {
    id: 3,
    name: "HTML5",
    image: "assets/images/skills/html5.png",
    value: "93",
  },
  {
    id: 4,
    name: "jQuery",
    image: "assets/images/skills/jquery.png",
    value: "97",
  },
  {
    id: 5,
    name: "CSS3",
    image: "assets/images/skills/css3.png",
    value: "86",
  },
  {
    id: 6,
    name: "Jira",
    image: "assets/images/skills/jira.png",
    value: "62",
  },
  {
    id: 7,
    name: "PHP",
    image: "assets/images/skills/php.png",
    value: "94",
  },
  {
    id: 8,
    name: "Laravel",
    image: "assets/images/skills/laravel.png",
    value: "94",
  },
  {
    id: 9,
    name: "SASS",
    image: "assets/images/skills/sass.png",
    value: "94",
  },
  {
    id: 10,
    name: "TypeScript",
    image: "assets/images/skills/typescript.png",
    value: "94",
  },
  {
    id: 11,
    name: "Wordpress",
    image: "assets/images/skills/wordpress.png",
    value: "84",
  },
  {
    id: 12,
    name: "React Native",
    image: "assets/images/skills/react.png",
    value: "94",
  },
  {
    id: 13,
    name: "WooCommerce",
    image: "assets/images/skills/woocommerce.png",
    value: "94",
  },
  {
    id: 14,
    name: "cypress",
    image: "assets/images/skills/Cypress.png",
    value: "94",
  },
  {
    id: 15,
    name: "MySQL",
    image: "assets/images/skills/mysql.png",
    value: "94",
  },
  {
    id: 16,
    name: "Node.js",
    image: "assets/images/skills/nodejs.png",
    value: "94",
  },
  {
    id: 17,
    name: "Git",
    image: "assets/images/skills/git.png",
    value: "94",
  },
  {
    id: 18,
    name: "PostgreSQL",
    image: "assets/images/skills/postgresql.png",
    value: "94",
  },
  {
    id: 19,
    name: "Docker",
    image: "assets/images/skills/docker.png",
    value: "94",
  },
  {
    id: 20,
    name: "Bootstrap",
    image: "assets/images/skills/bootstrap.png",
    value: "94",
  },
  {
    id: 21,
    name: "ClickUp",
    image: "assets/images/skills/clickup.png",
    value: "94",
  },
  {
    id: 22,
    name: "Linux",
    image: "assets/images/skills/linux.png",
    value: "94",
  },
  {
    id: 23,
    name: "Redux",
    image: "assets/images/skills/redux.png",
    value: "94",
  },
  {
    id: 24,
    name: "Scrum",
    image: "assets/images/skills/scrum.png",
    value: "94",
  },
];

const Skill = () => {
  return (
    <section id="skills" className="skill-area rel z-1">
      <div className="for-bgc-black pt-130 rpt-100 pb-100 rpb-70">
        <div className="container">
          <div className="row gap-100">
            <div className="col-12">
              <div className="skill-content-part rel z-2 rmb-55 wow fadeInUp delay-0-2s">
                <div className="section-title mb-40">
                  <h2>
                    <span>My </span>Skills
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="skill-items-wrap">
                <div className="row">
                  {items.map((item) => (
                    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-6">
                      <div className="skill-item wow fadeInUp delay-0-2s">
                        <img src={item.image} alt="Skill" />
                        <h5>{item.name}</h5>
                        <span className="percent">{item.value}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-lines">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </section>
  );
};
export default Skill;

export const Skill2 = () => {
  return (
    <section
      id="skills"
      className="skill-area-two rel z-1 pt-130 rpt-100 pb-105 rpb-70"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="skill-content-two rel z-2 rmb-55 wow fadeInUp delay-0-2s">
              <div className="section-title mb-60">
                <span className="sub-title mb-15">
                  <i className="flaticon-asterisk-1" /> professional skill of me
                </span>
                <h2>professional skill</h2>
              </div>
              <div className="row justify-content-between align-items-center">
                <div className="col-8">
                  <img src="assets/images/skills/skill-man.png" alt="Skill" />
                </div>
                <div className="col-4">
                  <img src="assets/images/shape/skill-arrow.png" alt="Arrow" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="skill-wrap-two">
              <div className="row gap-40">
                {items.map(
                  (item) =>
                    item.id <= 6 && (
                      <div className="col-md-4 col-sm-4 col-6" key={item.id}>
                        <div className="skill-item-two wow fadeInUp delay-0-3s">
                          <div className="icon-percent">
                            <img src={item.image} alt="Skill" />
                            <span className="percent">{item.value}%</span>
                          </div>
                          <h5 className="title">{item.name}</h5>
                        </div>
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-lines">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </section>
  );
};
