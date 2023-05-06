import React from 'react';
import {
  Grid,
  Typography,
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Button,
  Link,
} from '@mui/material';

const PROJECTS_DATA = [
  {
    name: 'WeTech Alliance Chatbot',
    description:
      'Created a chatbot for wetech alliance as part of google developer challenge 2020 competition to automate the conversations and enhance user engagement with Wetech alliance.',
    technologies: ['NodeJS', 'DiagFlow', 'Google Cloud', 'Firebase'],
    link: 'https://github.com/arulpiruthiviraj/WeTech-Alliance-Chatbot',
  },
  {
    name: 'Dev_Socialsite open-Source web app',
    description:
      'Open-source app to connect all the developers so developers work together, everyone is able to plan more effectively and share their ideas with others. The app mainly focus on the developers opensource contributions thus it’s have been connected with github’s api so the users data updated lively.',
    technologies: ['React', 'Redux', 'NodeJS', 'MongoDB', 'ExpressJS'],
    link: 'https://github.com/arulpiruthiviraj/dev_socialsite',
  },
  {
    name: 'Event Scheduler',
    description:
      'A web application built using MERN stack to create and manage events. Users can sign up, create events, invite other users and manage their events.',
    technologies: ['React', 'NodeJS', 'ExpressJS', 'MongoDB'],
    link: 'https://github.com/Arulpiruthiviraj/eventScheduler',
  },
  {
    name: 'Clothing Store',
    description:
      'An e-commerce website built using React, Redux and Firebase. Allows users to browse and purchase clothing items.',
    technologies: ['React', 'Redux', 'Firebase'],
    link: 'https://github.com/Arulpiruthiviraj/clothing-store',
  },
  {
    name: 'Institution Finder',
    description:
      'A web application that helps users find and review institutions. Users can search for institutions, view details about them, and add reviews and ratings.',
    technologies: ['React', 'NodeJS', 'ExpressJS', 'MongoDB'],
    link: 'https://github.com/Arulpiruthiviraj/InstitutionFinder',
  },
  {
    name: 'Movie Nominator',
    description:
      'A web application built using React that allows users to search for and nominate their favourite movies. Users can add and remove nominations and view a list of their nominations.',
    technologies: ['React', 'OMDb API'],
    link: 'https://github.com/Arulpiruthiviraj/movie_nominator',
  },
  {
    name: 'Craiglist Clone',
    description:
      'A clone of the popular classifieds website Craigslist built using Django.',
    technologies: ['Python', 'Django'],
    link: 'https://github.com/Arulpiruthiviraj/craiglist_clone',
  },
  {
    name: 'Blog with Node.js',
    description:
      'A simple blog application built using Node.js and MongoDB. Users can create and view blog posts.',
    technologies: ['NodeJS', 'ExpressJS', 'MongoDB'],
    link: 'https://github.com/Arulpiruthiviraj/blog_nodejs',
  },
  {
    name: 'Video Hook App',
    description:
      'A video calling application built using React, Firebase and WebRTC. Allows users to make video calls with other users.',
    technologies: ['React', 'Firebase', 'WebRTC'],
    link: 'https://github.com/Arulpiruthiviraj/video_hook_app',
  }]


const Projects = () => {
  return (
    <Box sx={{ py: 6 }}>
      <Typography variant='h3' align='center' sx={{ mb: 3 }}>
        Projects
      </Typography>
      <Grid container spacing={2}>
        {PROJECTS_DATA.map((project) => (
          <Grid item xs={12} md={6} key={project.name}>
            <Card sx={{ height: '100%' }}>
              <CardActionArea
                href={project.link}
                target='_blank'
                rel='noopener noreferrer'
              >
                <CardMedia
                  component='img'
                  image={`${project.name}.png`}
                  alt={project.name}
                />
                <CardContent>
                  <Typography variant='h5'>{project.name}</Typography>
                  <Typography
                    variant='body2'
                    color='text.secondary'
                    sx={{ mt: 2 }}
                  >
                    {project.description}
                  </Typography>
                  <Typography
                    variant='subtitle2'
                    color='text.secondary'
                    sx={{ mt: 2 }}
                  >
                    Technologies used: {project.technologies.join(', ')}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
