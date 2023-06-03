import * as React from 'react';
import { useParams } from 'react-router-dom';
import { useCharacterQuery } from '../../generated/graphql';
import Character from './Character';
import './styles.css';


const CharacterContainer = () => {
  const { id } = useParams();
  const { data, error, loading } = useCharacterQuery({ variables: { id: Number(id) } });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return <Character data={data} />;
};


export default CharacterContainer;