import { BriefcaseBusiness, CarTaxiFront, Facebook, Home, Instagram, Mail, MapPinned, Phone, Send } from "lucide-react";

export const items = [
    {
        title: "Ijtimoiy tarmoqlar",
        resources: [
            {
                name: "Telegram",
                icon: <Send size={20} />,
                link: "https://t.me/Tilavuz"
            },
            {
                name: "Facebook",
                icon: <Facebook size={20} />,
                link: "https://t.me/Tilavuz"
            },
            {
                name: "Instagram",
                icon: <Instagram size={20} />,
                link: "https://t.me/Tilavuz"
            },
        ]
    },
    {
        title: "Biz bilan bog'lanish",
        resources: [
            {
                name: "Telefon",
                icon: <Phone size={20} />,
                link: "tel:+998908827251"
            },
            {
                name: "Manzil",
                icon: <MapPinned size={20} />,
                link: "tel:+998908827251"
            },
            {
                name: "Email",
                icon: <Mail size={20} />,
                link: "tel:+998908827251"
            },
        ]
    },
    {
        title: "Sayt xaritasi",
        resources: [
            {
                name: "Bosh sahifa",
                icon: <Home  size={20} />,
                link: "/"
            },
            {
                name: "Yo'lovchilar",
                icon: <BriefcaseBusiness size={20} />,
                link: "/passengers"
            },
            {
                name: "Haydovchilar",
                icon: <CarTaxiFront size={20} />,
                link: "/drivers"
            },
        ]
    }
]