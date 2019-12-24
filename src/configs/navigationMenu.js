import PlaceIcon from "@material-ui/icons/Business";
import SettingsIcon from "@material-ui/icons/SettingsApplicationsOutlined";
import SignOutIcon from "@material-ui/icons/ExitToApp";

export default () => {
  return [
    {
      canList: true,
      divider: true
    },
    {
      canList: true,
      type: "Menus"
    },
    {
      title: "Dashboard",
      disabled: false,
      path: "/dashboard",
      canList: true,
      icon: PlaceIcon
    },
    {
      title: "Doces",
      disabled: false,
      path: "/candies",
      canList: true,
      icon: PlaceIcon
    },
    {
      title: "Estoques",
      disabled: false,
      path: "/stock",
      canList: true,
      icon: PlaceIcon
    },
    {
      canList: true,
      divider: true
    },
    {
      canList: true,
      type: "Opções"
    },
    {
      title: "Configurações",
      path: "/settings",
      disabled: true,
      canList: true,
      icon: SettingsIcon
    },
    {
      title: "Sair",
      disabled: true,
      canList: true,
      icon: SignOutIcon,
      customOnClick: () => null
    }
  ];
};
