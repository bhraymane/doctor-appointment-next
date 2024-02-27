import axios from 'axios'


const API_KEY=process.env.NEXT_PUBLIC_STRAPI_API_KEY

const axiosClinet =axios.create({
    baseURL:'http://localhost:1337/api',
    headers:{
        'Authorization':`Bearer ${API_KEY}`
    }

})

const getCategory=()=>axiosClinet.get('categories?populate=*')

const getDoctor=()=>axiosClinet.get('doctors?populate=*')
const getDoctorByCategory=(category)=>axiosClinet.get('doctors?filters[categories][Name][$in]='+category+"&populate=*")
const getDoctorById=(id)=>axiosClinet.get('doctors/'+id+"?populate=*" )

const bookAppointment=(data)=>axiosClinet.post('/appointments',data)



const sendEmail=(data)=>axios.post('/api/sendEmail',data)

const getUserBookingList=(userEmail)=>axiosClinet.get('/appointments?[filters][Email][$eq]='+userEmail+'&populate[doctor][populate][Image][populate][0]=url&populate=* ') 
const deletbookAppointment=(id)=>axiosClinet.delete('/appointments/'+id)

export default {getCategory,getDoctor,getDoctorByCategory,getDoctorById,bookAppointment,sendEmail,getUserBookingList,deletbookAppointment}
