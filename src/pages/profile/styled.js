import styled from 'styled-components';


export const WrapperProfile = styled.div`
  background: #f6f6fa;

  @media (max-width: 1200px) {
    font-size: 12px;
  }

  .avatar {
    width: 55px;
    height: 55px;
    border-style: none;
    border-radius: 50%;
    object-fit: cover;
  }
`;
