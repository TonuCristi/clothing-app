import { Outlet } from "react-router-dom";
// import styled from "styled-components";
import NavBar from "../components/NavBar";

export default function RootLayout() {
  return (
    <div>
      <NavBar />

      <Outlet></Outlet>
    </div>
  );
}
