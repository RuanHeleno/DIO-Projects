import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs)`
  font-size: 16px;
  width: 100%;
  margin-top: 16px;
`;

export const WrapperTabList = styled(TabList)`
  font-size: 1.2em;
  list-style-type: none;
  padding: 4px;
  display: flex;
  margin: 0;
  border-radius: 16px;
  border: 1px solid black;
  margin-top: 40px;
`;
WrapperTabList.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`
  border-radius: 16px;
  border: 1px solid black;
  padding: 16px;
  user-select: none;
  cursor: pointer;
  z-index: 99999;
  background-color: "#fff";
  background-color: white;
  margin: 8px;
  color: black;

  &.is-selected {
    box-shadow: 1px 1px 5px black;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
    box-shadow: 3px 2px 10px black;
  }

  &:focus {
    outline: none;
  }  
`;
WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
  padding: 16px;
  border: 1px solid "#ccc";
  display: none;
  margin: auto;

  &.is-selected {
    display: block;
  }
`;
WrapperTabPanel.tabsRole = "TabPanel";

export const WrapperList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
