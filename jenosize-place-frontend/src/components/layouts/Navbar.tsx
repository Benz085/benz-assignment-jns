import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import { useAppSelector } from "@/redux/hooks";
import Router from "next/router";
import { dispatch } from "@/redux/store";
import { setSearchAction } from "@/redux/slices/search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Navbar = () => {
  const { search } = useAppSelector((state) => state.search);
  const [searchQuery, setSearchQuery] = React.useState("");
  const refSearchInput = React.useRef<HTMLInputElement>(
    null
  ) as React.MutableRefObject<HTMLInputElement>;

  const onSubmitSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchQuery !== "") {
      if (typeof window === "object") {
        window.scrollTo({ top: 0 });
      }
      Router.push({ pathname: "/", query: { s: `/?s=${searchQuery}` } });
      setTimeout(() => {
        window.location.href = `/?s=${searchQuery}`;
      }, 500);
    }
  };

  React.useEffect(() => {
    setSearchQuery(search);
  }, [search]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            WEBSITE-DEV
          </Typography>
          <Search>
            <form onSubmit={onSubmitSearch}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                value={searchQuery}
                ref={refSearchInput}
                onChange={(event: any) => {
                  dispatch(setSearchAction(event.target.value));
                }}
              />
            </form>
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
