import { newHome } from "../construction/construction-content.js"
import { bathroomRenovations, exteriorRenovations, flooringInstallations, kitchenRemodeling, paintingAndDecorating, roomAdditions, structuralRepairs, windowAndDoorReplacement } from "./renovations-content.js"
export let renovationCards  = [
    {
        title: "Kitchen Remodeling",
        image: "/minec/assets/images/service/renovations/kitchen.jpeg",
        text: "Transforming Kitchens into Culinary Masterpieces",
        icon: "/minec/assets/icons/services/renovations/icons8-kitchen-100.png",
        content: kitchenRemodeling
    },
    {
        title: "Bathroom Renovations",
        image: "/minec/assets/images/service/renovations/bathroom.webp",
        text: "Revitalizing Your Bathroom Oasis",
        icon: "/minec/assets/icons/services/renovations/icons8-bath-100.png",
        content: bathroomRenovations
    },
    {
        title: "Room Additions",
        image: "/minec/assets/images/service/renovations/bedroom.jpeg",
        text: "Expanding Your Living Space with Elegance",
        icon: "/minec/assets/icons/services/renovations/icons8-add-100.png",
        content: roomAdditions
    },
   
    {
        title: "Flooring Installation",
        image: "/minec/assets/images/service/renovations/flooring.jpeg",
        text: "Enhancing Homes with Quality Flooring",
        icon: "/minec/assets/icons/services/renovations/icons8-floor-64.png",
        content: flooringInstallations
    },
    {
        title: "Painting and Decorating",
        image: "/minec/assets/images/service/renovations/interior-and-exterior.webp",
        text: "Bringing New Life to Your Interiors",
        icon: "/minec/assets/icons/services/renovations/icons8-paint-brush-100 copy.png",
        content: paintingAndDecorating
    },
    {
        title: "Window and Door Replacement",
        image: "/minec/assets/images/service/renovations/window.jpeg",
        text: "Upgrading Windows and Doors for Beauty and Efficiency",
        icon: "/minec/assets/icons/services/renovations/icons8-window-100.png",
        content: windowAndDoorReplacement
    },
    {
        title: "Exterior Renovations",
        image: "/minec/assets/images/service/renovations/exterior-renovations.jpeg",
        text: "Giving Your Home a Fresh, New Look",
        icon: "/minec/assets/icons/services/renovations/properties.png",
        content: exteriorRenovations
    },
    {
        title: "Struction Repairs",
        image: "/minec/assets/images/service/renovations/structure-repair.jpeg",
        text: "When it is time, re-enforce",
        icon: "/minec/assets/icons/services/renovations/structure.webp",
        content: structuralRepairs
    }
]
