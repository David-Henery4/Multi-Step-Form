import {ArcadeIcon, AdvancedIcon, ProIcon} from "../assets"

const planDetails = [
  {
    id: 1,
    icon: ArcadeIcon,
    title: "Arcade",
    price: "$9/mo",
    pricePerYear: 90,
    pricePerMonth: 9,
    offer: "2 months free",
    isActive: true,
  },
  {
    id: 2,
    icon: AdvancedIcon,
    title: "Advanced",
    price: "$12/mo",
    pricePerYear: 120,
    pricePerMonth: 12,
    offer: "2 months free",
    isActive: false,
  },
  {
    id: 3,
    icon: ProIcon,
    title: "Pro",
    price: "$15/mo",
    pricePerYear: 150,
    pricePerMonth: 15,
    offer: "2 months free",
    isActive: false,
  },
];

export default planDetails;
