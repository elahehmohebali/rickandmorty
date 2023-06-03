import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Grid, Pagination, Box, IconButton, Card, CardHeader, CardMedia, CardContent, CardActions, Chip, Divider } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import { Info as InfoIcon } from '@mui/icons-material';
import { CharacterListQuery } from '../../generated/graphql';

interface Props {
  data: CharacterListQuery;
  page: number;
  onChangePage: (page: number) => void;
}

const CharacterList: React.FC<Props> = ({ data, page, onChangePage }) => {
  const navTo = useNavigate();
  return (
    <div className="CharacterList">
      <Typography textAlign="center" variant="h4">Rick And Morty Characters</Typography>
      <Divider style={{margin:'16px 0 0 0'}} /> 
      <Box sx={{ flexGrow: 1 }}>
        <Grid container rowSpacing={3} justifyContent="center" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{ padding: '24px' }}>
          {!!data.characters &&
            !!data.characters.results &&
            data.characters.results.map((character, i) => (
            (!!character ?
              <Grid item xs={2} sm={4} md={4} key={i}>
                <Card>
                  <CardHeader title={character.name} style={{ background: deepPurple[500], color: 'white' }} />
                  <CardMedia component="img" image={character.image || ''} alt={character.name || ''} />
                  <CardActions>
                    <Grid container spacing={0} alignItems="center">
                      <Grid item xs="auto"><Chip color="success" label={character.status} style={{ borderRadius: '4px' }} /></Grid>
                      <Grid item flexGrow="1"></Grid>
                      <Grid item xs="auto"><IconButton onClick={() => { navTo(`/character/${character.id}`) }}><InfoIcon /></IconButton></Grid>
                    </Grid>
                  </CardActions>
                </Card>
              </Grid>
            :'')
          ))}
        </Grid>
      </Box>
      <Card>
        <CardContent>
          <Grid container justifyContent="center">
            <Pagination count={data.characters?.info?.pages || 1} page={page} onChange={(e, page) => onChangePage(page)} color="secondary" />
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}

export default CharacterList;