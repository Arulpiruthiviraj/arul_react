import { css } from "@emotion/react";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DescriptionIcon from "@mui/icons-material/Description";

const Contact = () => {
  const iconStyle = css`
    font-size: 1.5rem;
    margin-right: 1rem;
  `;

  return (
    <div css={containerStyle}>
      <h2 css={headerStyle}>Contact</h2>
      <div css={infoContainerStyle}>
        <div css={infoItemStyle}>
          <span css={iconStyle}>
            <MailIcon />
          </span>
          <a href="mailto:arul00016@gmail.com" css={textStyle}>
            arul00016@gmail.com
          </a>
        </div>
        <div css={infoItemStyle}>
          <span css={iconStyle}>
            <GitHubIcon />
          </span>
          <a
            href="https://github.com/arulpiruthiviraj"
            target="_blank"
            rel="noopener noreferrer"
            css={textStyle}
          >
            GitHub
          </a>
        </div>
        <div css={infoItemStyle}>
          <span css={iconStyle}>
            <LinkedInIcon />
          </span>
          <a
            href="https://www.linkedin.com/in/arulpiruthiviraj"
            target="_blank"
            rel="noopener noreferrer"
            css={textStyle}
          >
            LinkedIn
          </a>
        </div>
        <div css={infoItemStyle}>
          <span css={iconStyle}>
            <DescriptionIcon />
          </span>
          <a
            href="https://medium.com/@arulpiruthiviraj"
            target="_blank"
            rel="noopener noreferrer"
            css={textStyle}
          >
            Medium
          </a>
        </div>
      </div>
    </div>
  );
};

const containerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const headerStyle = css`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const infoContainerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const infoItemStyle = css`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const textStyle = css`
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
`;

export default Contact;