import axios from "axios";
import { MAIN_URL } from "../../common/urls";
export const get_user_scores = async ( userId , sem) =>{
    try {
     const response = await axios.get(`${MAIN_URL}user/get-user-scores/${userId}/${sem}/`)
     console.log(response.data);
     return response.data;
    }catch(error){
     console.log("Error fetching scores data : " , error);
     return null;
    }
 }

export const get_leader_board = async() =>{
    const userId = localStorage.getItem("user_id");
    try{
        const response = await axios.get(`${MAIN_URL}get-leader-board/${userId}/`)
        return response.data;
    }
    catch(error){
        console.log("Error fetching leaderboard data : " , error);
        return null;
    }
}