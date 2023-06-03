import * as React from 'react';
import { Typography,Avatar, Grid, Box, IconButton, Card, CardHeader, CardMedia, CardContent, CardActions, Chip, Divider } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import { Woman as WomanIcon, Man as ManIcon, Place as PlaceIcon , CalendarMonth, Public as PublicIcon} from '@mui/icons-material';
import { CharacterQuery } from '../../generated/graphql';

interface Props {
  data: CharacterQuery;
}

const Character: React.FC<Props> = ({ data }) => {
  return (
    <div className="Character">
        <Grid container rowSpacing={3} justifyContent="center" alignItems="center" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{ padding: '24px' }}>
            {!!data.character && !!data.character ?
            <Grid item xs={2} sm={4} md={4}>
                <Card style={{ background: deepPurple[50] }}>
                  <CardHeader title={
                    <Grid container spacing={0} alignItems="center">
                      <Grid item xs="auto"><Avatar sx={{ width: 64, height: 64 }} alt={data.character.name || ''} src={data.character.image || ''} /></Grid>
                      <Grid style={{paddingLeft:'10px'}} item xs="auto">
                        <Grid container alignItems="center">
                          <Grid display="flex" alignItems="center" item xs={12}>
                              <Typography variant="h5">{data.character?.name}</Typography>
                              <Chip color="success" size="small" variant="outlined" style={{margin:'2px 0 0 6px'}} label={data.character.status} />
                          </Grid>
                          <Grid item xs="auto">{ data.character.gender === 'Female' ?<WomanIcon fontSize="small"/> : <ManIcon fontSize="small"/>}</Grid>
                          <Grid item flexGrow={1}><Typography variant="body2">{data.character.gender}</Typography></Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    } 
                  />
                  <Divider></Divider>
                  <CardContent>
                    <Grid container spacing={0} alignItems="center">
                      <Grid item xs={12} marginBottom={2} display="flex" alignItems="center">
                        <PlaceIcon style={{ marginRight: '6px' }} />
                        <Typography variant="body2">Location: {data.character.location?.name}</Typography>
                      </Grid>
                      <Grid item xs={12} marginBottom={2} display="flex" alignItems="center">
                        <PublicIcon style={{ marginRight: '6px' }} />
                        <Typography variant="body2">Location Type: {data.character.location?.type}</Typography>
                      </Grid>
                      <Grid item xs={12} marginBottom={2} display="flex" alignItems="center">
                        <CalendarMonth style={{ marginRight: '6px' }} />
                        <Typography variant="body2">Created: {data.character.location?.created && (new Date(data.character.location?.created)).toLocaleDateString('en-GB', { dateStyle: 'full' })}</Typography>
                      </Grid>
                      <Grid item xs="auto"><Chip color="success" label={data.character.type || 'Unknown Type'} style={{ borderRadius: '4px', marginRight: '8px' }} /></Grid>
                      <Grid item xs="auto"><Chip color="primary" label={data.character.species} style={{ borderRadius: '4px' }} /></Grid>
                    </Grid>
                  </CardContent>
                </Card>
            </Grid>
            :''}
        </Grid>
    </div>
  );
}

export default Character;