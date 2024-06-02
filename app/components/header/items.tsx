import { Home, BriefcaseBusiness, CarTaxiFront, ScrollText } from "lucide-react";

export const items = [
    {
        icon: <Home size={18}/>,
        location: '/',
        title: 'Bosh sahifa'
    },
    {
        icon: <BriefcaseBusiness size={18}/>,
        location: '/passengers',
        title: 'Yolovchilar'
    },
    {
        icon: <CarTaxiFront size={18}/>,
        location: '/drivers',
        title: 'Haydovchilar'
    },
    {
        icon: <ScrollText size={18}/>,
        location: '/about',
        title: 'Biz haqimizda'
    },
]