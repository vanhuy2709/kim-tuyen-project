import "./Resume.scss";

const Resume = () => {
  return (
    <div className="wrapper">
      <div className="resume">
        <div className="resume__left">
          <p>
            Given that Anthony grew up in Chicago rooting for sports legends
            like MICHAEL JORDAN and WALTER PAYTON that’s no surprise.
          </p>
          <p>
            Anthony brings that competitive spirit to his branding and design
            work, leading to shelves full of awards, and being listed in Web
            Designer Magazine's “HOT 100” list twice.
          </p>
          <p>
            Case in point: Anthony's recent work for tech startup Motiv won a
            WEBBY AWARD and helped generate the company's first thousand sales
            with almost zero advertising.
          </p>
          <p>
            In addition to helping clients like ESPN and Netflix rise to victory
            against their competitors, Anthony shares his passion with future
            design professionals, leading creative workshops at USC’S Annenberg
            Digital Lounge, serving on the board of AIGA Los Angeles and as an
            expert panelist for the annual GlobalTrend Marketing Awards.
          </p>
        </div>
        <div className="resume__right">
          <ul className="education">
            <li className="education--title">EDUCATION</li>
            <li className="education--content">
              WOODBURY UNIVERSITY
              <br />
              BFA GRAPHIC DESIGN, 2006
            </li>
          </ul>

          <ul className="experience">
            <li className="experience--title">EXPERIENCE</li>
            <li className="experience--content">
              PRINCIPAL, CREATIVE DIRECTOR
              <br />
              AD VICTOREM, 2017-
            </li>
            <li className="experience--content">
              CREATIVE DIRECTOR
              <br />
              AZUBU.TV, 2015-2017
            </li>
            <li className="experience--content">
              INDEPENDENT CREATIVE DIRECTOR
              <br />
              CONSENSUS INC., 2013-2015
            </li>
            <li className="experience--content">
              CREATIVE DIRECTOR
              <br />
              STARMEN DESIGN GROUP, 2008-2014
            </li>
            <li className="experience--content">
              MARKETING ART DIRECTOR
              <br />
              SOTHEBY’S REAL ESTATE, 2006-2008
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;
