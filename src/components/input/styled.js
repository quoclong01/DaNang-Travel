/* eslint-disable react/prop-types */
import styled from 'styled-components';


export const Wrapper = styled.div`
  font-size: 14px;

  .ant-input{
    height: 40px;
    border: 1px solid #1890ff;
  }
  
  .label {
    margin-bottom: 5px;
    color: #607d8b;

    .ant-typography {
      color: #607d8b;
  }

  .icon {
    margin-right: 8px;
  }

  @media (max-width: 896px) {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 414px) {
    font-size: 11px;
  }
`;

export const WrapperError = styled.div`
  color: red;
  width: 100%;
  height: 25px;
  margin-bottom: 5px;

  @media (max-width: 896px) {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 414px) {
    font-size: 11px;
  }
`;
