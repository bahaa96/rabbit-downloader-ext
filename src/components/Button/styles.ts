import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  height: 35px;

  &__wrapper {
    width: 150px;
    right: 5px;
    position: absolute;

    button {
      background-color: #ffa500;
      width: inherit;
      cursor: pointer;
      color: #fff;
      border-radius: 3px;
      letter-spacing: 0.4px;
      padding: 0;
      text-align: center;
      font-weight: 500;
      line-height: 2.5em;
      font-size: 14px;
      transition: 0.25s;
      z-index: 20;
      height: 2.5em;
      border: 0;
    }

    ul {
      list-style-type: none;
      border-radius: 3px;
      top: 4em;
      background-color: #ffa500;
      width: inherit;
      position: absolute;
      padding: 5px 0;
      z-index: 5;
      max-height: 100px;
      overflow-y: auto;
      overflow-x: hidden;
      text-align: center;
      opacity: 0;
    }

    i {
      color: #ffffff;
    }

    li {
      font-size: 12pt;
      height: 25px;

      a {
        color: #fff;
        text-decoration: none;
        height: inherit;
        display: block;
        transition: 0.25s;
        line-height: 25px;
        cursor: pointer;

        &:hover {
          background: #bf7a00;
        }
      }
    }

    &.active {
      opacity: 1;
    }

    &::-webkit-scrollbar {
      width: 4px !important;
      margin-right: 3px;
      padding: 0 5px;
    }

    &::-webkit-scrollbar-track {
      background: #bf7a00;
      border-radius: 3px !important;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #ddd !important;
      border-radius: 5px !important;
    }
  }
`;