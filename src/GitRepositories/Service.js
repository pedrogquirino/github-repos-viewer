import {getAll} from '../shared/Api';
import ConstantPaths from '../utils/constants/Paths';


export async function  getAllRepository() {    
    
    try {
        const urlGitRepositories = ConstantPaths.BasePath + ConstantPaths.GitRepositories;
        const repos = await getAll(urlGitRepositories);                
        return repos;
    } 
    catch(error) {
        throw error;        
    }
}
