import { Grid, GridItem, Box, Tag, HStack, LinkBox } from '@chakra-ui/react';

import { NavLink as ReachLink } from 'react-router-dom';

const ProjectsGroup = ({ projects }) => {
  const gridRwd = [
    'repeat(2, 1fr)',
    'repeat(2, 1fr)',
    'repeat(4, 1fr)',
    'repeat(6, 1fr)',
  ];

  return (
    <Grid w="100%" templateColumns={gridRwd} gap={4}>
      {projects &&
        projects.map((project, index) => (
          <GridItem key={index} colSpan={2}>
            <LinkBox
              href={project.href}
              as={ReachLink}
              to={`/${project.link}`}
              exact
            >
              <Box w="100%" my="12px">
                <Box
                  bg={`url('${project.img}')`}
                  h="280px"
                  w="100%"
                  bgRepeat="no-repeat"
                  bgPosition="center"
                  backgroundSize="cover"
                />
                <Box my="6px">{project.name}</Box>
                <Box>
                  <HStack>
                    {project.tag &&
                      project.tag.map((tag, index) => (
                        <Tag key={index} variant="outline">
                          {tag}
                        </Tag>
                      ))}
                  </HStack>
                </Box>
              </Box>
            </LinkBox>
          </GridItem>
        ))}
    </Grid>
  );
};

export default ProjectsGroup;
