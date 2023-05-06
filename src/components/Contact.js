import { css } from "@emotion/react";

const Contact = () => {
  return (
    <div css={containerStyle}>
      <h2 css={headerStyle}>Contact</h2>
      <div css={infoContainerStyle}>
        <div css={infoItemStyle}>
          <span css={iconStyle}>
            <i className="fas fa-map-marker-alt"></i>
          </span>
          <span css={textStyle}>302 - 150 Leeward Glenway, North York, ON M3C 2Y9</span>
        </div>
        <div css={infoItemStyle}>
          <span css={iconStyle}>
            <i className="fas fa-envelope"></i>
          </span>
          <a href="mailto:arul00016@gmail.com" css={textStyle}>arul00016@gmail.com</a>
        </div>
        <div css={infoItemStyle}>
          <span css={iconStyle}>
            <i className="fas fa-phone"></i>
          </span>
          <a href="tel:+12262609520" css={textStyle}>(+1) 226-260-9520</a>
        </div>
        <div css={infoItemStyle}>
          <span css={iconStyle}>
            <i className="fab fa-github"></i>
          </span>
          <a href="https://github.com/arulpiruthiviraj" target="_blank" rel="noopener noreferrer" css={textStyle}>arulpiruthiviraj</a>
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

const iconStyle = css`
  font-size: 1.5rem;
  margin-right: 1rem;
`;

const textStyle = css`
  font-size: 1.2rem;
  color: #555;
  text-decoration: none;
`;

export default Contact;
