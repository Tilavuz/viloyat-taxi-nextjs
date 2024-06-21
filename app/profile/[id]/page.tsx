"use client"
import User from "@/app/components/user";
import { Driver, Passenger } from "@/interfaces/user-interface";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
const url = process.env.NEXT_PUBLIC_API_URL

const PostPage = () => {
    const { id } = useParams()
    const [cookies] = useCookies(['token'])
    const [datas, setDatas] = useState<Driver[] | Passenger[]>()
    useEffect(() => {
        const getUserDatas = async () => {
            const res = await axios.get(url + `/driver/post/passengers/${id}`, {
                headers: {
                    'x-auth-token': cookies.token
                }
            })
            setDatas(res.data)
        }
        if(id) {
            getUserDatas()
        }
    }, [id, cookies.token])


    console.log(datas);
    

    return (
        <div>
            {
                datas?.map(data => {
                    return <User key={data._id} firstName={data.first_name} lastName={data.last_name} phoneNumber={data.phone_number} role={data.role} profilePicture={data.profile_picture} />
                })
            }
        </div>
    );
};

export default PostPage;
