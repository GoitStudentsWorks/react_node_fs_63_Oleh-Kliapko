import styled from '@emotion/styled';
import { device } from 'styles/mediaVeriables';

export const ListDay = styled.ul`
  width: 100%;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.borderTableAndInput};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0;
  padding: 0;
  margin-bottom: 15px;
`;

export const ItemDay = styled.li`
  overflow: hidden;
  text-transform: uppercase;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.m}) {
    width: 10px;
    :nth-of-type(1) {
      width: 15px;
    }
    :nth-of-type(3) {
      width: 16px;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.m}) {
    width: 33px;
    :nth-of-type(1) {
      width: 39px;
    }
    :nth-of-type(2) {
      width: 32px;
    }
    :nth-of-type(3) {
      width: 38px;
    }
    :nth-of-type(4) {
      width: 35px;
    }
    :nth-of-type(5) {
      width: 25px;
    }
    :nth-of-type(6) {
      width: 30px;
    }
  }
`;

export const DayBtn = styled.p`
  border: none;
  background-color: transparent;
  /* color: ${({ theme }) => theme.colors.loaderWrapper}; */

  color: ${({ id, theme }) => {
    switch (id) {
      case 'Saturday':
        return theme.colors.accent;
      case 'Sunday':
        return theme.colors.hovered;
      default:
        return theme.colors.loaderWrapper;
    }
  }};
  font-weight: ${({ theme }) => theme.fontWeight.sb};
  font-size: ${({ theme }) => theme.fontSizes.m};
  line-height: 1.1;
  padding: 16px 0px;
  @media ${device.tablet} {
    padding: 14px 0px;
  }
`;
