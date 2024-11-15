
import axios from 'axios';
import  AxiosResponse  from 'axios';



const baseUrl = process.env.wordpress_baseurl || 'default_value';


const getAllAirtcle=()=>{

    return fetch(`${baseUrl}/wp-json/wp/v2/posts`)
}