import * as React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useCharacterListQuery } from '../../generated/graphql';
import CharacterList from './CharacterList';


const CharacterListContainer = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page') || 1);
  const { data, error, loading } = useCharacterListQuery({ variables: { page } });
  const onPageChange = (page: number) => { setSearchParams(page === 1 ? '' : `page=${page}`); };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return <CharacterList data={data} page={page} onChangePage={onPageChange} />;
};


export default CharacterListContainer;