import { Calendar, Car, Heart } from "lucide-react";

export const dataGeneralSidebar = [
  {
    icon: Car,
    label: "Carros",
    href: "/dashboard",
  },
  {
    icon: Calendar,
    label: "Reservas de Carros",
    href: "/reserves",
  },
  {
    icon: Heart,
    label: "Carros Favoritos",
    href: "/loved-cars",
  },
];

export const dataAdminSidebar = [
  {
    icon: Car,
    label: "Gerencie seus carros",
    href: "/your-cars",
  },
  {
    icon: Calendar,
    label: "Todas as reservas",
    href: "/all-reserves",
  },
];
