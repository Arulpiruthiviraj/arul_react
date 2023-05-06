import { css } from '@emotion/react';
import { Typography, List, ListItem, ListItemText } from '@mui/material';

const styles = {
  heading: css`
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 16px;
  `,
  companyName: css`
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 8px;
  `,
  timePeriod: css`
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 16px;
  `,
  responsibilities: css`
    font-size: 16px;
    margin-bottom: 24px;
  `,
};

const Experience = () => {
  return (
    <div>
      <Typography variant='h2' css={styles.heading}>
        EXPERIENCE
      </Typography>
      <div>
        <List>
          <ListItem disableGutters>
            <ListItemText
              primary={
                <>
                  <Typography component='span' css={styles.companyName}>
                    TD Bank | IT Developer III
                  </Typography>
                  <Typography component='span' css={styles.timePeriod}>
                    Jan 2022 – Present | Toronto, ON
                  </Typography>
                </>
              }
              secondary={
                <Typography component='ul' css={styles.responsibilities}>
                  <li>
                    Designed and implemented credit platform products for
                    mortgage applications, streamlining the underwriting process
                    for end users.
                  </li>
                  <li>
                    Developed calculation engines to be consumed by other
                    services.
                  </li>
                  <li>
                    Developed and maintained single-page applications using
                    Angular and NgRx for state management.
                  </li>
                  <li>
                    Ensured application's state remained predictable and
                    consistent with NgRx.
                  </li>
                  <li>
                    Utilized Angular components, directives, and services to
                    build responsive user interfaces.
                  </li>
                  <li>Technologies Used: Angular, Spring Boot, NgRx, React</li>
                </Typography>
              }
            />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText
              primary={
                <>
                  <Typography component='span' css={styles.companyName}>
                    DAVINCI RETAIL | Front End Developer
                  </Typography>
                  <Typography component='span' css={styles.timePeriod}>
                    Feb 2021 – Dec 2021 | Toronto, ON
                  </Typography>
                </>
              }
              secondary={
                <Typography component='ul' css={styles.responsibilities}>
                  <li>
                    Worked in a team to develop updated versions of Davinci
                    Retail's applications using React and maintained existing
                    applications developed with AngularJS and Angular.
                  </li>
                  <li>
                    Debugged and provided backend support tickets using the
                    Spring Boot framework.
                  </li>
                  <li>
                    Technologies Used: React, NextJS, Angular, Spring Boot
                  </li>
                </Typography>
              }
            />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText
              primary={
                <>
                  <Typography component='span' css={styles.companyName}>
                    MUQO APP | Application Developer (Internship)
                  </Typography>
                  <Typography component='span' css={styles.timePeriod}>
                    Sep 2020 – Jan 2021 | Toronto, ON
                  </Typography>
                </>
              }
              secondary={
                <Typography component='ul' css={styles.responsibilities}>
                  <li>
                    Developed a full-stack website for Muqo App's influencer as
                    the sole developer.
                  </li>
                  <li>
                    Created a public website for influencers and an admin panel
                    to view, change, and delete influencer accounts and their
                    associated data.
                  </li>
                  <li>
                    Implemented backend RESTful API using Express.js and
                    MongoDB.
                  </li>
                  <li>Developed the frontend using React, HTML, and CSS.</li>
                  <li>
                    Technologies Used: React, Express.js, MongoDB, HTML, CSS
                  </li>
                </Typography>
              }
            />
          </ListItem>
        </List>
      </div>
    </div>
  );
};

export default Experience;
