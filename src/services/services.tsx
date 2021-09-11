import  axios from 'axios'

export const getProjects = async ()=>{
    const projects = await axios
        .get('http://127.0.0.1:8080/api/projects')
        .then( response =>{
            return response;
        })
        .catch( error =>{
            console.log(error);
            return error;
        })
    console.log(projects)
    return projects;
} 

export const getAboutUs = async () =>{
    const aboutus = await axios
        .get('http://127.0.0.1:8080/aboutus_json')
        .then( response =>{
            return response;
        })
        .catch( error =>{
            console.log(error);
            return error;
        })
    console.log(aboutus)
    return aboutus;
}