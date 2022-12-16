import styled from 'styled-components';

export const Wrapper = styled.div`
  .form {
    background: #ffffffe6;
    padding: 30px;
    border-radius: 8px;
    margin-bottom: 20px;

    .form__space {
      display: flex;

      .form__checkbox,
      .form__btn {
        display: flex;
        justify-content: center;

        .ant-btn {
          border-radius: 16px;
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
      }
    }
  }
`;
