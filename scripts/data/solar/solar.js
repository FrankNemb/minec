import { newHome} from "../construction/construction-content.js"
import { batteryBackupSolutions, gridTiedSolarSolutions, offGridSolarSolutions, solarCleaningAndMaintenance, solarEnergyConsultation, solarEnergySystemDesign, solarPanelInstallation, solarPanelRepairServices } from "./solar-content.js"

export let solarCards  = [
    {
        title: "Solar Panel Installation",
        image: "/minec/assets/images/service/solar/Solar-installation.png",
        text: "Harness the Power of the Sun",
        icon: "/minec/assets/icons/services/solar/icons8-sun-100.png",
        content: solarPanelInstallation
    },
    {
        title: "Solar Energy System Design",
        image: "/minec/assets/images/service/solar/solar-design.jpeg",
        text: "Customized Solar Solutions for Maximum Efficiency",
        icon: "/minec/assets/icons/services/solar/icons8-ruler-100.png",
        content: solarEnergySystemDesign
        
    },
    {
        title: "Solar  Cleaning and Maintenance",
        image: "/minec/assets/images/service/solar/solar-panels-maintenance.webp",
        text: "Keeping Your Solar System at Peak Performance",
        icon: "/minec/assets/icons/services/solar/icons8-sponge-100.png",
        content: solarCleaningAndMaintenance
    },
    
    {
        title: "Battery Backup Solutions",
        image: "/minec/assets/images/service/solar/solar-battery-1.webp",
        text: "Uninterrupted Power with Reliable Battery Storage",
        icon: "/minec/assets/icons/services/solar/icons8-battery-100.png",
        content: batteryBackupSolutions
        
    },
    {
        title: "Off-Grid Solar Solutions",
        image: "/minec/assets/images/service/solar/off-grid.webp",
        text: "Achieve Energy Independence Anywhere",
        icon: "/minec/assets/icons/services/solar/icons8-globe-100.png",
        content: offGridSolarSolutions
    },
    {
        title: "Grid-Tied Solar Systems",
        image: "/minec/assets/images/service/solar/grid-tied.jpeg",
        text: "The Best of Both Worlds: Solar Power and Grid Stability",
        icon: "/minec/assets/icons/services/solar/icons8-plug-100.png",
        content: gridTiedSolarSolutions
    },
    {
        title: "Solar Energy Consultation",
        image: "/minec/assets/images/service/solar/solar-consultation.jpeg",
        text: "Expert Advice for Your Solar Journey",
        icon: "/minec/assets/icons/services/solar/icons8-speech-bubble-100.png",
        content: solarEnergyConsultation
    },
    {
        title: "Solar Panel Repair Services",
        image: "/minec/assets/images/service/solar/solar-repair.jpeg",
        text: "Quick and Efficient Solar Panel Repairs",
        icon: "/minec/assets/icons/services/solar/icons8-wrench-100.png",
        content: solarPanelRepairServices
    }

]
