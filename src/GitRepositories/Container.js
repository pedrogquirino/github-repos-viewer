import React, { useEffect, useState } from 'react';
import { getAllRepository } from './Service';
import Spinner from '../shared/Spinner';
import GitRepositoryGrid from './Component';
import ErrorPage from '../shared/ErrorPage';


export default () => {


  const [gitList, setGitList] = useState([]);
  
  const [isLoading, setLoading] = useState({
    value: true,
  });
  
  const [error, setError] = useState({
    value: null,
  });
  const setErrorState = (newValue) => {    
    setError({ ...error, value: newValue })
  }

  useEffect(() => {  

    async function fetchData(){
      
      try{
        const repos = await getAllRepository();  
        setGitList(repos.data);        
      }
      catch(e){                
        setErrorState(e);
      }
      finally{        
        setLoading(false);
      }
      
    }

    fetchData();

  },[setErrorState])  

  if(gitList.length > 0){
    return (<GitRepositoryGrid data={gitList}/>);
  }

  if(isLoading){        
    return <Spinner loading={isLoading} />;  
  }  

  if(error !== null){      
      return <ErrorPage error={error.value} />;
  }

  return <div>"No data found"</div>;

}