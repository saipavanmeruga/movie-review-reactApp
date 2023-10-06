import axios from 'axios';
export default axios.create({
    baseURL:'https://2a11-2600-387-15-1811-00-2.ngrok-free.app',
    headers:{"ngrok-skip-browser-warning":"true"},
});