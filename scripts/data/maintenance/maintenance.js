import {
  HVACSystemMaintenanc,
  guttterMaintenance,
  interiorCleaning,
  landscapingMaintenance,
  paintingMaintenance,
  plumbingAndElectricalMaintenance,
  poolMaintenance,
  regularPropMaintenance,
  roofMaintenance,
} from "./maintenance-content.js";

export let maintenanceCards = [
  {
    title: "Regular Property Maintenance",
    image: "/minec/assets/images/service/maintenance/regular-maintenance.webp",
    text: "Keeping Your Property in Prime Condition",
    icon: "/minec/assets/icons/services/maintenance/icons8-hammer-100.png",
    content: regularPropMaintenance,
  },
  {
    title: "HVAC System Maintenance",
    image: "/minec/assets/images/service/maintenance/hvac-maintenance.jpeg",
    text: "Ensuring Comfort All Year Round",
    icon: "/minec/assets/icons/services/maintenance/icons8-wind-100.png",
    content: HVACSystemMaintenanc,
  },
  {
    title: "Plumbing and Electrical Maintenance",
    image: "/minec/assets/images/service/maintenance/plumbing-services.jpeg",
    text: "Reliable Plumbing and Electrical Care",
    icon: "/minec/assets/icons/services/maintenance/icons8-faucet-100.png",
    content: plumbingAndElectricalMaintenance,
  },

  {
    title: "Roofing Maintenance and Repair",
    image: "/minec/assets/images/service/maintenance/roof-maintenance.jpeg",
    text: "Protecting Your Home from Top to Bottom",
    icon: "/minec/assets/icons/services/maintenance/properties.png",
    content: roofMaintenance,
  },
  {
    title: "Painting and Exterior Maintenance",
    image: "/minec/assets/images/service/maintenance/painting-interior.webp",
    text: "Refreshing Your Home's Curb Appeal",
    icon: "/minec/assets/icons/services/maintenance/icons8-paint-brush-100.png",
    content: paintingMaintenance,
  },
  {
    title: "Landscaping Maintenance",
    image: "/minec/assets/images/service/maintenance/landscaping-maintenance.jpeg",
    text: "Keeping Your Outdoors Beautiful",
    icon: "/minec/assets/icons/services/maintenance/icons8-leaf-100.png",
    content: landscapingMaintenance,
  },
  {
    title: "Pool and Spa Maintenance",
    image: "/minec/assets/images/service/maintenance/pool-maintenance.png",
    text: "Sparkling Clean Pools and Spas",
    icon: "/minec/assets/icons/services/maintenance/icons8-pool-100.png",
    content: poolMaintenance,
  },

  {
    title: "Gutter Cleaning and Maintenance",
    image: "/minec/assets/images/service/maintenance/gutter-cleaning.jpeg",
    text: "Ensuring Clear and Functional Gutters",
    icon: "/minec/assets/icons/services/maintenance/icons8-bucket-100.png",
    content: guttterMaintenance,
  },

  {
    title: "Interior Cleaning Services",
    image: "/minec/assets/images/service/maintenance/interior-cleaning.jpeg",
    text: "Pristine Interiors, Guaranteed",
    icon: "/minec/assets/icons/services/maintenance/icons8-broom-100.png",
    content: interiorCleaning,
  },
];
