import React from 'react';
import { Grid, Typography, Box, LinearProgress } from '@mui/material';

const SKILLS_DATA = [
{ name: 'Angular', value: 90 },
{ name: 'React', value: 95 },
{ name: 'NodeJS', value: 90 },
{ name: 'Express', value: 85 },
{ name: 'MongoDB', value: 85 },
{ name: 'Laravel', value: 80 },
{ name: 'Django', value: 80 },
{ name: 'AWS', value: 80 },
{ name: 'Git', value: 90 },
{ name: 'Google Cloud', value: 80 },
{ name: 'Firebase', value: 80 },
{ name: 'Webpack', value: 80 },
{ name: 'TypeScript', value: 80 },
{ name: 'Java', value: 75 },
{ name: 'Spring Boot', value: 80 },
{ name: 'SQL', value: 80 },
{ name: 'C++', value: 75 },
{ name: 'C', value: 70 },
{ name: 'Python', value: 80 },
{ name: 'PHP', value: 85 },
{ name: 'HTML', value: 95 },
{ name: 'CSS', value: 90 }
];

const Skills = () => {
  return (
    <Box sx={{ py: 6 }}>
      <Typography variant="h3" align="center" sx={{ mb: 3 }}>
        Skills
      </Typography>
      <Grid container spacing={2}>
        {SKILLS_DATA.map((skill) => (
          <Grid item xs={12} sm={6} md={4} key={skill.name}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="subtitle1" sx={{ mr: 1 }}>
                {skill.name}
              </Typography>
              <LinearProgress variant="determinate" value={skill.value} sx={{ flex: 1 }} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
