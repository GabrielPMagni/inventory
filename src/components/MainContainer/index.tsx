import styled from "styled-components";
import { colors } from "../shared/Constants";

export const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: ${colors.backgroundColor};
`